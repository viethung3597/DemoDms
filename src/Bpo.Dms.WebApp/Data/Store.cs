using NetTopologySuite.Geometries;

namespace Bpo.Dms.WebApp.Data
{
    public class Store
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public string Email { get; set; }
        public int NumberPhone { get; set; }
        public string Description { get; set; }
        public Point Location { get; set; }
    }
}
