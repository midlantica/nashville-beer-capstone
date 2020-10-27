using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using nashvilleBeer.Models;
using nashvilleBeer.Repositories;

namespace nashvilleBeer.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _userProfileRepository;
        
        public UserProfileController(IUserProfileRepository userProfileRepository)
        {
            _userProfileRepository = userProfileRepository;
        }

        /*[HttpGet]
        public IActionResult Get()
        {
            return Ok(_userProfileRepository.GetAllActive());
        }*/

        /*[HttpGet("inactive")]
        public IActionResult GetInactive()
        {
            return Ok(_userProfileRepository.GetAllInactive());
        }*/

        [HttpGet("{firebaseUserId}")]
        public IActionResult GetUserProfile(string firebaseUserId)
        {
            return Ok(_userProfileRepository.GetByFirebaseUserId(firebaseUserId));
        }

        [HttpGet("user/{id}")]
        public IActionResult GetUserProfileById(int id)
        {
            return Ok(_userProfileRepository.GetUserProfileById(id));
        }

        [HttpPost]
        public IActionResult Post(UserProfile userProfile)
        {
            userProfile.UserTypeId = UserType.AUTHOR_ID;
            _userProfileRepository.Add(userProfile);
            return CreatedAtAction(
                nameof(GetUserProfile),
                new { firebaseUserId = userProfile.FirebaseUserId },
                userProfile);
        }

        [HttpPut("{id}")]
        public ActionResult Put(UserProfile userProfile)
        {
            _userProfileRepository.UpdateUserProfile(userProfile);
            return NoContent();
        }

    }
}