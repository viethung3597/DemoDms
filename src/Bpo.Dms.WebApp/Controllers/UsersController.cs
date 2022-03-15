using Bpo.Dms.WebApp.Auth.Data;
using Bpo.Dms.WebApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Bpo.Dms.WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly AppIdentityDbContext _appIdentityDb;

        public UsersController(
            UserManager<User> userManager,
            AppIdentityDbContext context)
        {
            _userManager = userManager;
            _appIdentityDb = context;
        }

        [HttpGet]
        public async Task<DataLoadResult<UserViewModel>> Get(DataLoadRequest request)
        {
            var users = await _userManager.Users.Where(x => x.UserName != "root")
                .Select(x => new UserViewModel
                {
                    Id = x.Id,
                    UserName = x.UserName,
                    Email = x.Email
                }).ToListAsync();

            return new DataLoadResult<UserViewModel>
            {
                Data = users,
                Total = users.Count,
                Success = true,
                Page = 1
            };
        }

        [HttpPut]
        public async Task<IActionResult> Update(UserUpdateModel model)
        {
            var user = await _userManager.FindByIdAsync(model.Id);
            if (user == null)
            {
                return NotFound();
            }
            user.UserName = model.UserName;
            user.Email = model.Email;
            await _userManager.UpdateAsync(user);
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> Create(UserCreateModel model)
        {
            var user = new User
            {
                UserName = model.UserName,
                Email = model.Email
            };

            var res = await _userManager.CreateAsync(user, model.Password);
            if (res.Succeeded)
            {
                return Ok();
            }
            else
            {
                return BadRequest(res.Errors);
            }
        }

        [HttpPost("SetPassword")]
        public async Task<IActionResult> SetPassword(SetPasswordModel model)
        {
            var user = await _userManager.FindByIdAsync(model.Id);
            if (user == null)
            {
                return NotFound();
            }
            string resetToken = await _userManager.GeneratePasswordResetTokenAsync(user);
            var result = await _userManager.ResetPasswordAsync(user, resetToken, model.Password);
            if (result.Succeeded)
            {
                return Ok();
            }
            else
            {
                return BadRequest(result.Errors);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(string key)
        {
            var user = await _userManager.FindByIdAsync(key);
            if (user == null)
            {
                return NotFound();
            }
            await _userManager.UpdateAsync(user);
            return Ok();
        }
    }

    public class SetPasswordModel
    {
        [Required]
        public string Id { get; set; }
        [Required]
        public string Password { get; set; }
    }

    public class UserViewModel
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string DisplayName { get; set; }
        public string Email { get; set; }
        public string Permissions { get; set; }
    }

    public class UserCreateModel
    {
        [Required]
        public string UserName { get; set; }
        public string DisplayName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }

    public class UserUpdateModel
    {
        [Required]
        public string Id { get; set; }
        [Required]
        public string UserName { get; set; }
        public string DisplayName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
