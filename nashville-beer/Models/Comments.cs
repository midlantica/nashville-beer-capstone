using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace nashvilleBeer.Models
{
    public class Comments
    {
        public int Id { get; set; }

        [Required]
        public string Comment { get; set; }

        public int BeerId { get; set; }

        public int UserId { get; set; }
    }
}
