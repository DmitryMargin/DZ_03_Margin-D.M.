/* # DZ_03_Margin-D.M. "�������� ���� ������������� � ����������� �����"

## Task 1 */

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
  
/* ������� ��� �������� ����� �������������: */
function User(first_name, last_name, birthday) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.birthday = birthday;
}

/* ������� ��� �������� ���.����� ����� � ������� ������ ������������: */
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

/* �������, � ������� �������� ������������ ������������ � ����������� ����� (��� � ������� ����������, 
���������� �� ������������ ������ ������� �������� ��� ������ �����, � ������������ ������� �� ����� �������? 
� ����� ����� ���� ������� � ����������� users ������ �������): */
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


/* ## Task 2 */


/* ������� ����� ������, ���������� users � ������ ��� ����� � ������� � ��������� �����: */

var arrUsersUpperCase = [];

function toCapitalizeCase(str) {
  return str.charAt(0).toUpperCase() + str.substring(1)
}

for (el of users) {
  el.first_name = toCapitalizeCase(el.first_name)
  el.last_name = toCapitalizeCase(el.last_name)
  arrUsersUpperCase.push(el)
}
console.log(arrUsersUpperCase)

/* ## Task 3 */


/* ���� �������������, � ������� ��� ��� ������� ���������� �� ����� "�": */

var namesOnE = users.filter(function(e) {
  return e.first_name.charAt(0) == "E" || e.last_name.charAt(0) == "E";
});
console.log(namesOnE);


/* ## Task 4
 *//* ���� ������������� ������ 30 ��� � ��������� �� �� ��������: */

var UsersOver30 = users.filter(function(user) {
  let age = new Date().getTime() - new Date(user.birthday).getTime();
  return age > 30 * 365 * 24 * 60 * 60 * 1000;
})
UsersOver30.sort(function(a, b) {
  let birthA = new Date(a.birthday),
    birthB = new Date(b.birthday)
  return birthA - birthB
})

/* ## Task 1_������� � ����������� users ������ � ������������� �������������� ������ ������� */

/* ������� ��� �������� ����� �������������: */
function User(first_name, last_name, birthday) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.birthday = birthday;
}

/* ������� ��� �������� ���.����� ����� � ������� ������ ������������: */
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

/* �������, � ������� �������� ������������ ������������ � ����������� ����� (��� � ������� ����������, 
���������� �� ������������ ���� �������� ��� ������ �����, � ������������ ������� �� ����� �������?): */
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
