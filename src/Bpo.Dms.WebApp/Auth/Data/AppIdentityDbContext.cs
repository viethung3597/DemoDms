using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Bpo.Dms.WebApp.Auth.Data
{
    public class AppIdentityDbContext :
        IdentityDbContext<User, Role, string, IdentityUserClaim<string>, UserRole, IdentityUserLogin<string>, IdentityRoleClaim<string>, IdentityUserToken<string>>
    {

        public AppIdentityDbContext(
            DbContextOptions<AppIdentityDbContext> options) : base(options)
        {
        }

        public DbSet<Permission> Permissions { get; set; }
        public DbSet<RolePermission> RolePermissions { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<User>(e =>
            {
                e.ToTable("User");
                e.Property(x => x.Id).HasMaxLength(225);
            });

            builder.Entity<Role>(e =>
            {
                e.ToTable("Role");
                e.Property(x => x.Id).HasMaxLength(225);
                e.HasMany(x => x.RolePermissions).WithOne(x => x.Role).HasForeignKey(x => x.RoleId);
            });
            builder.Entity<UserRole>(e =>
            {
                e.ToTable("UserRole");
                e.HasOne(x => x.User).WithMany(x => x.UserRoles).HasForeignKey(x => x.UserId);
                e.HasOne(x => x.Role).WithMany(x => x.UserRoles).HasForeignKey(x => x.RoleId);
            });
            builder.Entity<IdentityUserClaim<string>>().ToTable("UserClaim");
            builder.Entity<IdentityRoleClaim<string>>().ToTable("RoleClaim");
            builder.Entity<IdentityUserLogin<string>>(e =>
            {
                e.ToTable("UserLogin");
                e.Property(x => x.ProviderKey).HasMaxLength(225);
                e.Property(x => x.LoginProvider).HasMaxLength(225);
            });
            builder.Entity<IdentityUserToken<string>>(e =>
            {
                e.ToTable("UserToken");
                e.Property(x => x.Name).HasMaxLength(112);
                e.Property(x => x.LoginProvider).HasMaxLength(112);
            });
            builder.Entity<RolePermission>(e =>
            {
                e.HasKey(x => new { x.RoleId, x.PermissionId });
                e.HasOne(x => x.Role).WithMany(x => x.RolePermissions).HasForeignKey(x => x.RoleId);
                e.HasOne(x => x.Permission).WithMany(x => x.RolePermissions).HasForeignKey(x => x.PermissionId);
            });
        }
    }
}
