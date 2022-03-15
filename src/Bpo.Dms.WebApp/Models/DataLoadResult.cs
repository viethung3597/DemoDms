namespace Bpo.Dms.WebApp.Models
{
    public class DataLoadResult<T> where T : class
    {
        public IEnumerable<T> Data { get; set; }
        public bool Success { get; set; }
        public int Page { get; set; }
        public int Total { get; set; }
    }
}
