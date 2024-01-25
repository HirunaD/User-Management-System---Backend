//create users
const users = [
    {
        id: 1,
        name: 'Prasad',
    },
    {
        id: 2,
        name: 'Prasadi',
    }
];

//create controller function to get users
const getUsers = (callback) => {
    callback(users);
};

//create controller function to get user by id
const getUserById = (id, callback) => {
    const user = users.find(user => user.id == id);
    callback(user);
};

//exports the controller functions
exports.getUsers = getUsers;
exports.getUserById = getUserById;