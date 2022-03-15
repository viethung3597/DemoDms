using Microsoft.AspNetCore.Identity;
using Bpo.Dms.WebApp.Auth.Data;
using Serilog;
using System.Security.Claims;

namespace Bpo.Dms.WebApp.Auth
{
    public static class IdentityDataSeeder
    {
        private const string ROOT_USERNAME = "root";
        private const string ROOT_EMAIL = "root@bpovietnam.net";
        private const string ROOT_PASSWORD = "Qwer@1234";

        public static void EnsureRootUserCreated(WebApplication app)
        {
            using (var scope = app.Services.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var context = scope.ServiceProvider.GetService<AppIdentityDbContext>();
                if (context == null) { throw new InvalidOperationException("AppIdentityDbContext"); }
                context.Database.EnsureCreated();

                var userManager = scope.ServiceProvider.GetRequiredService<UserManager<User>>();
                var configuration = scope.ServiceProvider.GetRequiredService<IConfiguration>();

                var rootUser = userManager.FindByNameAsync(ROOT_USERNAME).Result;

                if (rootUser == null)
                {
                    var password = configuration.GetValue<string>("IdentityServer:RootPassword") ?? ROOT_PASSWORD;

                    rootUser = new Auth.Data.User
                    {
                        UserName = ROOT_USERNAME,
                        Email = ROOT_EMAIL,
                        EmailConfirmed = true
                    };
                    var result = userManager.CreateAsync(rootUser, password).Result;
                    if (!result.Succeeded)
                    {
                        throw new Exception(result.Errors.First().Description);
                    }

                    //result = userManager.AddToRoleAsync(rootUser, RoleConfig.Root).Result;
                    //if (!result.Succeeded)
                    //{
                    //    throw new Exception(result.Errors.First().Description);
                    //}

                    result = userManager.AddClaimsAsync(rootUser, new Claim[] { new Claim(ClaimTypes.Name, "root") }).Result;
                    if (!result.Succeeded)
                    {
                        throw new Exception(result.Errors.First().Description);
                    }

                }
                else
                {
                    Log.Debug("root already exists");
                }
            }
        }

        public static void SeedTestUsers(WebApplication app)
        {
            using (var scope = app.Services.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var context = scope.ServiceProvider.GetService<AppIdentityDbContext>();
                if (context == null) { throw new InvalidOperationException("AppIdentityDbContext"); }
                context.Database.EnsureCreated();

                var userManager = scope.ServiceProvider.GetRequiredService<UserManager<User>>();
                var configuration = scope.ServiceProvider.GetRequiredService<IConfiguration>();

                for (var i = 1; i <= 20; ++i)
                {
                    var userName = "test" + i;
                    var user = userManager.FindByNameAsync(userName).Result;

                    if (user == null)
                    {
                        user = new Auth.Data.User
                        {
                            UserName = userName,
                            Email = userName + "@bpovietnam.com.vn",
                            EmailConfirmed = true
                        };
                        var result = userManager.CreateAsync(user, "Qwer@1234").Result;
                        if (!result.Succeeded)
                        {
                            throw new Exception(result.Errors.First().Description);
                        }

                        result = userManager.AddClaimsAsync(user, new Claim[] { new Claim(ClaimTypes.Name, userName) }).Result;
                        if (!result.Succeeded)
                        {
                            throw new Exception(result.Errors.First().Description);
                        }

                    }
                    else
                    {
                        Log.Debug("root already exists");
                    }
                }
            }
        }
    }
}
