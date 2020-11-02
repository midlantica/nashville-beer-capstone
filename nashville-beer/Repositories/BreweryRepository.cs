using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using nashvilleBeer.Models;
using nashvilleBeer.Utils;

namespace nashvilleBeer.Repositories
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
                    cmd.CommandText = @"SELECT bry.Id AS brewzId, bry.Title, bry.Address, bry.Website, bry.ImageUrl, bry.Established, 
                                        br.id AS beerId, br.BreweryId, br.[Name], br.Type, br.Abv, br.Ibu, br.ImageUrl
                                        FROM Brewery bry
                                        LEFT JOIN Beer br ON br.BreweryId = bry.Id;";

                    var reader = cmd.ExecuteReader();

                    var breweries = new List<Brewery>();
                    while (reader.Read())
                    {

                        var brewzId = DbUtils.GetInt(reader, "brewzId");

                        var existingBrewery = breweries.FirstOrDefault(p => p.Id == brewzId);
                        if (existingBrewery == null)
                        {
                            existingBrewery = new Brewery()
                        {
                            Id = brewzId,
                            Title = reader.GetString(reader.GetOrdinal("Title")),
                            Address = reader.GetString(reader.GetOrdinal("Address")),
                            Website = reader.GetString(reader.GetOrdinal("Website")),
                            ImageUrl = reader.GetString(reader.GetOrdinal("ImageUrl")),
                            Established = reader.GetString(reader.GetOrdinal("Established")),
                            Beers = new List<Beer>() 
                        };

                            breweries.Add(existingBrewery);
                        
                        }

                        if (DbUtils.IsNotDbNull(reader, "BeerId"))
                        {
                            existingBrewery.Beers.Add(new Beer()
                            {
                                Id = DbUtils.GetInt(reader, "BeerId"),
                                Name = DbUtils.GetString(reader, "Name"),
                                Type = DbUtils.GetString(reader, "Type"),
                                Abv = DbUtils.GetNullableDec(reader, "Abv"),
                                Ibu = DbUtils.GetInt(reader, "Ibu"),
                                ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                                BreweryId = DbUtils.GetInt(reader, "BreweryId")
                            });
                        }
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
                    INSERT INTO Brewery (Title, Address, Website, ImageUrl, Established) 
                    OUTPUT INSERTED.ID
                    VALUES ( @title, @address, @website, @imageurl, @established );";

                    cmd.Parameters.AddWithValue("@title", brewery.Title);
                    cmd.Parameters.AddWithValue("@address", brewery.Address);
                    cmd.Parameters.AddWithValue("@website", brewery.Website);
                    cmd.Parameters.AddWithValue("@imageurl", brewery.ImageUrl);
                    cmd.Parameters.AddWithValue("@established", brewery.Established);

                    int id = (int)cmd.ExecuteScalar();
                    //brewery.Id = id;
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
                     INSERT INTO Brewery (Title, Address, Website, ImageUrl, Established) 
                     OUTPUT INSERTED.ID
                     VALUES ( @title, @address, @website, @imageurl, @established );
                    ";

                    cmd.Parameters.AddWithValue("@title", brewery.Title);
                    cmd.Parameters.AddWithValue("@address", brewery.Address);
                    cmd.Parameters.AddWithValue("@website", brewery.Website);
                    cmd.Parameters.AddWithValue("@imageurl", brewery.ImageUrl);
                    cmd.Parameters.AddWithValue("@established", brewery.Established);
                    cmd.Parameters.AddWithValue("@id", brewery.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }


    }
}
