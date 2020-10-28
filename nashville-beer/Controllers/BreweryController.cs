using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using nashvilleBeer.Repositories;
using nashvilleBeer.Models;

namespace nashvilleBeer.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class BreweryController : ControllerBase
    {
        private readonly IBreweryRepository _breweryRepository;
        // private readonly IUserProfileRepository _userProfileRepository;

        public BreweryController(IBreweryRepository breweryRepository)
        {
            _breweryRepository = breweryRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var breweries = _breweryRepository.GetAllBreweries();
            return Ok(breweries);
        }


        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            Brewery brewery = _breweryRepository.GetBreweryById(id);

            if (brewery == null)
            {
                return NotFound();
            }
            return Ok(brewery);
        }

        [HttpPost]
        public IActionResult Post(Brewery brewery)
        {
            _breweryRepository.AddBrewery(brewery);
            return CreatedAtAction("Get", new { id = brewery.Id }, brewery);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Brewery brewery)
        {
            if (id != brewery.Id)
            {
                return BadRequest();
            }

            _breweryRepository.UpdateBrewery(brewery);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _breweryRepository.DeleteBrewery(id);
            return NoContent();
        }

    }
}
