﻿using HotDeskApplicationApi.Data;
using HotDeskApplicationApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HotDeskApplicationApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class FloorController : Controller
    {
        private HotDeskDbContext dbContext;

        public FloorController(HotDeskDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpGet]
        public async Task<Floor[]> GetFloor()
        {
            return await dbContext.Floors.ToArrayAsync();
        }

       
        [HttpGet("{id}")]
        public async Task<ActionResult<Floor>> GetFloor(Guid id)
        {

            var floor = await dbContext.Floors.FindAsync(id);

            if (floor == null)
            {
                return this.NotFound();
            }
            return floor;
        }

        [HttpGet("byOffice/{officeID}")]
        public async Task<Floor[]> GetFloorByOffice(Guid officeID)
        {
            var floors = await dbContext.Floors.Where(f => f.OfficeID == officeID).ToArrayAsync();
            return floors;
        }
        [HttpPost]
        public async Task<ActionResult<Floor>> PostFloor(Floor floor)
        {

            dbContext.Floors.Add(floor);
            await dbContext.SaveChangesAsync();

            return CreatedAtAction("GetFloor", new { id = floor.ID }, floor);
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFloor(Guid id)
        {

            var floor = await dbContext.Floors.FindAsync(id);

            if (floor == null)
            {
                return NotFound();
            }

            dbContext.Floors.Remove(floor);
            await dbContext.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutFloor(Guid id, Floor floor)
        {

            dbContext.Entry(floor).State = EntityState.Modified;

            try
            {
                await dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FloorExists(id))
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

        private bool FloorExists(Guid id)
        {
            return (dbContext.Floors?.Any(e => e.ID == id)).GetValueOrDefault();
        }
    }
}
