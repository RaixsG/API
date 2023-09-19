const Users = require('../db/users');

const findAllUsers = () => {
  return Users;
};

module.exports = {
    findAllUsers,
};