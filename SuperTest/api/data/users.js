let users = [];
let idCounter = 1;

function getAllUsers() {
  return users;
}

function getUserById(id) {
  return users.find(u => u.id === id);
}

function createUser(name) {
  const user = { id: idCounter++, name };
  users.push(user);
  return user;
}

function updateUser(id, name) {
  const user = getUserById(id);
  if (user) {
    user.name = name;
    return user;
  }
  return null;
}

function deleteUser(id) {
  const index = users.findIndex(u => u.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
  return null;
}

function resetData() {
  users = [];
  idCounter = 1;
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  resetData
};
