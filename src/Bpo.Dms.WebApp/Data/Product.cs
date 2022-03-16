namespace Bpo.Dms.WebApp.Data
{
    public class Product
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public ProductType ProductType { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public DateTime ImportDate { get; set; }
    }
}
