const Users = require('../db/users');

const findAllUsers = () => {
  return Users;
};

// Obtener un usuario aleatorio
const findRandomUser = () => {
  const randomUser = Users[Math.floor(Math.random() * Users.length)];
  return randomUser;
};

// Obtener un usuario segun ID
const findUserById = (id) => {
  const user = Users.find(user => id === user.id);
  return user;
}

// Obtener un usuario segun ID
const findUserByName = (name) => {
  const userByName = Users.find(user => name === user.name);
  return userByName;
}

module.exports = {
  findAllUsers,
  findRandomUser,
  findUserById,
  findUserByName,
};