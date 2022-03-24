using Bpo.Dms.WebApp.Data;
using Bpo.Dms.WebApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NetTopologySuite.Geometries;

namespace Bpo.Dms.WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StoresController : ControllerBase
    {
        private readonly AppDbContext _appDb;

        public StoresController(AppDbContext appDb)
        {
            _appDb = appDb;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Store>>> Get()
        {
            var stores = await _appDb.Stores.Select(x => new StoreReadDto
            {
                Id = x.Id,
                Name = x.Name,
                Code = x.Code,
                Country = x.Country,
                Description = x.Description,
                Email = x.Email,
                NumberPhone = x.NumberPhone,
                Location = x.Location == null ? null : new PointDto(x.Location),
            }).ToListAsync();
            return Ok(stores);
        }

        [HttpPut]
        public async Task<IActionResult> Update(StoreModel model)
        {
            var store = await _appDb.Stores.FindAsync(model.Id);
            if (store == null)
            {
                return NotFound();
            }
            store.Code = model.Code;
            store.Name = model.Name;
            store.Country = model.Country;
            store.Email = model.Email;
            store.NumberPhone = model.NumberPhone;
            store.Description = model.Description;
            store.Location = model.Location;
            _appDb.Stores.Update(store);
            await _appDb.SaveChangesAsync();
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> Create(StoreModel model)
        {
            var store = new Store
            {
                Code = model.Code,
                Name = model.Name,
                Country = model.Country,
                Email = model.Email,
                NumberPhone = model.NumberPhone,
                Description = model.Description,
                Location = model.Location,
            };

            _appDb.Stores.Add(store);
            await _appDb.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var store = await _appDb.Stores.FirstOrDefaultAsync(x => x.Id == id);
            if (store == null)
            {
                return NotFound();
            }
            _appDb.Stores.Remove(store);
            await _appDb.SaveChangesAsync();
            return Ok();
        }
    }

    public class StoreModel
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
