using System.Collections.Generic;
using nashvilleBeer.Models;
using Microsoft.Data.SqlClient;

namespace nashvilleBeer.Repositories
{
    public interface IBreweryRepository
    {
        List<Brewery> GetAllBreweries();
        Brewery GetBreweryById(int id);
        void DeleteBrewery(int id);
        void UpdateBrewery(Brewery brewery);
        void AddBrewery(Brewery brewery);

    }
}