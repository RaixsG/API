const router = require('express').Router();
const usersServices = require('./users.services');

router.get('/users', usersServices.getUsers);
router.get('/users/random', usersServices.getRandomUser);
router.get('/users/search', usersServices.getUserByName);

router.get('/users/:id', usersServices.getUserById);

module.exports = router;