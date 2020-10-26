using System.Collections.Generic;
using nashville_beer.Models;
using Microsoft.Data.SqlClient;

namespace nashville_beer.Repositories
{
    public interface IBeerRepository
    {
        List<Beer> GetAllBeers();
        Beer GetBeerById(int id);
        void DeleteBeer(int id);
        void UpdateBeer(Beer beer);
        void AddBeer(Beer beer);

    }
}