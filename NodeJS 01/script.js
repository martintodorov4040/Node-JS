const fs = require('fs');

class User {
  constructor(userName, password, age, isActive, dateCreated) {
    this.userName = userName;
    this.password = password;
    this.age = age;
    this.isActive = isActive;
    this.dateCreated = dateCreated;
  }
}

const users = [
  new User('user1', 'password1', 20, true, new Date()),
  new User('user2', 'password2', 25, false, new Date()),
  new User('user3', 'password3', 30, true, new Date()),
  new User('user4', 'password4', 35, false, new Date()),
  new User('user5', 'password5', 40, true, new Date()),
  new User('user6', 'password6', 45, false, new Date()),
  new User('user7', 'password7', 50, true, new Date()),
  new User('user8', 'password8', 55, false, new Date()),
  new User('user9', 'password9', 60, true, new Date()),
  new User('user10', 'password10', 65, false, new Date())
];

const jsonData = JSON.stringify(users);

fs.writeFile('users.json', jsonData, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Users saved to file');
});