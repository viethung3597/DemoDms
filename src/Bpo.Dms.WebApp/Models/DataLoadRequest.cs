namespace Bpo.Dms.WebApp.Models
{
    public class DataLoadRequest
    {
        public int PageSize { get; set; }
        public int CurrentPage { get; set; }
        public string SearchTerm { get; set; }
        public IEnumerable<SortInfo> Sorts { get; set; }
        public class SortInfo
        {
            public string Name { get; set; }
            public bool IsDesc { get; set; }
        }
    }
}
