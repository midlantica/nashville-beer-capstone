using System.ComponentModel.DataAnnotations;

namespace nashvilleBeer.Models
{
    public class Users
    {
        [Required]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Username { get; set; }
        
        [Required]
        [MaxLength(50)]
        public string Email { get; set; }
        private string FireBaseUserId { get; set; }
        public bool IsAdmin { get; set; }

    }
}
