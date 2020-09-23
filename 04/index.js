//Task 1

const p = document.createElement("p");
p.className = "text";
p.innerText = "Это всего лишь текст";
document.body.append(p);

const div = document.createElement("div");
div.className = "alert";
div.innerText = "А это сообщение об ошибке";
div.style.backgroundColor = "red";
div.style.padding = "20px";
div.style.color = "white";
document.body.append(div);

//Task 2

const ol = document.createElement("ol");
const innerList = ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry",
"Sergey", "Ivan", "Alan"];

document.body.append(ol);

for (let i = 0; i < innerList.length; i++) {
  const li = document.createElement("li");
  li.innerText = innerList[i];
  ol.appendChild(li);

  if (i % 2 === 0) {
    li.className = "even";
    li.style.backgroundColor = "green";
  } else {
      li.className = "odd";
      li.style.backgroundColor = "blue";    
  }
}

// Task 3

function showMessage(text, color, top, left) {

  const div3 = document.createElement("div");
  div3.innerText = text;
  div3.style.backgroundColor = color;
  div3.style.position = "fixed";
  div3.style.top = top + "px";
  div3.style.left = left + "px";

  document.body.append(div3);
}

showMessage("Stone Cold said so", "#999999", 350, 300);

// Task 4

const ul = document.createElement("ul");
const innerNumber = prompt("Введите число");

document.body.append(ul);

let newNumber = 0;

while (true) {
  let inputNumber = prompt('Введите число');
  

  if (!inputNumber || !Number(inputNumber)) {
    break;
  }
  
  inputNumber = Number(inputNumber);
  const li4 = document.createElement("li");
  newNumber = inputNumber + newNumber;
  li4.innerText = newNumber;
  ul.appendChild(li4);
}




