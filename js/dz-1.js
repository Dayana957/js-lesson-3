function createUser() {
  var _users = [];

  this.setUsers = function(first_name, last_name, birthday){
    _users.push({
      first_name: first_name,
      last_name: last_name,
      birthday: new Date(birthday)
    });
  }

  var countUsers = prompt("Сколько пользователей хочешь добавить?");

  for (var i = 0; i < countUsers; i++) {
    var first_name = prompt("Введите имя");
    var last_name = prompt("Введите фамилию");
    var birthday = prompt("Введите дату рождения");

    setUsers(first_name, last_name, birthday);
  }

  console.log(_users);
}