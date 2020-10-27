using System.Collections.Generic;
using nashvilleBeer.Models;
using Microsoft.Data.SqlClient;

namespace nashvilleBeer.Repositories
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