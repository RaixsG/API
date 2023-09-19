const usersControllers = require('./users.controllers');

const getUsers = (_, res) => {
    const data = usersControllers.findAllUsers();
    res.status(200).json({ data });
}

module.exports = {
    getUsers,
};