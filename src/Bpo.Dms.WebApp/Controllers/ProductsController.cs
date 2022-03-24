using Bpo.Dms.WebApp.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Bpo.Dms.WebApp.Auth.Data;
using Bpo.Dms.WebApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using Bpo.Dms.WebApp.Service;

namespace Bpo.Dms.WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ProductsController : ControllerBase
    {
        private readonly AppDbContext _appDb;

        public ProductsController(AppDbContext appDb)
        {
            _appDb = appDb;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> Get()
        {
            return await _appDb.Products.ToListAsync();
        }

        [HttpGet("{search}")]
        public async Task<ActionResult<IEnumerable<Product>>> GetData(string search)
        {
            var products = await _appDb.Products.ToListAsync();
            if (!String.IsNullOrEmpty(search))
            {
                products = products.Where(s => s.Name.Contains(search) || s.Description.Contains(search) || s.Code.Contains(search)).ToList();
            }
            return Ok(products);
        }

        [HttpGet("action")]
        public async Task<ActionResult<IEnumerable<ProductList>>> GetAction(string search, string sort, int? pageIndex, int pageSize)
        {

            var products = from s in _appDb.Products
                           select s;

            switch (sort)
            {
                case "nameascend":
                    products = products.OrderBy(s => s.Name);
                    break;
                case "namedescend":
                    products = products.OrderByDescending(s => s.Name);
                    break;
                case "name":
                    products = products.OrderBy(s => s.Id);
                    break;
                case "codeascend":
                    products = products.OrderBy(s => s.Code);
                    break;
                case "codedescend":
                    products = products.OrderByDescending(s => s.Code);
                    break;
                case "code":
                    products = products.OrderBy(s => s.Id);
                    break;
                case "descriptionascend":
                    products = products.OrderBy(s => s.Code);
                    break;
                case "descriptiondescend":
                    products = products.OrderByDescending(s => s.Code);
                    break;
                case "description":
                    products = products.OrderBy(s => s.Id);
                    break;
                case "priceascend":
                    products = products.OrderBy(s => s.Price);
                    break;
                case "pricedescend":
                    products = products.OrderByDescending(s => s.Price);
                    break;
                case "price":
                    products = products.OrderBy(s => s.Id);
                    break;
                case "importDateascend":
                    products = products.OrderBy(s => s.ImportDate);
                    break;
                case "importDatedescend":
                    products = products.OrderByDescending(s => s.ImportDate);
                    break;
                case "importDate":
                    products = products.OrderBy(s => s.Id);
                    break;
                default:
                    products = products.OrderBy(s => s.Id);
                    break;
            }

            var result = new ProductList();

            if (!String.IsNullOrEmpty(search))
            {
                products = products.Where(s => s.Name.Contains(search) || s.Description.Contains(search) || s.Code.Contains(search));
            }

            var totalItem = products.Count();

            if (pageSize <= 0)
            {
                pageSize = 1;
            }
            result.Content = (PaginatedList<Product>.CreateAsync(products.AsNoTracking(), pageIndex ?? 1, pageSize));
            result.TotalItem = totalItem;
            return Ok(result);

        }

        [IgnoreAntiforgeryToken]
        [HttpPatch]
        public async Task<IActionResult> Update(ProductModel model)
        {
            var product = await _appDb.Products.FindAsync(model.Id);
            if (product == null)
            {
                return NotFound();
            }
            product.Code = model.Code;
            product.Name = model.Name;
            product.Description = model.Description;
            product.ImportDate = model.ImportDate;
            product.Price = model.Price;
            product.ProductType = model.ProductType;
            _appDb.Products.Update(product);
            await _appDb.SaveChangesAsync();
            return Ok();
        }

        [IgnoreAntiforgeryToken]
        [HttpPost]
        public async Task<IActionResult> Create(ProductModel model)
        {
            var product = new Product
            {
                Code = model.Code,
                Name = model.Name,
                Description = model.Description,
                ImportDate = model.ImportDate,
                Price = model.Price,
                ProductType = model.ProductType,
            };

            _appDb.Products.Add(product);
            await _appDb.SaveChangesAsync();
            return Ok();
        }

        [IgnoreAntiforgeryToken]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var product = await _appDb.Products.FirstOrDefaultAsync(x => x.Id == id);
            if (product == null)
            {
                return NotFound();
            }
            _appDb.Products.Remove(product);
            await _appDb.SaveChangesAsync();
            return Ok();
        }

        public class ProductModel
        {
            [Required]
            public int Id { get; set; }
            [Required]
            public string Code { get; set; }
            [Required]
            public string Name { get; set; }
            [Required]
            public ProductType ProductType { get; set; }
            [Required]
            public string Description { get; set; }
            [Required]
            public decimal Price { get; set; }
            [Required]
            public DateTime ImportDate { get; set; }
        }

        public class ProductList
        {
            //public PaginatedList<Product> Content  { get; set; }
            public int TotalItem { get; set; }
            public Task<PaginatedList<Product>> Content { get; internal set; }
        }
    }
}