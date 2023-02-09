// изменение радиуса 
const inputOne = document.getElementById('form__input_one');
const inputTwo = document.getElementById('form__input_two');
const inputThree = document.getElementById('form__input_three');
const inputFour = document.getElementById('form__input_four');

form__input_one.oninput = function() {
  if (form__input_one.value > 300) {
    alert('введено значение больше 300');
    document.querySelector('.radius').style.borderTopLeftRadius = ('300px');
    document.getElementById("form__input_one").value = 300;

  }
  else {
  document.querySelector('.radius').style.borderTopLeftRadius = (form__input_one.value + 'px');
  }
};

form__input_two.oninput = function() {
  if (form__input_two.value > 300) {
    alert('введено значение больше 300');
    document.querySelector('.radius').style.borderTopRightRadius = ('300px');
    document.getElementById("form__input_two").value = 300;
    
  }
  else {
  document.querySelector('.radius').style.borderTopRightRadius = (form__input_two.value + 'px');
  }
};

form__input_three.oninput = function() {
  if (form__input_three.value > 300) {
    alert('введено значение больше 300');
    document.querySelector('.radius').style.borderBottomRightRadius = ('300px');
    document.getElementById("form__input_three").value = 300;
  }
  else {
  document.querySelector('.radius').style.borderBottomRightRadius = (form__input_three.value + 'px');
  }
};

form__input_four.oninput = function() {
  if (form__input_four.value > 300) {
    alert('введено значение больше 300');
    document.querySelector('.radius').style.borderBottomLeftRadius = ('300px');
    document.getElementById("form__input_four").value = 300;
  }
  else {
  document.querySelector('.radius').style.borderBottomLeftRadius = (form__input_four.value + 'px');
  }
};

// изменение размера блока с помощью ввода значений с клавиатуры

const root = document.querySelector(':root');
const inputSize1 = document.getElementById('radius__box_one');
const inputSize2 = document.getElementById('radius__box_two');

inputSize1.oninput = function() {
 if (radius__box_one.value > 300) {
    alert('введено значение больше 300');
    document.querySelector('.radius').style.width = ('300px');
    document.getElementById("radius__box_one").value = 300;
  }
  else {
    root.style.setProperty('--main-width', radius__box_one.value + 'px');
    document.querySelector('.radius').style.width = (radius__box_one.value + 'px');
  }
};

inputSize2.oninput = function() {
  if (radius__box_two.value > 300) {
    alert('введено значение больше 300');
    document.querySelector('.radius').style.height = ('300px');
   document.getElementById("radius__box_two").value = 300;
    }
  else {
    root.style.setProperty('--main-height', radius__box_two.value + 'px');
    document.querySelector('.radius').style.height = (radius__box_two.value + 'px');
  }
 };


// окно с показом кода

var textElement = document.querySelector('.radius'); // присваиваем переменную класса блока
var textElementContent = textElement.outerHTML; // получаем все фрагменты кода включая потомков html

function textElementOne() { // функция поиска кода html
  document.getElementById("ident").value = textElementContent; // показываем код в окне кода HTML
}

function textElementTwo() { // функция поиска кода css
  let style = getComputedStyle(textElement);
  document.getElementById("ident2").value = 'width: ' + style.width + ';' +'\n' 
  + 'height: ' + style.height + ';'; // показываем код в окне кода СSS

}

 //Добавить кнопку сбросить, сам код и кнопку копировать код.