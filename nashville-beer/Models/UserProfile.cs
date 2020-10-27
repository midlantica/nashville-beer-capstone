using System.ComponentModel.DataAnnotations;

namespace nashvilleBeer.Models
{
    public class UserProfile
    {
        public int Id { get; set; }

        [Required]
        [StringLength(28, MinimumLength = 28)]
        public string FirebaseUserId { get; set; }

        [Required]
        [MaxLength(50)]
        public string Username { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        [MaxLength(255)]
        public string Email { get; set; }

        //public bool IsActive { get; set; }
        //public bool IsAdmin { get; set; }

        //[Required]
        public int UserTypeId { get; set; }

        //public UserType UserType { get; set; }

    }
}
