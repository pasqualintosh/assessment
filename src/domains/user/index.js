export function saveUser(user) {
  let users = window.localStorage.getItem('users')
    ? JSON.parse(window.localStorage.getItem('users'))
    : [];
  let found = users.find(e => e.name == user.name);

  if (!found) {
    users.push(user);
    window.localStorage.setItem('users', JSON.stringify(users));
    return true;
  } else return 'user already existing';
}

export function editUser(user) {
  let users = window.localStorage.getItem('users')
    ? JSON.parse(window.localStorage.getItem('users'))
    : [];
  let found = users.findIndex(e => e.id === user.id);

  if (found !== -1) {
    users[found] = { ...user };
    window.localStorage.setItem('users', JSON.stringify(users));
    return true;
  } else return 'user not found';
}

export function deleteUser(id) {
  let users = window.localStorage.getItem('users')
    ? JSON.parse(window.localStorage.getItem('users'))
    : [];
  let found = users.findIndex(e => e.id == id);

  if (found !== -1) {
    users.splice(found, 1);
    window.localStorage.setItem('users', JSON.stringify(users));
    return true;
  } else return 'user not found';
}
