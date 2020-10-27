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
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class BeerController : ControllerBase
    {
        private readonly IBeerRepository _beerRepository;
        // private readonly IUserProfileRepository _userProfileRepository;

        public BeerController(IBeerRepository beerRepository)
        {
            _beerRepository = beerRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var beers = _beerRepository.GetAllBeers();
            return Ok(beers);
        }


        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            Beer beer = _beerRepository.GetBeerById(id);

            if (beer == null)
            {
                return NotFound();
            }
            return Ok(beer);
        }

        [HttpPost]
        public IActionResult Post(Beer beer)
        {
            _beerRepository.AddBeer(beer);
            return CreatedAtAction("Get", new { id = beer.Id }, beer);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Beer beer)
        {
            if (id != beer.Id)
            {
                return BadRequest();
            }

            _beerRepository.UpdateBeer(beer);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _beerRepository.DeleteBeer(id);
            return NoContent();
        }

    }
}
