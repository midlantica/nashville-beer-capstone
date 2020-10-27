using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using nashvilleBeer.Models;
using nashvilleBeer.Utils;

namespace nashvilleBeer.Repositories
{
    public class UserProfileRepository : BaseRepository, IUserProfileRepository
    {
        public UserProfileRepository(IConfiguration configuration) : base(configuration) { }

        public UserProfile GetByFirebaseUserId(string firebaseUserId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT up.Id, up.FirebaseUserId, up.Username, 
                               up.Email, up.UserTypeId, 
                               ut.Name AS UserTypeName
                          FROM UserProfile up
                               LEFT JOIN UserType ut on up.UserTypeId = ut.Id
                         WHERE FirebaseUserId = @FirebaseuserId";

                    DbUtils.AddParameter(cmd, "@FirebaseUserId", firebaseUserId);

                    UserProfile userProfile = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        userProfile = new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId"),
                            Username = DbUtils.GetString(reader, "UserTypeName"),
                            Email = DbUtils.GetString(reader, "Email"),
                            UserTypeId = DbUtils.GetInt(reader, "UserTypeId")
                            /*UserType = new UserType()
                            {
                                Id = DbUtils.GetInt(reader, "UserTypeId"),
                                Username = DbUtils.GetString(reader, "UserTypeName"),
                            },*/
                        };
                    }
                    reader.Close();

                    return userProfile;
                }
            }
        }

        public List<UserProfile> GetAllActive()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                       SELECT up.id, up.FirebaseUserId, up.Username, up.Email, up.UserTypeId, 
                              ut.[Name] AS UserTypeName
                         FROM UserProfile up
                              LEFT JOIN UserType ut ON up.UserTypeId = ut.id
                        ";
                    var reader = cmd.ExecuteReader();
                    var userProfile = new List<UserProfile>();

                    while (reader.Read())
                    {
                        userProfile.Add(new UserProfile()

                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId"),
                            Username = DbUtils.GetString(reader, "Username"),
                            Email = DbUtils.GetString(reader, "Email"),
                            UserTypeId = DbUtils.GetInt(reader, "UserTypeId")
                        });
                    }

                    reader.Close();

                    return userProfile;
                }
            }
        }

        public List<UserProfile> GetAllInactive()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                       SELECT up.id, up.FirebaseUserId, up.Username, up.Email,
                              ut.[Name] AS UserTypeName
                         FROM UserProfile up
                              LEFT JOIN UserType ut ON up.UserTypeId = ut.id
                        ";
                    var reader = cmd.ExecuteReader();
                    var userProfile = new List<UserProfile>();

                    while (reader.Read())
                    {
                        userProfile.Add(new UserProfile()

                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId"),
                            Username = DbUtils.GetString(reader, "Username"),
                            Email = DbUtils.GetString(reader, "Email"),
                            UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                        });
                    }

                    reader.Close();

                    return userProfile;
                }
            }
        }

        public void Add(UserProfile userProfile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO UserProfile (FirebaseUserId, Username,
                                                                 Email, UserTypeId)
                                        OUTPUT INSERTED.ID
                                        VALUES (@FirebaseUserId, @Username,
                                                @Email, @UserTypeId)";
                    DbUtils.AddParameter(cmd, "@FirebaseUserId", userProfile.FirebaseUserId);
                    DbUtils.AddParameter(cmd, "@Username", userProfile.Username);
                    DbUtils.AddParameter(cmd, "@Email", userProfile.Email);
                    DbUtils.AddParameter(cmd, "@UserTypeId", userProfile.UserTypeId);

                    userProfile.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public UserProfile GetUserProfileById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    {
                        cmd.CommandText = @"SELECT 
                              u.id, u.FirebaseUserId, u.Username, u.Email, 
                              u.UserTypeId,
                              ut.[Name] AS UserTypeName
                         FROM UserProfile u
                              LEFT JOIN UserType ut ON u.UserTypeId = ut.id
                        WHERE u.Id = @id";

                        cmd.Parameters.AddWithValue("@id", id);
                        var reader = cmd.ExecuteReader();


                        if (reader.Read())
                        {
                            UserProfile userProfile = new UserProfile
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                                FirebaseUserId = reader.GetString(reader.GetOrdinal("FirebaseUserId")),
                                Email = reader.GetString(reader.GetOrdinal("Email")),
                                Username = reader.GetString(reader.GetOrdinal("Username")),
                                UserTypeId = reader.GetInt32(reader.GetOrdinal("UserTypeId"))
                            };
                            reader.Close();
                            return userProfile;
                        }
                        reader.Close();
                        return null;
                    }
                }
            }
        }

        public void UpdateUserProfile(UserProfile userProfile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            UPDATE UserProfile
                            SET 
                                Email = @email, 
                                FirebaseUserId = @firebaseUserId,
                                Username = @userName, 
		                        UserTypeId = @userTypeId
                            WHERE Id = @id";
                    cmd.Parameters.AddWithValue("@id", userProfile.Id);
                    cmd.Parameters.AddWithValue("@email", userProfile.Email);
                    cmd.Parameters.AddWithValue("@firebaseUserId", userProfile.FirebaseUserId);
                    cmd.Parameters.AddWithValue("@userName", userProfile.Username);
                    cmd.Parameters.AddWithValue("@userTypeId", userProfile.UserTypeId);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}