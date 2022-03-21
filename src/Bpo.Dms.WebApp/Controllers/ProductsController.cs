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

    public class ProductsController : Controller
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

        [HttpGet("search/{search}")]
        public async Task<ActionResult<IEnumerable<Product>>> GetData(string search)
        {
            var products = await _appDb.Products.ToListAsync();
            if (!String.IsNullOrEmpty(search))
            {
                products = products.Where(s => s.Name.Contains(search)).ToList();
            }
            return Ok(products);
        }

        [HttpGet("action")]
        public async Task<ActionResult<IEnumerable<Product>>> GetAction(string search, int? pageIndex, int pageSize)
        {
            var products = from s in _appDb.Products
                           select s;

            if (!String.IsNullOrEmpty(search))
            {
                products = products.Where(s => s.Name.Contains(search));
            }

            if (pageSize <= 0)
            {
                pageSize = 1;
            }
            return Ok(await PaginatedList<Product>.CreateAsync(products.AsNoTracking(), pageIndex ?? 1, pageSize));

        }

        [HttpPut]
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
            var product = _appDb.Products.Where(x => x.Id == id).FirstOrDefault();
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

    }
}
