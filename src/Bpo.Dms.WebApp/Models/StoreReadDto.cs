namespace Bpo.Dms.WebApp.Models
{
    public class StoreReadDto
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public string Email { get; set; }
        public int NumberPhone { get; set; }
        public string Description { get; set; }
        public PointDto Location { get; set; }
    }
}
