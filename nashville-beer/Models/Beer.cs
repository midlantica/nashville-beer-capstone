using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace nashvilleBeer.Models
{
    public class Beer
    {
        public int Id { get; set;  }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        
        [Required]
        public string Type { get; set; }
                
        public decimal Abv { get; set; }

        public int Ibu { get; set; }

        [Required]
        [DataType(DataType.Url)]
        [MaxLength(255)]
        public string ImageUrl { get; set; }

        public int BreweryId { get; set; }

    }
}
