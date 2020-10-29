using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using nashvilleBeer.Models;

namespace nashvilleBeer.Repositories
{

    public class BeerRepository : BaseRepository, IBeerRepository
    {
        public BeerRepository(IConfiguration config) : base(config) { }

        public List<Beer> GetAllBeers()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT id, [Name]
                                    FROM Beer
                                    ORDER BY Name ASC";

                    var reader = cmd.ExecuteReader();

                    var beers = new List<Beer>();

                    while (reader.Read())
                    {
                        beers.Add(new Beer()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("Name")),
                        });
                    }

                    reader.Close();

                    return beers;
                }
            }
        }
        public List<Beer> GetAllBeersFromBrewery(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT br.id, br.BreweryId, br.Name, br.Type, br.Abv, br.Ibu, br.ImageUrl
                                        FROM Beer br 
                                        LEFT JOIN Brewery b ON br.BreweryId = b.Id
                                        WHERE b.Id = @id";

                    cmd.Parameters.AddWithValue("@id", id);

                    var reader = cmd.ExecuteReader();

                    var beers = new List<Beer>();

                    while (reader.Read())
                    {
                        beers.Add(new Beer()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("Name")),
                            Type = reader.GetString(reader.GetOrdinal("Type")),
                            Abv = reader.GetDecimal(reader.GetOrdinal("Abv")),
                            Ibu = reader.GetInt32(reader.GetOrdinal("Ibu")),
                            ImageUrl = reader.GetString(reader.GetOrdinal("ImageUrl")),
                            BreweryId = reader.GetInt32(reader.GetOrdinal("BreweryId"))
                        });
                    }

                    reader.Close();

                    return beers;
                }
            }
        }

        public Beer GetBeerById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT Id, [Title]
                    FROM Beer
                    WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@id", id);

                    var reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Beer beer = new Beer()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("Name"))
                        };


                        reader.Close();
                        return beer;
                    }

                    reader.Close();
                    return null;
                }
            }
        }

        public void DeleteBeer(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Beer
                        SET IsDeleted = @isDeleted
                        WHERE Id = @id
                    ";
                    cmd.Parameters.AddWithValue("@isDeleted", 1);
                    cmd.Parameters.AddWithValue("@id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void AddBeer(Beer beer)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Beer (Name)
                        OUTPUT INSERTED.ID
                        VALUES ( @name )";

                    cmd.Parameters.AddWithValue("@name", beer.Name);

                    int id = (int)cmd.ExecuteScalar();
                    beer.Id = id;
                }
            }
        }

        public void UpdateBeer(Beer beer)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Beer
                        SET 
                            [Name] = @name 
                            WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@name", beer.Name);
                    cmd.Parameters.AddWithValue("@id", beer.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }


    }
}
