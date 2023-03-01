import {botOneMessagesArr, botOneimgArr, botMessagesArr, ObText} from './script.chatarr.js';

const Message = document.querySelector('.message__output'); // поле с сообщениями
// событие нажатия на кнопку
const submit = document.getElementById('button__input'); // переменная - событие отправки, при нажати на кнопку
submit.addEventListener('click', textInput); // обработчик события нажатии на кнопку
//submit.addEventListener('Enter', textInput); 


// document.getElementById('message__input').addEventListener('keyup', function(event) {
//         if (event.code === 'Enter')
//         {
//             event.preventDefault();
//             textInput();
//         }
//     });
// https://www.techiedelight.com/ru/submit-form-with-enter-key-javascript/

//функция рандома для первого сообщений бота
function getRandomIntInclusiveOne(min, max) {
    min = Math.ceil(0);
    max = Math.floor(botOneMessagesArr.length-1);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

//функция рандома для изображений бота
function getRandomIntInclusiveImg(min, max) {
    min = Math.ceil(0);
    max = Math.floor(botOneimgArr.length-1);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

//функция рандома для сообщений бота
function getRandomIntInclusive(min, max) {
    min = Math.ceil(0);
    max = Math.floor(botMessagesArr.length-1);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

//функция рандома для сообщений бота из массива объекта
function getRandomBotObj(min, max) {
    min = Math.ceil(0);
    max = Math.floor(3);                                      //максимальная длина массива 4, не получается изменить на ObText[letterСase].length
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

// ------------------первое сообщение и изображение бота, при загрузке страницы------------------
function textOneBot() { 
    const div = document.createElement('div');                                 // создание нового diva
    div.className = "message__bot";                                            // присвоение новому элементу класс message__bot
    Message.append(div);                                                       // добавить блок с сообщениеем - последним
    div.innerHTML = botOneMessagesArr[getRandomIntInclusiveOne()];             // создание первого рамдомного сообщения ботом
}

//вывод рандомного изображения ботом
function imgOneBot() { 
    const div = document.createElement('div'); 
    div.className = "message__bot";
    Message.append(div);
    div.innerHTML = botOneimgArr[getRandomIntInclusiveImg()];
    
}

setTimeout(() => { textOneBot(); }, 1000);   //вызов функции первого сообшения ботом через время после загрузки страницы
//setTimeout(() => { imgOneBot(); }, 2000);  //вызов функции рамндомного изображения, после  первого сообшения ботом

// -----------------сообщение пользвователя---------------------------
function textInput() {         
    let userMessage = document.getElementById('message__input').value; // поиск текста в форме сообщения пользователя
    const div = document.createElement('div'); // создание нового diva

    if (userMessage === '') {
        alert('Вы ни чего не ввели!');
        
    }

    else if (userMessage === '!список') {
        div.innerHTML = 'Список команд чат бота:' + '<br>' + '!список - покажет все доступные команды бота'+ '<br>' + '!фраза - покажет все доступные фразы, на которые бот ответит' + '<br>' + '!стикер - покажет все доступные стикеры' + '<br>' + '!анекдот - покажет анекдот';
        div.className = "message__bot"; // присвоение новому элементу класс message__users
        userMessage = '';
        //очистка поля ввода
    }

    else if (userMessage === '!фраза') {
        div.innerHTML = Object.keys(ObText); // выводит все свойства объекта(фразы на котоыре отвечает бот)
        div.className = "message__bot"; // присвоение новому элементу класс message__users
        userMessage = ''; //очистка поля ввода
        
    }

    else if (userMessage === '!стикер') {
        div.innerHTML = //botOneimgArr; // выводит все свойства объекта(фразы на котоыре отвечает бот)
        div.className = "message__bot"; // присвоение новому элементу класс message__users
        userMessage = ''; //очистка поля ввода
    }

    else if (userMessage === '!анекдот') {
        div.innerHTML = 'Функция !анекдот - в разработке'; // выводит все свойства объекта(фразы на котоыре отвечает бот)
        div.className = "message__bot"; // присвоение новому элементу класс message__users
        userMessage = ''; //очистка поля ввода
    }

    else {
        div.innerHTML = userMessage; // вывод сообщения пользователя
        div.className = "message__users"; // присвоение новому элементу класс message__users
        setTimeout(() => {  textBot(); }, 1000); // функция задержки вывода сообщения бота мсек, связано с очисткой сообщения
    }

    Message.append(div); // добавить блок с сообщениеем - последним
    block.scrollTop = block.scrollHeight;
}
// ---------------------сообщения бота-------------------------------------

function textBot() {  
    const div = document.createElement('div'); // создание нового diva
    const userMessage = document.getElementById('message__input').value; // поиск текста в форме сообщения пользователя
    let letterСase = userMessage.trim().toLowerCase().replace(/[^а-яА-Яa-zA-Z ]/g, ""); // фильтр переводит сообщение в нижний регистр, исключает пробелы впередли и сзади, исключение всех символов кроме букв алфавита.
    const block = document.getElementById("placehere"); // прокрутка сообщения в блоке сообщений

        if (ObText[letterСase]) {
            div.innerHTML = ObText[letterСase][getRandomBotObj()];               // поиск сообщения пользователя в объекте и если совпадение то вывод сообщения
        } 
        else {
            div.innerHTML = botMessagesArr[getRandomIntInclusive()]; // рандомная функция, равная не больше длины объекта
        }

    div.className = "message__bot"; // присвоение новому элементу класс message__bot
    Message.append(div); // добавить блок с сообщениеем - последним
    block.scrollTop = block.scrollHeight; // прокрутка блока до самого низа
    document.getElementById('message__input').value = ''; // очистка поля ввода от текста после отправки сообщения пользователем (работает не так как нужно т.к. когда она стояла в функции вывода сообщения пользователя она стила сообщение и я не мог взять от туда данные), не работает если просто указать переменную userMessage, поэтому пришлось искать элемент заново   
}




//добавить сценарий в виде ветвления.
//добавить !функцию викторина и анекдот / https://www.anekdot.ru/static/webmaster.html
// добавить функцию поиска не только по точной фразе и но части предложения, чтоб увеличить словарный запас
//сделать, что бы отправка сообщения была при нажатии на кнопку и клавишей энтер
//сделать чтобы сообщения и изображения чередовались
// добавить функцию самообучения бота - добавить команду !команда, котое будет вызывать алерт в который добавить фразу и ответ к ней. 
//Далее добавить, чтобы лог записывался и добавлялся в массив с новыми фразами, скорей всего не обойтись без сервера иначе после каждого обновления станицы всё будет пропадать. (node js и msql)
