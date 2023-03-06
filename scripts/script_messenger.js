import {botMessagesArr, ObText, botOneimgArr} from './script.chatarr.js';

const Message = document.querySelector('.main__correspondence'); // поле с сообщениями

// событие нажатия на кнопку отправить
const submit = document.getElementById('button_poisoning'); // переменная - событие отправки, при нажати на кнопку
submit.addEventListener('click', textInput); // обработчик события нажатии на кнопку

// событие нажатия на клавишу ENTER
const userMessage  = document.getElementById("main__input");

userMessage.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button_poisoning").click();
  }
});

//функция рандома сообщений бота
function getRandomIntInclusive(min, max) {
    min = Math.ceil(0);
    max = Math.floor(botMessagesArr.length-1);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

//функция для вывода ответа сообщений бота по упоминания фразы из массива
function getRandomBotObj(min, max) {
    min = Math.ceil(0);
    max = Math.floor(3);                                      //максимальная длина массива 4, не получается изменить на ObText[letterСase].length
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

// ------------------первое сообщение бота-----------------
function textOneBot() { 
    const div = document.createElement('div');                                 // создание нового diva
    div.className = "main__mess-system";                                            // присвоение новому элементу класс message__bot
    Message.append(div); // добавить блок с сообщениеем - последним
      //--------время для сообщения----------
      const d = new Date();
      const h = `${d.getHours()}`.padStart(2, '0');
      const m = `${d.getMinutes()}`.padStart(2, '0');
      const displayDate = h + ":" + m;

    // создание первого приветсвенного сообщения ботом
    div.innerHTML = `<span class="main__text">Привет, я чат-бот и я умею:<br>
    - Покажу все доступные команды - !список<br>
    - Отвечать на фразы пользователя из базы, или в случае отсуствия - рандомной. Чтобы посмотреть все доступные фразы - !фраза<br>
    - Покажу в сообщениях все мои используемые стикеры. Чтобы посмотреть стикеры - !стикер<br>
    </span><div class="main__time-box">
        <span class="main__time">${displayDate}</span>
        <div class="main__read main__read-no"></div>
    </div>`;     
}

setTimeout(() => { textOneBot(); }, 1000);   //вызов функции первого сообшения ботом через время после загрузки страницы

// -----------------сообщение пользвователя---------------------------
function textInput() {         
    let userMessage = document.getElementById('main__input').value; // поиск текста в форме сообщения пользователя
    const div = document.createElement('div'); // создание нового diva
    const block = document.getElementById("placehere"); // прокрутка сообщения в блоке сообщений
      //--------время для сообщения----------
      const d = new Date();
      const h = `${d.getHours()}`.padStart(2, '0');
      const m = `${d.getMinutes()}`.padStart(2, '0');
      var displayDate = h + ":" + m;
  
    if (userMessage === '') {
        document.getElementById("main__input").focus(); // фокусирует элемиент ввода сообщения
    }

    else if (userMessage === '!список') {
        div.innerHTML = 'Список команд чат бота:' + '<br>' + '!список - покажет все доступные команды бота'+ '<br>' + '!фраза - покажет все доступные фразы, на которые бот ответит' + '<br>' + '!стикер - покажет все доступные стикеры';
        div.className = "main__mess-system"; // присвоение новому элементу класс с системным сообщением
        document.getElementById('main__input').value = ''; // очистка блока сообщений
    }

    else if (userMessage === '!фраза') {
        div.innerHTML = Object.keys(ObText); // выводит все свойства объекта(фразы на котоыре отвечает бот)
        div.className = "main__mess-system"; // присвоение новому элементу класс с системным сообщением
        document.getElementById('main__input').value = ''; // очистка блока сообщений
    }

    else if (userMessage === '!стикер') {
        div.innerHTML = botOneimgArr; // выводит все стикеры
        div.className = "main__mess-system"; // присвоение новому элементу класс с системным сообщением
        document.getElementById('main__input').value = ''; // очистка блока сообщений
        
    }

    else {
        div.innerHTML = `<span class="main__text">${userMessage}</span>
        <div class="main__time-box">
            <span class="main__time">${displayDate}</span>
            <div class="main__read main__read-no"></div>
        </div>`;
        div.className = "main__mess-user"; // присвоение новому элементу класс main__mess-user
        setTimeout(() => { textBot(); }, 1000); // функция задержки вывода сообщения бота мсек, связано с очисткой сообщения
    }

    Message.append(div); // добавить блок с сообщениеем - последним
    block.scrollTop = block.scrollHeight; // прокрутка блока до самого низа
}

// ---------------------сообщения бота-------------------------------------

function textBot() {  
    const div = document.createElement('div'); // создание нового diva
    const userMessage = document.getElementById('main__input').value; // поиск текста в форме сообщения пользователя
    let letterСase = userMessage.trim().toLowerCase().replace(/[^а-яА-Яa-zA-Z ]/g, ""); // фильтр переводит сообщение в нижний регистр, исключает пробелы впередли и сзади, исключение всех символов кроме букв алфавита.
    const block = document.getElementById("placehere"); // прокрутка сообщения в блоке сообщений
      //--------время для сообщения----------
      const d = new Date();
      const h = `${d.getHours()}`.padStart(2, '0');
      const m = `${d.getMinutes()}`.padStart(2, '0');
      var displayDate = h + ":" + m;

     if (ObText[letterСase]) {                                                                       // поиск ответа в массиве на вопрос пользователя 'точная фраза'
            div.innerHTML = `<span class="main__text">${ObText[letterСase][getRandomBotObj()]}</span>
            <div class="main__time-box">
                <span class="main__time">${displayDate}</span>
                <div class="main__read main__read-no"></div>
            </div>`;
    } 

    else  {
        div.innerHTML = `<span class="main__text">${botMessagesArr[getRandomIntInclusive()]}</span>
        <div class="main__time-box">
            <span class="main__time">${displayDate}</span>
            <div class="main__read main__read-no"></div>
        </div>`;
    }

    div.className = "main__mess"; // присвоение новому элементу класс main__mess
    Message.append(div); // добавить блок с сообщениеем - последним
    block.scrollTop = block.scrollHeight; // прокрутка блока до самого низа
    document.getElementById('main__input').value = ''; // очистка поля ввода от текста после отправки сообщения пользователем (работает не так как нужно т.к. когда она стояла в функции вывода сообщения пользователя она стила сообщение и я не мог взять от туда данные), не работает если просто указать переменную userMessage, поэтому пришлось искать элемент заново   
}

// -------------- Изменение светлой темы на тёмную.
let submitDark = document.getElementById('button__dark'); // переменная - событие отправки, при нажати на кнопку
submitDark.addEventListener('click', textBut); // обработчик события нажатии на кнопку

function textBut() {
    const root = document.querySelector(':root');
    root.style.setProperty('--text-color-online', '#011627');
}


// добавить изменение галочки со временем
// добавить ещё акаунтов пользователей в чате

//добавить сценарий в виде ветвления.
// добавить функцию самообучения бота - добавить команду !команда, котое будет вызывать алерт в который добавить фразу и ответ к ней. 
//Далее добавить, чтобы лог записывался и добавлялся в массив с новыми фразами, скорей всего не обойтись без сервера иначе после каждого обновления станицы всё будет пропадать. (node js и msql) или добавить куки для сохранения данных при перезагрузки страницы
// добавить функцию поиска не только по точной фразе и но части предложения, чтоб увеличить словарный запас