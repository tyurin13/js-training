const staff = [{name: 'Alex', company: 'Google', email: 'alex@gmail.com', phone: '+375292929292', balance: 3323, isActive: false, gender: 'female'},
              {name: 'Peter', company: 'Facebook', email: 'peter@gmail.com', phone: '+375291111111', balance: 5723, isActive: true, gender: 'male'},
              {name: 'Rosa', company: 'Amazon', email: 'rosa@gmail.com', phone: '+375292222222', balance: 8343, isActive: false, gender: 'female'},
              {name: 'Britney', company: 'O2', email: 'brit@gmail.com', phone: '+375293535353', balance: 200309, isActive: true, gender: 'female'},
              {name: 'Bob', company: 'Wargaming', email: 'bob@gmail.com', phone: '+375299898989', balance: 43323, isActive: true, gender: 'male'}];

let femaleNumber = 0;
let maleNumber = 0;
let arrBalance = [];
let maxBalance = 0;

staff.forEach(function(element) {
  let row = document.createElement('tr');
  if (!element.isActive) {
    row.style.backgroundColor = 'grey';
  }
  document.body.append(row);

  if (element.gender === 'female') {
    femaleNubmer = femaleNumber++
  } else if (element.gender === 'male') {
    malleNumber = maleNumber++
  }

  let cellName = document.createElement('td');
  cellName.innerText = element.name;
  row.append(cellName);


  let cellCompany = document.createElement('td');
  cellCompany.innerText = element.company;
  row.append(cellCompany);

  let cellEmail = document.createElement('td');
  cellEmail.innerText = element.email;
  row.append(cellEmail);

  let cellPhone = document.createElement('td');
  cellPhone.innerText = element.phone;
  row.append(cellPhone);

  let cellBalance = document.createElement('td');
  cellBalance.innerText = element.balance;
  row.append(cellBalance);
  arrBalance.push(element.balance);
    
  let cellDelete = document.createElement('td');
  row.append(cellDelete);
  const cellBtn = document.createElement('button');
  cellBtn.innerText = 'Удалить';
  cellDelete.append(cellBtn);

  cellBtn.addEventListener('click', (event) => {

    row.remove();
    let newStaff = staff.splice(i - staff.length, 1);
  })
})

const genderNumbers = document.createElement('div');
genderNumbers.innerText = `В базе данных сотрудников ${femaleNumber} мужчин и ${maleNumber} женщин`;
document.body.prepend(genderNumbers);

arrBalance.forEach(function(sum) {
  if (sum > maxBalance) {
    maxBalance = sum
  }
})

const maxBalanceBlock = document.createElement('div');
maxBalanceBlock.innerText = `Максимальный баланс среди пользователей составляет ${maxBalance} доллара`;
genderNumbers.append(maxBalanceBlock)
