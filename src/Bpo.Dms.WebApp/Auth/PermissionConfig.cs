using Bpo.Dms.WebApp.Auth.Data;

namespace Bpo.Dms.WebApp.Auth
{
    public static class PermissionConfig
    {
        public static string DistributorRead = "distributor.read";
        public static string DistributorCreate = "distributor.create";
        public static string DistributorUpdate = "distributor.update";
        public static string DistributorDelete = "distributor.delete";
        public static string DistributorSync = "distributor.sync";
        public static string DistributorAssign = "distributor.assign";

        public static string VisitRead = "visit.read";
        public static string VisitCreate = "visit.create";
        public static string VisitUpdate = "visit.update";
        public static string VisitDelete = "visit.delete";
        public static string VisitCancel = "visit.cancel";

        public static string RouteRead = "route.read";
        public static string RouteCreate = "route.create";
        public static string RouteUpdate = "route.update";
        public static string RouteDelete = "route.delete";
        public static string RouteAssign = "route.assign";

        public static string AlbumRead = "album.read";
        public static string AlbumCreate = "album.create";
        public static string AlbumUpdate = "album.update";
        public static string AlbumDelete = "album.delete";

        public static string ImageRead = "image.read";

        public static string SalesmanTrack = "salesman.track";
        public static string SalesmanRead = "salesman.read";
        public static string SalesmanCreate = "salesman.create";
        public static string SalesmanUpdate = "salesman.update";
        public static string SalesmanDelete = "salesman.delete";
        public static string SalesmanSync = "salesman.sync";

        public static string ProductRead = "product.read";
        public static string ProductCreate = "product.create";
        public static string ProductUpdate = "product.update";
        public static string ProductDelete = "product.delete";
        public static string ProductSync = "product.sync";

        public static string FactoryRead = "factory.read";
        public static string FactoryCreate = "factory.create";
        public static string FactoryUpdate = "factory.update";
        public static string FactoryDelete = "factory.delete";
        public static string FactorySync = "factory.sync";

        public static string CompetitorRead = "competitor.read";
        public static string CompetitorCreate = "competitor.create";
        public static string CompetitorUpdate = "competitor.update";
        public static string CompetitorDelete = "competitor.delete";

        public static string OrderRead = "order.read";
        public static string OrderCreate = "order.create";
        public static string OrderUpdate = "order.update";
        public static string OrderDelete = "order.delete";
        public static string OrderCancel = "order.cancel";

        public static string UserRead = "user.read";
        public static string UserCreate = "user.create";
        public static string UserUpdate = "user.update";
        public static string UserDelete = "user.delete";
        public static string UserSync = "user.sync";

        public static string RoleRead = "role.read";
        public static string RoleCreate = "role.create";
        public static string RoleUpdate = "role.update";
        public static string RoleDelete = "role.delete";

        public static string ReportEmployeeVisitRead = "reportEmployeeVisit.read";
        public static string ReportDistributorVisitRead = "reportDistributorVisit.read";

        public static List<Permission> GetPermisisons()
        {
            return new List<Permission>
            {
                new Permission(DistributorRead, "Xem danh sách Nhà phân phối / Đại lý"),
                new Permission(DistributorCreate, "Tạo mới Nhà phân phối / Đại lý"),
                new Permission(DistributorUpdate, "Cập nhật Nhà phân phối / Đại lý"),
                new Permission(DistributorDelete, "Xóa Nhà phân phối / Đại lý"),
                new Permission(DistributorSync, "Đồng bộ Nhà phân phối"),
                new Permission(DistributorAssign, "Phân công Nhà phân phối / Đại lý cho nhân viên kinh doanh"),

                new Permission(VisitRead, "Xem lịch sử chăm sóc điểm bán"),
                new Permission(VisitCreate, "Chăm sóc điểm bán"),
                new Permission(VisitUpdate, "Cập nhật thông tin Chăm sóc điểm bán"),
                new Permission(VisitDelete, "Xóa lịch sử Chăm sóc điểm bán"),
                new Permission(VisitCancel, "Hủy chăm sóc điểm bán"),

                new Permission(RouteRead, "Xem danh sách tuyến"),
                new Permission(RouteCreate, "Tạo tuyến"),
                new Permission(RouteUpdate, "Cập nhật thông tin tuyến"),
                new Permission(RouteDelete, "Xóa tuyến"),
                new Permission(RouteAssign, "Phân công tuyến cho nhân viên kinh doanh"),

                new Permission(ImageRead, "Xem danh sách hình ảnh"),

                new Permission(AlbumRead, "Xem danh sách album"),
                new Permission(AlbumCreate, "Tạo album"),
                new Permission(AlbumUpdate, "Cập nhật thông tin album"),
                new Permission(AlbumDelete, "Xóa album"),

                new Permission(SalesmanTrack, "Giám sát nhân viên theo thời gian thực"),
                new Permission(SalesmanRead, "Xem danh sách nhân viên"),
                new Permission(SalesmanCreate, "Tạo mới nhân viên"),
                new Permission(SalesmanUpdate, "Cập nhật thông tin nhân viên"),
                new Permission(SalesmanDelete, "Xóa nhân viên"),
                new Permission(SalesmanSync, "Đồng bộ nhân viên"),

                new Permission(ProductRead, "Xem danh sách sản phẩm"),
                new Permission(ProductCreate, "Tạo mới sản phẩm"),
                new Permission(ProductUpdate, "Cập nhật sản phẩm"),
                new Permission(ProductDelete, "Xóa sản phẩm"),
                new Permission(ProductSync, "Đồng bộ sản phẩm"),

                new Permission(FactoryRead, "Xem danh sách điểm nhận hàng"),
                new Permission(FactoryCreate, "Tạo mới điểm nhận hàng"),
                new Permission(FactoryDelete, "Xóa điểm nhận hàng"),
                new Permission(FactoryUpdate, "Cập nhật điểm nhận hàng"),
                new Permission(FactorySync, "Đồng bộ điểm nhận hàng"),

                new Permission(CompetitorRead, "Xem danh sách bạn hàng"),
                new Permission(CompetitorCreate, "Tạo mới bạn hàng"),
                new Permission(CompetitorDelete, "Cập nhật thông tin bạn hàng"),
                new Permission(CompetitorUpdate, "Xóa bạn hàng"),

                new Permission(OrderRead, "Xem danh sách đơn hàng"),
                new Permission(OrderCreate, "Đặt hàng"),
                new Permission(OrderDelete, "Xóa đơn hàng"),
                new Permission(OrderUpdate, "Cập nhật đơn hàng"),
                new Permission(OrderCancel, "Hủy đơn hàng"),

                new Permission(UserRead, "Xem danh sách tài khoản"),
                new Permission(UserCreate, "Tạo mới tài khoản"),
                new Permission(UserDelete, "Xóa tài khoản"),
                new Permission(UserUpdate, "Cập nhật tài khoản"),
                new Permission(UserSync, "Đồng bộ tài khoản"),

                new Permission(RoleRead, "Xem danh sách vai trò"),
                new Permission(RoleCreate, "Tạo mới vai trò"),
                new Permission(RoleDelete, "Xóa vai trò"),
                new Permission(RoleUpdate, "Cập nhật vai trò"),

                new Permission(ReportEmployeeVisitRead, "Báo cáo chăm sóc điểm bán theo nhân viên"),
                new Permission(ReportDistributorVisitRead, "Báo cáo chăm sóc điểm bán theo điểm bán"),
            };
        }
    }
}
