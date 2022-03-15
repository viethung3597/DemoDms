using Microsoft.AspNetCore.Identity;

namespace Bpo.Dms.WebApp.Auth.Data
{
    public class User : IdentityUser
    {
        public List<UserRole> UserRoles { get; set; } = new List<UserRole>();
    }
}
