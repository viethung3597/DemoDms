using Microsoft.AspNetCore.Identity;

namespace Bpo.Dms.WebApp.Auth.Data
{
    public class Role : IdentityRole
    {
        public List<UserRole> UserRoles { get; set; } = new List<UserRole>();
        public List<RolePermission> RolePermissions { get; set; } = new List<RolePermission>();
    }
}
