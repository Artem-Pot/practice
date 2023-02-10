// поле ввоода для радиуса
const inputOne = document.getElementById('form__input_one');
const inputTwo = document.getElementById('form__input_two');
const inputThree = document.getElementById('form__input_three');
const inputFour = document.getElementById('form__input_four');
// прочее
const radStyle = document.querySelector('.radius').style
const radSize = 300;
const root = document.querySelector(':root');
//поле ввода для ручного ввода размера блока
const inputSize1 = document.getElementById('radius__box_one');
const inputSize2 = document.getElementById('radius__box_two');
// загрузка изображения
const inputImg = document.getElementById('radius__box_img');
// цвет блока
const boxColor = document.getElementById('radius__box_colour');
// ползун
const input_rangeW = document.getElementById('form__input_rangeW');
const input_rangeH = document.getElementById('form__input_rangeH');
const spanRangeW = document.getElementById('.span__range_w');
const spanRangeH = document.getElementById('.span__range_h');
//окна показа кода
const textElement = document.querySelector('.radius'); // присваиваем переменную класса блока
const textElementContent = textElement.outerHTML; // получаем все фрагменты кода включая потомков html


function radAlert() {
  alert('введено значение больше ' + radSize);
};


form__input_one.oninput = function() {
  if (this.value > radSize) {
    radAlert();
    radStyle.borderTopLeftRadius = ('300px');
    this.value = radSize;
  }
  else {
    radStyle.borderTopLeftRadius = (this.value + 'px');
  }
};

form__input_two.oninput = function() {
  if (this.value > radSize) {
    radAlert();
    radStyle.borderTopRightRadius = ('300px');
    this.value = radSize;
  }
  else {
    radStyle.borderTopRightRadius = (this.value + 'px');
  }
};

form__input_three.oninput = function() {
  if (this.value > radSize) {
    radAlert();
    radStyle.borderBottomRightRadius = ('300px');
    this.value = radSize;
  }
  else {
    radStyle.borderBottomRightRadius = (this.value + 'px');
  }
};

form__input_four.oninput = function() {
  if (this.value > radSize) {
    radAlert();
    radStyle.borderBottomLeftRadius = ('300px');
    this.value = radSize;
  }
  else {
    radStyle.borderBottomLeftRadius = (this.value + 'px');
  }
};

// изменение размера блока с помощью ввода значений с клавиатуры

inputSize1.oninput = function() {
 if (this.value > radSize) {
  radAlert();
  radStyle.width = ('300px');
  this.value = radSize;
  }
  else {
    root.style.setProperty('--main-width', this.value + 'px');
    radStyle.width = (this.value + 'px');
  }
};

inputSize2.oninput = function() {
  if (this.value > radSize) {
    radAlert();
    radStyle.height = ('300px');
    this.value = radSize;
    }
  else {
    root.style.setProperty('--main-height', this.value + 'px');
    radStyle.height = (this.value + 'px');
    
  }
 };

// вставка изображения в блок

inputImg.oninput = function() {                        // сделать выбор между  cover и contain с помощью чек бокса
  let url = URL.createObjectURL(this.files[0]);
  radStyle.backgroundImage = "url(" + url + ")";
  radStyle.backgroundRepeat = "no-repeat";
  radStyle.backgroundPosition = "center";
  radStyle.backgroundSize = "cover";  
}

// изменение цвета блока

boxColor.oninput = function() {
   if (radStyle.backgroundImage = true) {
     inputImg.value = '';
     radStyle.backgroundImage = "url(" + ")";
     radStyle.backgroundColor = this.value;
   }
   else {
    inputImg .value = '';
    radStyle.backgroundColor = this.value;
   }
 };

// изменение размера с помощью ползунка

function test() {
  
};


input_rangeW.oninput = function() {
    root.style.setProperty('--main-width', this.value + 'px');
    radStyle.width = (this.value + 'px');
    span__range_w.textContent = this.value;
    test();
 };

 input_rangeH.oninput = function() {
    root.style.setProperty('--main-height', this.value + 'px');
    radStyle.height = (this.value + 'px');
    span__range_h.textContent = this.value; 
};

// окно показа кода html и css

function textElementOne() { // функция поиска кода html
  document.getElementById("ident").value = textElementContent; // показываем код в окне кода HTML
}

function textElementTwo() { // функция поиска кода css
  const style = getComputedStyle(textElement);
  if (radStyle.backgroundImage) { // если в блоке загружено изображение будет показан данный код стиля
    document.getElementById("ident2").value = 'width: ' + style.width + ';' +'\n' 
    + 'height: ' + style.height + ';' +'\n'
    + 'border: ' + style.borderTopLeftRadius + ' ' + style.borderTopRightRadius + ' '  
    + style.borderBottomLeftRadius + ' '  + style.borderBottomRightRadius + ';' +'\n'
    + 'background-color: ' + style.backgroundColor + ';' + '\n'
    + 'background-image: ' + "url()" + ';' + " /*" + " - указать путь к файлу внутри скобок " + "*/" +'\n'
    + 'background-repeat: ' + style.backgroundRepeat + ';' + '\n'
    + 'background-position: ' + style.backgroundPosition + ';' + '\n' 
    + 'background-size: ' + style.backgroundSize + ';'; // показываем код в окне кода СSS
  }

  else { // в противном случае покажется код без учета изображения
    document.getElementById("ident2").value = 'width: ' + style.width + ';' +'\n' 
    + 'height: ' + style.height + ';' +'\n'
    + 'border: ' + style.borderTopLeftRadius + ' ' + style.borderTopRightRadius + ' '  
    + style.borderBottomLeftRadius + ' '  + style.borderBottomRightRadius + ';' +'\n'
    + 'background-color: ' + style.backgroundColor + ';' + '\n' ; // показываем код в окне кода СSS
  }
}

 //сделать чтобы размер блока был пропорционально размеру изображения при загрузке с возможностью менять пропорции изображения через радио кнопку
 // поженить ползунки и ручной ввод размера
