using Bpo.Dms.WebApp.Auth.Data;

namespace Bpo.Dms.WebApp.Auth
{
    public static class RoleConfig
    {
        public static string Root = "root";
        public static string Admin = "admin";
        public static string Distributor = "distributor";
        public static string Salesman = "salesman";
        public static string SalesAdmin = "salesadmin";
        public static string SalesManager = "salesmanager";

        public static List<Role> GetRoles()
        {
            return new List<Role>
            {
                new Role { Id = Root, Name = Root, RolePermissions = PermissionConfig.GetPermisisons()
                    .Select(x=> new RolePermission( Root, x.Id)).ToList() },
                new Role { Id = Admin, Name = Admin, RolePermissions = PermissionConfig
                    .GetPermisisons().Select(x=> new RolePermission(Admin,x.Id)).ToList() },
                new Role { Id = Distributor, Name = Distributor, RolePermissions = new List<RolePermission> {
                    new RolePermission(Distributor, PermissionConfig.OrderRead),
                    new RolePermission(Distributor, PermissionConfig.OrderCreate),
                    new RolePermission(Distributor, PermissionConfig.OrderCancel),
                    new RolePermission(Distributor, PermissionConfig.OrderUpdate),
                } },
                new Role { Id = Salesman, Name = Salesman, RolePermissions = new List<RolePermission> {
                    new RolePermission(Salesman, PermissionConfig.DistributorRead),
                    new RolePermission(Salesman, PermissionConfig.DistributorCreate),
                    new RolePermission(Salesman, PermissionConfig.DistributorUpdate),
                    new RolePermission(Salesman, PermissionConfig.VisitRead),
                    new RolePermission(Salesman, PermissionConfig.VisitCreate),
                    new RolePermission(Salesman, PermissionConfig.VisitUpdate),
                    new RolePermission(Salesman, PermissionConfig.VisitCancel),
                    new RolePermission(Salesman, PermissionConfig.RouteRead),
                    new RolePermission(Salesman, PermissionConfig.RouteCreate),
                    new RolePermission(Salesman, PermissionConfig.RouteUpdate),
                    new RolePermission(Salesman, PermissionConfig.ProductRead),
                    new RolePermission(Salesman, PermissionConfig.FactoryRead),
                    new RolePermission(Salesman, PermissionConfig.CompetitorRead),
                    new RolePermission(Salesman, PermissionConfig.CompetitorCreate),
                    new RolePermission(Salesman, PermissionConfig.CompetitorUpdate),
                    new RolePermission(Salesman, PermissionConfig.CompetitorDelete),
                    new RolePermission(Salesman, PermissionConfig.OrderRead),
                    new RolePermission(Salesman, PermissionConfig.OrderCreate),
                    new RolePermission(Salesman, PermissionConfig.OrderUpdate),
                    new RolePermission(Salesman, PermissionConfig.OrderCancel),
                    new RolePermission(Salesman, PermissionConfig.ReportDistributorVisitRead),
                    new RolePermission(Salesman, PermissionConfig.ReportEmployeeVisitRead),
                } },
                new Role { Id = SalesAdmin, Name = SalesAdmin, RolePermissions = new List<RolePermission> {
                    new RolePermission(SalesAdmin, PermissionConfig.DistributorRead ),
                    new RolePermission(SalesAdmin, PermissionConfig.DistributorCreate ),
                    new RolePermission(SalesAdmin, PermissionConfig.DistributorUpdate ),
                    new RolePermission(SalesAdmin, PermissionConfig.DistributorDelete),
                    new RolePermission(SalesAdmin, PermissionConfig.DistributorSync ),
                    new RolePermission(SalesAdmin, PermissionConfig.DistributorAssign),
                    new RolePermission(SalesAdmin, PermissionConfig.SalesmanRead),
                    new RolePermission(SalesAdmin, PermissionConfig.SalesmanCreate),
                    new RolePermission(SalesAdmin, PermissionConfig.SalesmanUpdate),
                    new RolePermission(SalesAdmin, PermissionConfig.SalesmanDelete),
                    new RolePermission(SalesAdmin, PermissionConfig.SalesmanSync),
                    new RolePermission(SalesAdmin, PermissionConfig.VisitRead ),
                    new RolePermission(SalesAdmin, PermissionConfig.VisitUpdate ),
                    new RolePermission(SalesAdmin, PermissionConfig.VisitDelete),
                    new RolePermission(SalesAdmin, PermissionConfig.RouteRead),
                    new RolePermission(SalesAdmin, PermissionConfig.RouteCreate),
                    new RolePermission(SalesAdmin, PermissionConfig.RouteUpdate),
                    new RolePermission(SalesAdmin, PermissionConfig.RouteDelete),
                    new RolePermission(SalesAdmin, PermissionConfig.RouteAssign),
                    new RolePermission(SalesAdmin, PermissionConfig.ProductRead),
                    new RolePermission(SalesAdmin, PermissionConfig.ProductCreate),
                    new RolePermission(SalesAdmin, PermissionConfig.ProductUpdate),
                    new RolePermission(SalesAdmin, PermissionConfig.ProductDelete),
                    new RolePermission(SalesAdmin, PermissionConfig.ProductSync),
                    new RolePermission(SalesAdmin, PermissionConfig.FactoryRead),
                    new RolePermission(SalesAdmin, PermissionConfig.FactoryCreate),
                    new RolePermission(SalesAdmin, PermissionConfig.FactoryUpdate),
                    new RolePermission(SalesAdmin, PermissionConfig.FactoryDelete),
                    new RolePermission(SalesAdmin, PermissionConfig.FactorySync),
                    new RolePermission(SalesAdmin, PermissionConfig.CompetitorRead),
                    new RolePermission(SalesAdmin, PermissionConfig.CompetitorCreate),
                    new RolePermission(SalesAdmin, PermissionConfig.CompetitorUpdate),
                    new RolePermission(SalesAdmin, PermissionConfig.CompetitorDelete),
                    new RolePermission(SalesAdmin, PermissionConfig.OrderRead),
                    new RolePermission(SalesAdmin, PermissionConfig.ReportDistributorVisitRead),
                    new RolePermission(SalesAdmin, PermissionConfig.ReportEmployeeVisitRead),
                } },
                new Role { Id = SalesManager, Name = SalesManager, RolePermissions = new List<RolePermission> {
                    new RolePermission(SalesManager, PermissionConfig.DistributorRead ),
                    new RolePermission(SalesManager, PermissionConfig.DistributorCreate ),
                    new RolePermission(SalesManager, PermissionConfig.DistributorUpdate ),
                    new RolePermission(SalesManager, PermissionConfig.DistributorDelete),
                    new RolePermission(SalesManager, PermissionConfig.DistributorSync ),
                    new RolePermission(SalesManager, PermissionConfig.DistributorAssign),
                    new RolePermission(SalesManager, PermissionConfig.SalesmanRead),
                    new RolePermission(SalesManager, PermissionConfig.SalesmanCreate),
                    new RolePermission(SalesManager, PermissionConfig.SalesmanUpdate),
                    new RolePermission(SalesManager, PermissionConfig.SalesmanDelete),
                    new RolePermission(SalesManager, PermissionConfig.SalesmanSync),
                    new RolePermission(SalesManager, PermissionConfig.SalesmanTrack),
                    new RolePermission(SalesManager, PermissionConfig.VisitRead ),
                    new RolePermission(SalesManager, PermissionConfig.VisitUpdate ),
                    new RolePermission(SalesManager, PermissionConfig.VisitDelete),
                    new RolePermission(SalesManager, PermissionConfig.RouteRead),
                    new RolePermission(SalesManager, PermissionConfig.RouteCreate),
                    new RolePermission(SalesManager, PermissionConfig.RouteUpdate),
                    new RolePermission(SalesManager, PermissionConfig.RouteDelete),
                    new RolePermission(SalesManager, PermissionConfig.RouteAssign),
                    new RolePermission(SalesManager, PermissionConfig.ProductRead),
                    new RolePermission(SalesManager, PermissionConfig.ProductCreate),
                    new RolePermission(SalesManager, PermissionConfig.ProductUpdate),
                    new RolePermission(SalesManager, PermissionConfig.ProductDelete),
                    new RolePermission(SalesManager, PermissionConfig.ProductSync),
                    new RolePermission(SalesManager, PermissionConfig.FactoryRead),
                    new RolePermission(SalesManager, PermissionConfig.FactoryCreate),
                    new RolePermission(SalesManager, PermissionConfig.FactoryUpdate),
                    new RolePermission(SalesManager, PermissionConfig.FactoryDelete),
                    new RolePermission(SalesManager, PermissionConfig.FactorySync),
                    new RolePermission(SalesManager, PermissionConfig.CompetitorRead),
                    new RolePermission(SalesManager, PermissionConfig.CompetitorCreate),
                    new RolePermission(SalesManager, PermissionConfig.CompetitorUpdate),
                    new RolePermission(SalesManager, PermissionConfig.CompetitorDelete),
                    new RolePermission(SalesManager, PermissionConfig.OrderRead),
                    new RolePermission(SalesManager, PermissionConfig.ReportDistributorVisitRead),
                    new RolePermission(SalesManager, PermissionConfig.ReportEmployeeVisitRead),
                } },
            };
        }

        public static List<RolePermission> GetRolePermissions()
        {
            var rootPermissions = PermissionConfig.GetPermisisons().Select(x => new RolePermission(Root, x.Id)).ToList();
            var adminPermissions = PermissionConfig.GetPermisisons().Select(x => new RolePermission(Admin, x.Id)).ToList();
            var distributorPermissions = new List<RolePermission> {
                    new RolePermission(Distributor, PermissionConfig.OrderRead ),
                    new RolePermission(Distributor, PermissionConfig.OrderCreate ),
                    new RolePermission(Distributor, PermissionConfig.OrderCancel ),
                    new RolePermission(Distributor, PermissionConfig.OrderUpdate ),
                };
            var salesmanPermissions = new List<RolePermission> {
                    new RolePermission(Salesman, PermissionConfig.DistributorRead ),
                    new RolePermission(Salesman, PermissionConfig.DistributorCreate),
                    new RolePermission(Salesman, PermissionConfig.DistributorUpdate ),
                    new RolePermission(Salesman, PermissionConfig.VisitRead ),
                    new RolePermission(Salesman, PermissionConfig.VisitCreate ),
                    new RolePermission(Salesman, PermissionConfig.VisitUpdate ),
                    new RolePermission(Salesman, PermissionConfig.VisitCancel ),
                    new RolePermission(Salesman, PermissionConfig.RouteRead ),
                    new RolePermission(Salesman, PermissionConfig.RouteCreate ),
                    new RolePermission(Salesman, PermissionConfig.RouteUpdate ),
                    new RolePermission(Salesman, PermissionConfig.ProductRead ),
                    new RolePermission(Salesman, PermissionConfig.FactoryRead ),
                    new RolePermission(Salesman, PermissionConfig.CompetitorRead ),
                    new RolePermission(Salesman, PermissionConfig.CompetitorCreate ),
                    new RolePermission(Salesman, PermissionConfig.CompetitorUpdate ),
                    new RolePermission(Salesman, PermissionConfig.CompetitorDelete ),
                    new RolePermission(Salesman, PermissionConfig.OrderRead ),
                    new RolePermission(Salesman, PermissionConfig.OrderCreate ),
                    new RolePermission(Salesman, PermissionConfig.OrderUpdate ),
                    new RolePermission(Salesman, PermissionConfig.OrderCancel ),
                    new RolePermission(Salesman, PermissionConfig.ReportDistributorVisitRead ),
                    new RolePermission(Salesman, PermissionConfig.ReportEmployeeVisitRead ),
                };
            var salesadminPermissions = new List<RolePermission> {
                    new RolePermission(SalesAdmin, PermissionConfig.DistributorRead ),
                    new RolePermission(SalesAdmin, PermissionConfig.DistributorCreate ),
                    new RolePermission(SalesAdmin, PermissionConfig.DistributorUpdate ),
                    new RolePermission(SalesAdmin, PermissionConfig.DistributorDelete),
                    new RolePermission(SalesAdmin, PermissionConfig.DistributorSync ),
                    new RolePermission(SalesAdmin, PermissionConfig.DistributorAssign),
                    new RolePermission(SalesAdmin, PermissionConfig.SalesmanRead),
                    new RolePermission(SalesAdmin, PermissionConfig.SalesmanCreate),
                    new RolePermission(SalesAdmin, PermissionConfig.SalesmanUpdate),
                    new RolePermission(SalesAdmin, PermissionConfig.SalesmanDelete),
                    new RolePermission(SalesAdmin, PermissionConfig.SalesmanSync),
                    new RolePermission(SalesAdmin, PermissionConfig.VisitRead ),
                    new RolePermission(SalesAdmin, PermissionConfig.VisitUpdate ),
                    new RolePermission(SalesAdmin, PermissionConfig.VisitDelete),
                    new RolePermission(SalesAdmin, PermissionConfig.RouteRead),
                    new RolePermission(SalesAdmin, PermissionConfig.RouteCreate),
                    new RolePermission(SalesAdmin, PermissionConfig.RouteUpdate),
                    new RolePermission(SalesAdmin, PermissionConfig.RouteDelete),
                    new RolePermission(SalesAdmin, PermissionConfig.RouteAssign),
                    new RolePermission(SalesAdmin, PermissionConfig.ProductRead),
                    new RolePermission(SalesAdmin, PermissionConfig.ProductCreate),
                    new RolePermission(SalesAdmin, PermissionConfig.ProductUpdate),
                    new RolePermission(SalesAdmin, PermissionConfig.ProductDelete),
                    new RolePermission(SalesAdmin, PermissionConfig.ProductSync),
                    new RolePermission(SalesAdmin, PermissionConfig.FactoryRead),
                    new RolePermission(SalesAdmin, PermissionConfig.FactoryCreate),
                    new RolePermission(SalesAdmin, PermissionConfig.FactoryUpdate),
                    new RolePermission(SalesAdmin, PermissionConfig.FactoryDelete),
                    new RolePermission(SalesAdmin, PermissionConfig.FactorySync),
                    new RolePermission(SalesAdmin, PermissionConfig.CompetitorRead),
                    new RolePermission(SalesAdmin, PermissionConfig.CompetitorCreate),
                    new RolePermission(SalesAdmin, PermissionConfig.CompetitorUpdate),
                    new RolePermission(SalesAdmin, PermissionConfig.CompetitorDelete),
                    new RolePermission(SalesAdmin, PermissionConfig.OrderRead),
                    new RolePermission(SalesAdmin, PermissionConfig.ReportDistributorVisitRead),
                    new RolePermission(SalesAdmin, PermissionConfig.ReportEmployeeVisitRead),
                };
            var salesmanagerPermissions = new List<RolePermission> {
                    new RolePermission(SalesManager, PermissionConfig.DistributorRead ),
                    new RolePermission(SalesManager, PermissionConfig.DistributorCreate ),
                    new RolePermission(SalesManager, PermissionConfig.DistributorUpdate ),
                    new RolePermission(SalesManager, PermissionConfig.DistributorDelete),
                    new RolePermission(SalesManager, PermissionConfig.DistributorSync ),
                    new RolePermission(SalesManager, PermissionConfig.DistributorAssign),
                    new RolePermission(SalesManager, PermissionConfig.SalesmanRead),
                    new RolePermission(SalesManager, PermissionConfig.SalesmanCreate),
                    new RolePermission(SalesManager, PermissionConfig.SalesmanUpdate),
                    new RolePermission(SalesManager, PermissionConfig.SalesmanDelete),
                    new RolePermission(SalesManager, PermissionConfig.SalesmanSync),
                    new RolePermission(SalesManager, PermissionConfig.SalesmanTrack),
                    new RolePermission(SalesManager, PermissionConfig.VisitRead ),
                    new RolePermission(SalesManager, PermissionConfig.VisitUpdate ),
                    new RolePermission(SalesManager, PermissionConfig.VisitDelete),
                    new RolePermission(SalesManager, PermissionConfig.RouteRead),
                    new RolePermission(SalesManager, PermissionConfig.RouteCreate),
                    new RolePermission(SalesManager, PermissionConfig.RouteUpdate),
                    new RolePermission(SalesManager, PermissionConfig.RouteDelete),
                    new RolePermission(SalesManager, PermissionConfig.RouteAssign),
                    new RolePermission(SalesManager, PermissionConfig.ProductRead),
                    new RolePermission(SalesManager, PermissionConfig.ProductCreate),
                    new RolePermission(SalesManager, PermissionConfig.ProductUpdate),
                    new RolePermission(SalesManager, PermissionConfig.ProductDelete),
                    new RolePermission(SalesManager, PermissionConfig.ProductSync),
                    new RolePermission(SalesManager, PermissionConfig.FactoryRead),
                    new RolePermission(SalesManager, PermissionConfig.FactoryCreate),
                    new RolePermission(SalesManager, PermissionConfig.FactoryUpdate),
                    new RolePermission(SalesManager, PermissionConfig.FactoryDelete),
                    new RolePermission(SalesManager, PermissionConfig.FactorySync),
                    new RolePermission(SalesManager, PermissionConfig.CompetitorRead),
                    new RolePermission(SalesManager, PermissionConfig.CompetitorCreate),
                    new RolePermission(SalesManager, PermissionConfig.CompetitorUpdate),
                    new RolePermission(SalesManager, PermissionConfig.CompetitorDelete),
                    new RolePermission(SalesManager, PermissionConfig.OrderRead),
                    new RolePermission(SalesManager, PermissionConfig.ReportDistributorVisitRead),
                    new RolePermission(SalesManager, PermissionConfig.ReportEmployeeVisitRead),
                };

            return rootPermissions
                .Concat(adminPermissions)
                .Concat(distributorPermissions)
                .Concat(salesmanPermissions)
                .Concat(salesadminPermissions)
                .Concat(salesmanagerPermissions)
                .ToList();
        }

    }
}
