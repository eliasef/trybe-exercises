function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// 1.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDaysList = document.getElementById("days")
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement("li")
    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday'
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem)
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday'
      dayItem.innerHTML = day
      getDaysList.appendChild(dayItem)
    } else if (day === 25) {
      dayItem.className = 'day holiday friday'
      dayItem.innerHTML = day
      getDaysList.appendChild(dayItem)
    } else {
      dayItem.className = 'day'
      dayItem.innerHTML = day
      getDaysList.appendChild(dayItem)
    }
  }
}
createDaysOfTheMonth()

// 2.

function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement("button");
  newButton.id = 'btn-holiday'

  newButton.innerHTML = buttonName;
  buttonContainer.appendChild(newButton);
}
createHolidayButton('Feriados')

// 3.

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function () {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

displayHolidays();

// 4.

function createFridayButton(buttonName) {
  let newButton = document.createElement("button")
  let divButton = document.querySelector('.buttons-container')
  newButton.id = 'btn-friday'
  newButton.innerHTML = buttonName
  divButton.appendChild(newButton)
}

createFridayButton('Sexta-feira')

// 5.

function displayFridays(fridaysArray) {
  let getFridayButton = document.getElementById("btn-friday")
  let fridays = document.querySelectorAll('.friday')
  let newFridayText = 'SEXTOU o/'

  getFridayButton.addEventListener('click', function () {
    for (let i = 0; i < fridays.length; i += 1) {
      if (fridays[i].innerHTML !== newFridayText) {
        fridays[i].innerHTML = newFridayText
      } else {
        fridays[i].innerHTML = fridaysArray[i]
      }
    }
  })
}

displayFridays([4,11,18,25])

// 6.

function mouseOver () {
  let days = document.getElementById("days")

  days.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px'
    event.target.style.fontWeight = '600'
  })
}



function mouseOut () {
  let days = document.getElementById("days") 

  days.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px'
    event.target.style.fontWeight = '200'
  })
}

mouseOver()
mouseOut()

// 7.

function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

newTaskSpan('Projeto X');

// 8.

function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
};

newTaskDiv('green');

// 9. 

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

// 10.

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();

// bônus.

function compromissos () {

  let input = document.getElementById("task-input");
  let buttonAdd = document.getElementById("btn-add");
  let taskList = document.querySelector('.task-list')

  buttonAdd.addEventListener('click', function () {
    if (input.value === '') {
      alert("[ERRO]")
    } else {
      let newLista = document.createElement("li")
      newLista.innerHTML = input.value
      taskList.appendChild(newLista)
      input.value = ''
    }
  })

  input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && input.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerHTML = input.value;

      taskList.appendChild(newLi);
      input.value = '';
    }
  });

}



compromissos()