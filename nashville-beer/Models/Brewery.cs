using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace nashvilleBeer.Models
{
    public class Brewery
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Title { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public string Website { get; set; }

        [Required]
        public string ImageUrl { get; set; }

        public string Established { get; set; }

    }
}
