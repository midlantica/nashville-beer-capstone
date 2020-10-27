using nashvilleBeer.Models;
using System.Collections.Generic;

namespace nashvilleBeer.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        UserProfile GetByFirebaseUserId(string firebaseUserId);
        UserProfile GetUserProfileById(int id);
        void UpdateUserProfile(UserProfile userProfile);
    }
}