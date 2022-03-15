using Microsoft.AspNetCore.Identity;

namespace Bpo.Dms.WebApp.Auth.Data
{
    public class UserRole : IdentityUserRole<string>
    {
        public User User { get; set; }
        public Role Role { get; set; }
    }
}
