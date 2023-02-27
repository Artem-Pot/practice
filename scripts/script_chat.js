import {botOneMessagesArr, botOneimgArr, botMessagesArr, ObText} from './script.chatarr.js';

const Message = document.querySelector('.message__output'); // поле с сообщениями
// событие нажатия на кнопку
const submit = document.getElementById('button__input'); // переменная - событие отправки, при нажати на кнопку
submit.addEventListener('click', textInput); // обработчик события нажатии на кнопку

// ------------------первое сообщение и изображение бота, при загрузке страницы------------------
function textOneBot() { 
    const ran = Math.round(Math.random()*10);           // рандомная функция * 10 (для выдачи от 0 до 9 )
    const div = document.createElement('div');          // создание нового diva
    div.className = "message__bot";                     // присвоение новому элементу класс message__bot
    Message.append(div);                                // добавить блок с сообщениеем - последним
    div.innerHTML = botOneMessagesArr[ran];             // создание первого рамдомного сообщения ботом
}

function imgOneBot() { 
    const ran = Math.round(Math.random()*10);           // рандомная функция * 10 (для выдачи от 0 до 9 )
    const div = document.createElement('div'); 
    div.className = "message__bot";
    Message.append(div);
    div.innerHTML = botOneimgArr[ran];
}

setTimeout(() => { textOneBot(); }, 1000);   //вызов функции первого сообшения ботом через время после загрузки страницы
setTimeout(() => { imgOneBot(); }, 2000);  

// -----------------сообщение пользвователя---------------------------
function textInput() {                                   
    const userMessage = document.getElementById('message__input').value; // поиск текста в форме сообщения пользователя
    const div = document.createElement('div'); // создание нового diva

    div.className = "message__users"; // присвоение новому элементу класс message__users
    Message.append(div); // добавить блок с сообщениеем - последним
    div.innerHTML = userMessage; // вывод сообщения пользователя
    setTimeout(() => {  textBot(); }, 1000); // функция задержки вывода сообщения бота мсек
}
// ---------------------сообщения бота-------------------------------------

//функция рандома для сообщений бота
function getRandomIntInclusive(min, max) {
    min = Math.ceil(0);
    max = Math.floor(botMessagesArr.length);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

function textBot() {  
    const div = document.createElement('div'); // создание нового diva
    const userMessage = document.getElementById('message__input').value; // поиск текста в форме сообщения пользователя
    const letterСase = userMessage.trim().toLowerCase(); // перевод сообщения в нижний регистр для исключения задваивания условий с верхним и нижним регистром и удаление лишних пробелов с обоих концов
    const block = document.getElementById("placehere"); // прокрутка сообщения в блоке сообщений

    if (ObText[letterСase]) {
        div.innerHTML = ObText[letterСase]; // поиск сообщения пользователя в объекте и если совпадение то вывод сообщения
    } 
    else {
        div.innerHTML = botMessagesArr[getRandomIntInclusive()]; // рандомная функция, равная не больше длины объекта
    }

    div.className = "message__bot"; // присвоение новому элементу класс message__bot
    Message.append(div); // добавить блок с сообщениеем - последним
    block.scrollTop = block.scrollHeight; // прокрутка блока до самого низа
    document.getElementById('message__input').value = ''; // очистка поля ввода от текста после отправки сообщения пользователем (работает не так как нужно т.к. когда она стояла в функции вывода сообщения пользователя она стила сообщение и я не мог взять от туда данные), не работает если просто указать переменную userMessage, поэтому пришлось искать элемент заново
}


//сделать, что бы отправка сообщения была при нажатии на кнопку и клавишей энтер
// добавить, чтобы можно было убирать знаки ! ? : , с помощью команды исключения