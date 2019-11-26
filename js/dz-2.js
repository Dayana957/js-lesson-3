var users = [
  {
      first_name: "Josephine",
      last_name: "Robinson",
      birthday: "1996-09-26",
  },
  {
      first_name: "Dean",
      last_name: "long",
      birthday: "1984-10-23",
  },
  {
      first_name: "Sonia",
      last_name: "Holmes",
      birthday: "1958-06-21",
  },
  {
      first_name: "June",
      last_name: "Mcdonalid",
      birthday: "1960-05-06",
  },
  {
      first_name: "ella",
      last_name: "Lane",
      birthday: "1991-12-11",
  },
  {
      first_name: "Felecia",
      last_name: "Stone",
      birthday: "1958-04-21",
  },
  {
      first_name: "Elmer",
      last_name: "George",
      birthday: "1987-12-10",
  }
];

function task2(users) {
  var result = [];

  var ucFirst = function(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
  }

  for(user of users) {
    result.push({
      first_name: ucFirst(user.first_name),
      last_name: ucFirst(user.last_name),
      birthday: user.birthday
    });
    
  }

  return result;
}

function task3(users) {
  return users.filter(user => user.first_name[0].toUpperCase() === "E" || user.last_name[0].toUpperCase() === "E");
}

function task4(users) {
  var result = [];
  
  for(user of users) {
    var birthday = new Date(user.birthday);
    var now = new Date();
    var age = now.getFullYear() - birthday.getFullYear();
    
    if (age > 30) {
      result.push(user);
    }
  }

  result.sort(function(a, b) {
    var now = new Date();
    var birthdayA = new Date(a.birthday);
    var birthdayB = new Date(b.birthday);
    var ageA = now.getFullYear() - birthdayA.getFullYear();
    var ageB = now.getFullYear() - birthdayB.getFullYear();

    if (ageA > ageB) {
      return -1;
    }
    
    if (ageA < ageB) {
      return 1;
    }

    return 0;
  });

  return result;
}

console.log(task2(users));
console.log(task3(users));
console.log(task4(users));