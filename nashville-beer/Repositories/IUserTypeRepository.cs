using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using nashvilleBeer.Models;

namespace nashvilleBeer.Repositories
{
    public interface IUserTypeRepository
    {
        List<UserType> GetAllUserTypes();
    }
}
