using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using nashvilleBeer.Models;

namespace nashvilleBeer.Repositories
{
    public class UserTypeRepository : BaseRepository, IUserTypeRepository
    {
        public UserTypeRepository(IConfiguration config) : base(config) { }

        public List<UserType> GetAllUserTypes()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                       SELECT Id, Name
                            FROM UserType
                        ";
                    var reader = cmd.ExecuteReader();
                    var userType = new List<UserType>();

                    while (reader.Read())
                    {
                        userType.Add(new UserType()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Username = reader.GetString(reader.GetOrdinal("Username"))
                        });
                    }

                    reader.Close();

                    return userType;
                }
            }
        }

    }
}
