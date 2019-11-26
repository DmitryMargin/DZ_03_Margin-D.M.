# DZ_03_Margin-D.M. "Создание базы пользователей и манипуляции базой"

## Task 1

```
let users = [{
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
  
/* Функция для создания новых пользователей: */
function User(first_name, last_name, birthday) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.birthday = birthday;
}

/* Функция для контроля мин.длины имени и фамилии нового пользователя: */
const input = function(minLength, question) {
  let dataUser;
  do {
    dataUser = prompt(question);
    if (dataUser === null) {
      break;
    }
  } while (dataUser.trim().length < minLength);
  return dataUser;
}

/* Функция, в которую помещены существующие пользователи и добавляются новые (тут я немного сомневался, 
необходимо ли существующих внутрь функции помещать или только новых, а существующих вынести за рамки функции? в конце файла есть вариант
с объявлением users внутри функции): */
var addUsers = function() {
  
  let countNewUsers = prompt("Please enter amount of users")
  i = 0;
  for (i; i < countNewUsers; i++) {
    let first_name = input(3, "Please enter your name")
    let last_name = input(3, "Please enter your last name")
    let birthday = prompt("Please enter your birthday")
    let newUser = new User(first_name, last_name, birthday);
    users.push({
      first_name,
      last_name,
      birthday
    })
  }
  console.log(users)
}
addUsers()
```

## Task 2


## Task 3

## Task 1_вариант с объявлением users весте с существующими пользователями внутри функции

```
/* Функция для создания новых пользователей: */
function User(first_name, last_name, birthday) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.birthday = birthday;
}

/* Функция для контроля мин.длины имени и фамилии нового пользователя: */
const input = function(minLength, question) {
  let dataUser;
  do {
    dataUser = prompt(question);
    if (dataUser === null) {
      break;
    }
  } while (dataUser.trim().length < minLength);
  return dataUser;
}

/* Функция, в которую помещены существующие пользователи и добавляются новые (тут я немного сомневался, 
необходимо ли существующих сюда помещать или только новых, а существующих вынести за рамки функции?): */
var addUsers = function() {
  let users = [{
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
  let countNewUsers = prompt("Please enter amount of users")
  i = 0;
  for (i; i < countNewUsers; i++) {
    let first_name = input(3, "Please enter your name")
    let last_name = input(3, "Please enter your last name")
    let birthday = prompt("Please enter your birthday")
    let newUser = new User(first_name, last_name, birthday);
    users.push({
      first_name,
      last_name,
      birthday
    })
  }
  console.log(users)
}
addUsers()
```




