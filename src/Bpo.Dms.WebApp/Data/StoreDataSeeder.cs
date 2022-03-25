using Bpo.Dms.WebApp.Models;
using Serilog;
using System.Security.Claims;

namespace Bpo.Dms.WebApp.Data
{
    public static class StoreDataSeeder
    {
        public static void SeedTestStores(WebApplication app)
        {
            using (var scope = app.Services.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var context = scope.ServiceProvider.GetService<AppDbContext>();
                if (context == null) { throw new InvalidOperationException("AppDbContext"); }
                context.Database.EnsureCreated();

                for (var i = 1; i <= 20; ++i)
                {
                    var storeName = "test" + i;
                    var store = new Store
                    {
                        Code = storeName + "Code",
                        Name = storeName,
                        Country = storeName + "Country",
                        Email = storeName + "Email",
                        NumberPhone = 90909 + i,
                        Description = storeName + "Description",
                        Location = new PointDto(20 + i ,50 + i).ToPoint()
                    };
                    context.Stores.Add(store);
                    context.SaveChangesAsync();
                }
            }   
        }
    }
}
