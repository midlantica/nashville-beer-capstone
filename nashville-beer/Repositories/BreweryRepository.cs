using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using nashville_beer.Models;

namespace nashville_beer.Repositories
{

    public class BreweryRepository : BaseRepository, IBreweryRepository
    {
        public BreweryRepository(IConfiguration config) : base(config) { }

        public List<Brewery> GetAllBreweries()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT id, [Title]
                                    FROM Brewery
                                    ORDER BY Title ASC";

                    var reader = cmd.ExecuteReader();

                    var breweries = new List<Brewery>();

                    while (reader.Read())
                    {
                        breweries.Add(new Brewery()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Title = reader.GetString(reader.GetOrdinal("Title")),
                        });
                    }

                    reader.Close();

                    return breweries;
                }
            }
        }

        public Brewery GetBreweryById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT Id, [Title]
                    FROM Brewery
                    WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@id", id);

                    var reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        Brewery brewery = new Brewery()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Title = reader.GetString(reader.GetOrdinal("Title"))
                        };


                        reader.Close();
                        return brewery;
                    }

                    reader.Close();
                    return null;
                }
            }
        }

        public void DeleteBrewery(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Brewery
                        SET IsDeleted = @isDeleted
                        WHERE Id = @id
                    ";
                    cmd.Parameters.AddWithValue("@isDeleted", 1);
                    cmd.Parameters.AddWithValue("@id", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void AddBrewery(Brewery brewery)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Brewery (Title)
                        OUTPUT INSERTED.ID
                        VALUES ( @title )";

                    cmd.Parameters.AddWithValue("@title", brewery.Title);

                    int id = (int)cmd.ExecuteScalar();
                    brewery.Id = id;
                }
            }
        }

        public void UpdateBrewery(Brewery brewery)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Brewery
                        SET 
                            [Name] = @name 
                            WHERE Id = @id";

                    cmd.Parameters.AddWithValue("@name", brewery.Title);
                    cmd.Parameters.AddWithValue("@id", brewery.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }


    }
}
