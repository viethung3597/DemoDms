namespace Bpo.Dms.WebApp.Auth.Data
{
    public class Permission
    {
        public string Id { get; set; }
        public string Name { get; set; }

        public Permission(string id, string name)
        {
            Id = id;
            Name = name;
        }

        public List<RolePermission> RolePermissions { get; set; } = new List<RolePermission>();
    }
}
