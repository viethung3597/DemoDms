namespace Bpo.Dms.WebApp.Auth.Data
{
    public class RolePermission
    {
        public string RoleId { get; set; }
        public string PermissionId { get; set; }

        public RolePermission(string roleId, string permissionId)
        {
            RoleId = roleId;
            PermissionId = permissionId;
        }

        public Role Role { get; set; }
        public Permission Permission { get; set; }
    }
}
