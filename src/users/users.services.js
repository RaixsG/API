const usersControllers = require('./users.controllers');
const { OnlyNumbers } = require('../constants/regex')

const getUsers = (_, res) => {
    const data = usersControllers.findAllUsers();
    res.status(200).json({ data });
}

const getRandomUser = (_, res) => {
    const randomUser = usersControllers.findRandomUser();
    res.status(200).json(randomUser);
};

const getUserById = (req, res) => {
    const id = req.params.id;
    if (OnlyNumbers.test(id)) {
        const userById = usersControllers.findUserById(Number(id));
        if (userById) {
            res.status(200).json(userById)
        } else {
            res.status(404).json({ message: 'User id not found' });
        }
    } else {
        res.status(400).json({ message: 'Bad Request, id must be a number' });
    } 
}

const getUserByName = (req, res) => {
    const name = req.query.name;
    if (name) {
        const userByName = usersControllers.findUserByName(name);
        if (userByName) {
            res.status(200).json(userByName);
        } else {
            res.status(404).json({ message: 'User name not found' });
        }
    } else {
        res.status(400).json({ message: 'Bad Request, please send an user name' });
    }
}

module.exports = {
    getUsers,
    getRandomUser,
    getUserById,
    getUserByName,
};
