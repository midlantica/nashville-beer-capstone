using System.ComponentModel.DataAnnotations;

namespace nashvilleBeer.Models
{
    public class UserType
    {
        [Required]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Username { get; set; }

        // These read-only static properties correspond to the ID values in the database
        //  for the "Admin" and "User" user types.
        public static int ADMIN_TYPE_ID => 1;
        public static int AUTHOR_ID => 2;
    }
}
