﻿using HotDeskApplicationApi.Data;
using HotDeskApplicationApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HotDeskApplicationApi.Controllers
{
    [Authorize]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        private readonly HotDeskDbContext hotDeskDbContext;

        public ProfileController(HotDeskDbContext dbContext)
        {
            hotDeskDbContext = dbContext;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<Profile[]> ListProfiles()
        {
            return await hotDeskDbContext.Profile.ToArrayAsync();
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<Profile> GetProfile(Guid id)
        {
            var profile = await hotDeskDbContext.Profile.FindAsync(id);

            return profile;
        }

        [HttpPut("{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> PutProfile(Guid id, Profile profile)
        {
            hotDeskDbContext.Entry(profile).State = EntityState.Modified;

            try
            {
                await hotDeskDbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProfileExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult<Profile>> PostProfile(Profile profile)
        {
            if (hotDeskDbContext.Profile == null)
            {
                return Problem("Entity set 'ProfileContext.Profile'  is null.");
            }

            hotDeskDbContext.Profile.Add(profile);

            await hotDeskDbContext.SaveChangesAsync();

            return CreatedAtAction("GetProfile", new { id = profile.ID }, profile);
        }

        [HttpDelete("{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> DeleteProfile(Guid id)
        {
            var profile = await hotDeskDbContext.Profile.FindAsync(id);

            if (profile == null)
            {
                return NotFound();
            }

            hotDeskDbContext.Profile.Remove(profile);

            await hotDeskDbContext.SaveChangesAsync();

            return NoContent();
        }

        private bool ProfileExists(Guid id)
        {
            return (hotDeskDbContext.Profile?.Any(e => e.ID == id)).GetValueOrDefault();
        }
    }
}