using Bpo.Dms.WebApp.Data;
using Bpo.Dms.WebApp.Auth;
using Microsoft.EntityFrameworkCore;
using Serilog;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Authorization;
using SixLabors.ImageSharp.Web.DependencyInjection;

Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateBootstrapLogger();

Log.Information("Starting up");
try
{
    var builder = WebApplication.CreateBuilder(args);
    builder.Host.UseSerilog((context, loggerConfiguration) => loggerConfiguration
        .WriteTo.Console(outputTemplate: "[{Timestamp:HH:mm:ss} {Level}] {SourceContext}{NewLine}{Message:lj}{NewLine}{Exception}{NewLine}")
        .WriteTo.File("logs/log.txt", rollingInterval: RollingInterval.Day)
        .Enrich.FromLogContext()
        .ReadFrom.Configuration(context.Configuration));

    // Add services to the container.
    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
    builder.Services.AddDbContext<AppDbContext>(options =>
        options.UseSqlServer(connectionString));

    builder.Services.AddDatabaseDeveloperPageExceptionFilter();

    builder.Services.AddControllers(opts =>
    {
        //opts.Filters.Add(new AuthorizeFilter());
        opts.Filters.Add(new AutoValidateAntiforgeryTokenAttribute());
    });
    builder.Services.AddRazorPages();

    // Authentication & Authorization
    builder.ConfigureAuth();
    builder.Services.AddAntiforgery();
    builder.Services.AddSwaggerGen();
    builder.Services.AddImageSharp();

    var app = builder.Build();
    // Configure the HTTP request pipeline.
    if (app.Environment.IsDevelopment())
    {
        app.UseMigrationsEndPoint();
    }
    else
    {
        // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
        app.UseHsts();
    }

    app.UseHttpsRedirection();
    app.UseImageSharp();
    app.UseStaticFiles();
    app.UseRouting();

    app.UseAuthentication();
    app.UseAuthorization();

    var antiforgery = app.Services.GetRequiredService<IAntiforgery>();

    app.Use((context, next) =>
    {
        var requestPath = context.Request.Path.Value.ToUpper();
        if (!requestPath.StartsWith("/API"))
        {
            var tokenSet = antiforgery.GetAndStoreTokens(context);
            context.Response.Cookies.Append("XSRF-TOKEN", tokenSet.RequestToken!,
                new CookieOptions { HttpOnly = false });
        }

        return next(context);
    });

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapDefaultControllerRoute();
        endpoints.MapRazorPages();
    });

    if (app.Environment.IsDevelopment())
    {
        app.UseSpa(spa =>
        {
            spa.Options.SourcePath = "ClientApp";
            spa.UseProxyToSpaDevelopmentServer("http://localhost:8000");
        });
    }
    else
    {
        app.MapFallbackToFile("index.html");
    }

    IdentityDataSeeder.EnsureRootUserCreated(app);
    if (app.Environment.IsDevelopment())
    {
        IdentityDataSeeder.SeedTestUsers(app);
    }
    app.Run();
}
catch (Exception ex) when (ex.GetType().Name is not "StopTheHostException") // https://github.com/dotnet/runtime/issues/60600
{
    Log.Fatal(ex, "Unhandled exception");
}
finally
{
    Log.Information("Shut down complete");
    Log.CloseAndFlush();
}
