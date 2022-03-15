using Microsoft.EntityFrameworkCore;

namespace Bpo.Dms.WebApp.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {

        }
    }
}