// изменение радиуса 
const inputOne = document.getElementById('form__input_one');
const inputTwo = document.getElementById('form__input_two');
const inputThree = document.getElementById('form__input_three');
const inputFour = document.getElementById('form__input_four');

const radStyle = document.querySelector('.radius').style
const radSize = 300;

function radAlert() {
  alert('введено значение больше ' + radSize);
};

form__input_one.oninput = function() {
  if (form__input_one.value > radSize) {
    radAlert();
    radStyle.borderTopLeftRadius = ('300px');
    document.getElementById("form__input_one").value = radSize;
  }
  else {
    radStyle.borderTopLeftRadius = (form__input_one.value + 'px');
  }
};

form__input_two.oninput = function() {
  if (form__input_two.value > radSize) {
    radAlert();
    radStyle.borderTopRightRadius = ('300px');
    document.getElementById("form__input_two").value = radSize;
  }
  else {
    radStyle.borderTopRightRadius = (form__input_two.value + 'px');
  }
};

form__input_three.oninput = function() {
  if (form__input_three.value > radSize) {
    radAlert();
    radStyle.borderBottomRightRadius = ('300px');
    document.getElementById("form__input_three").value = radSize;
  }
  else {
    radStyle.borderBottomRightRadius = (form__input_three.value + 'px');
  }
};

form__input_four.oninput = function() {
  if (form__input_four.value > radSize) {
    radAlert();
    radStyle.borderBottomLeftRadius = ('300px');
    document.getElementById("form__input_four").value = radSize;
  }
  else {
    radStyle.borderBottomLeftRadius = (form__input_four.value + 'px');
  }
};

// изменение размера блока с помощью ввода значений с клавиатуры

const root = document.querySelector(':root');
const inputSize1 = document.getElementById('radius__box_one');
const inputSize2 = document.getElementById('radius__box_two');

inputSize1.oninput = function() {
 if (radius__box_one.value > radSize) {
  radAlert();
    document.querySelector('.radius').style.width = ('300px');
    document.getElementById("radius__box_one").value = radSize;
  }
  else {
    root.style.setProperty('--main-width', radius__box_one.value + 'px');
    document.querySelector('.radius').style.width = (radius__box_one.value + 'px');
  }
};

inputSize2.oninput = function() {
  if (radius__box_two.value > radSize) {
    radAlert();
    document.querySelector('.radius').style.height = ('300px');
   document.getElementById("radius__box_two").value = radSize;
    }
  else {
    root.style.setProperty('--main-height', radius__box_two.value + 'px');
    document.querySelector('.radius').style.height = (radius__box_two.value + 'px');
  }
 };

// изменение цвета блока
const boxColor = document.getElementById('radius__box_colour');

boxColor.oninput = function() {
  document.querySelector('.radius').style.backgroundColor = radius__box_colour.value;
 };

// окно с показом кода
const textElement = document.querySelector('.radius'); // присваиваем переменную класса блока
const textElementContent = textElement.outerHTML; // получаем все фрагменты кода включая потомков html

function textElementOne() { // функция поиска кода html
  document.getElementById("ident").value = textElementContent; // показываем код в окне кода HTML
}

function textElementTwo() { // функция поиска кода css
  const style = getComputedStyle(textElement);
  document.getElementById("ident2").value = 'width: ' + style.width + ';' +'\n' 
  + 'height: ' + style.height + ';' +'\n'
  + 'border: ' + style.borderTopLeftRadius + ' ' + style.borderTopRightRadius + ' '  
  + style.borderBottomLeftRadius + ' '  + style.borderBottomRightRadius + ';' +'\n'
  + 'background-color: ' + style.backgroundColor + ';'; // показываем код в окне кода СSS
}

 //Добавить кнопку сбросить всё.