using System.Collections.Generic;
using nashville_beer.Models;
using Microsoft.Data.SqlClient;

namespace nashville_beer.Repositories
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