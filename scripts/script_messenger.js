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

//------------функция включения оповещения о сообщении----------------------

//ползунок отключения/включения звука сообщения от бота
const checkboxSound = document.getElementById("profile__checkbox-sound"); // поиск чек бокса твечающий за отклчюение/включение звука
checkboxSound.addEventListener('change', sound); // обрабочик события нажатия на чек бокс

function sound() {
    if (checkboxSound.checked) {
        soundOn();
      } else {
        soundOff();
      }
}
//функция включения включения звука уведомления
function soundOn() {
    const audio = new Audio();
    audio.src = 'sound/incoming.mp3';
    audio.autoplay = true;
}
//функция отключение звука уведомления
function soundOff() {
    const audio = new Audio();
    audio.src = 'sound/incoming.mp3';
    audio.pause();
}

// функция включение при запуске чата
function soundOne() {
    const audio = new Audio();
    audio.src = 'sound/beginning.mp3';
    audio.autoplay = true;
}

// ------------------первое информационное сообщение бота-----------------
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
    soundOne(); //функция проигрывания мелоии при вкюченние чата
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
        div.innerHTML = botOneimgArr.join(''); // выводит все стикеры
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
    sound();
    div.className = "main__mess"; // присвоение новому элементу класс main__mess
    Message.append(div); // добавить блок с сообщениеем - последним
    block.scrollTop = block.scrollHeight; // прокрутка блока до самого низа
    document.getElementById('main__input').value = ''; // очистка поля ввода от текста после отправки сообщения пользователем (работает не так как нужно т.к. когда она стояла в функции вывода сообщения пользователя она стила сообщение и я не мог взять от туда данные), не работает если просто указать переменную userMessage, поэтому пришлось искать элемент заново   
}

// -------------- Изменение светлой темы на тёмную с помощью переключателя.
const checkboxTheme = document.getElementById("profile__checkbox-theme");
const root = document.querySelector(':root');

checkboxTheme.addEventListener('change', function() {
  if (this.checked) {
    root.style.setProperty('--bg-color', '#011627');
    root.style.setProperty('--bg-colorInput', '#504f4f');
    root.style.setProperty('--bg-colorMes', '#06adfa');
    root.style.setProperty('--text-colorMes', '#000');
    root.style.setProperty('--text-color', '#fff');
    root.style.setProperty('--text-colorUser', '#fff');
    root.style.setProperty('--text-colorHover', '#66686d');
    root.style.setProperty('--text-color-online', 'yellow');
    root.style.setProperty('--text-color-unread', 'red');
    root.style.setProperty('--border-color', '#fff');
    root.style.setProperty('--bg-images-back', 'url(../img/messenger/background.jpg)');
  } else {
    root.style.setProperty('--bg-color', '#fff');
    root.style.setProperty('--bg-colorInput', '#F5F5F5');
    root.style.setProperty('--bg-colorMes', '#84d2f7');
    root.style.setProperty('--text-colorMes', '#000');
    root.style.setProperty('--text-color', '#011627');
    root.style.setProperty('--text-colorUser', '#707991');
    root.style.setProperty('--text-colorHover', '#F5F5F5');
    root.style.setProperty('--text-color-online', '#3bbb00');
    root.style.setProperty('--text-color-unread', '#011627');
    root.style.setProperty('--border-color', '#D9DCE0');
    root.style.setProperty('--bg-images-back', 'url(../img/messenger/background-5.jpg)');
  }
});
// ------выпадающее меню с найтроками уведомления и темой--------------

const settings = document.getElementById('button__settings'); // переменная - событие отправки, при нажати на кнопку
settings.addEventListener('click', butSettings); // обработчик события нажатии на кнопку

// событие когда форма теряет фокус
// settings.addEventListener('focusout', function (event) {
//     document.querySelector('.profile__settings').style.display = 'none';
// });

function butSettings() { 
    let sm = document.querySelector('.profile__settings').style;
    if (sm.display === 'block') { // если не скрытый, то скрывает его
        sm.display = 'none'; 
    } 
    else {
        sm.display = 'block';
    }
}

//--------------- смайлы------------------
// событие нажатия на кнопку смайлы
const smile = document.getElementById('button_smile'); // переменная - событие отправки, при нажати на кнопку
smile.addEventListener('click', smileFuc); // обработчик события нажатии на кнопку

// // событие когда форма теряет фокус
// smile.addEventListener('focusout', function (event) {
//     document.querySelector('.main__wripper-smile').style.display = 'none';
// });

//срабатые когда нажимаю на кнопку со смайлами - показывает доступные смайлы
function smileFuc() {
    let sm = document.querySelector('.main__wripper-smile').style;
    if (sm.display === 'block') { // если не скрытый, то скрывает его
        sm.display = 'none'; 
    } 
    else {
        sm.display = 'block';
    }
}

const smile1 = document.getElementById('button_smile_1'); // переменная - событие отправки, при нажати на кнопку
smile1.addEventListener('click', smile_1); // обработчик события нажатии на кнопку

function smile_1() {
    let userMessage = document.getElementById('main__input');
    userMessage.value = userMessage.value + '😀';
};

const smile2 = document.getElementById('button_smile_2'); // переменная - событие отправки, при нажати на кнопку
smile2.addEventListener('click', smile_2); // обработчик события нажатии на кнопку

function smile_2() {
    let userMessage = document.getElementById('main__input');
    userMessage.value = userMessage.value + '😂';
};

const smile3 = document.getElementById('button_smile_3'); // переменная - событие отправки, при нажати на кнопку
smile3.addEventListener('click', smile_3); // обработчик события нажатии на кнопку

function smile_3() {
    let userMessage = document.getElementById('main__input');
    userMessage.value = userMessage.value + '😉';
};

const smile4 = document.getElementById('button_smile_4'); // переменная - событие отправки, при нажати на кнопку
smile4.addEventListener('click', smile_4); // обработчик события нажатии на кнопку

function smile_4() {
    let userMessage = document.getElementById('main__input');
    userMessage.value = userMessage.value + '😋';
};

const smile5 = document.getElementById('button_smile_5'); // переменная - событие отправки, при нажати на кнопку
smile5.addEventListener('click', smile_5); // обработчик события нажатии на кнопку

function smile_5() {
    let userMessage = document.getElementById('main__input');
    userMessage.value = userMessage.value + '💩';
};

const smile6 = document.getElementById('button_smile_6'); // переменная - событие отправки, при нажати на кнопку
smile6.addEventListener('click', smile_6); // обработчик события нажатии на кнопку

function smile_6() {
    let userMessage = document.getElementById('main__input');
    userMessage.value = userMessage.value + '😳';
};

const smile7 = document.getElementById('button_smile_7'); // переменная - событие отправки, при нажати на кнопку
smile7.addEventListener('click', smile_7); // обработчик события нажатии на кнопку

function smile_7() {
    let userMessage = document.getElementById('main__input');
    userMessage.value = userMessage.value + '🙃';
};

const smile8 = document.getElementById('button_smile_8'); // переменная - событие отправки, при нажати на кнопку
smile8.addEventListener('click', smile_8); // обработчик события нажатии на кнопку

function smile_8() {
    let userMessage = document.getElementById('main__input');
    userMessage.value = userMessage.value + '😉';
};

const smile9 = document.getElementById('button_smile_9'); // переменная - событие отправки, при нажати на кнопку
smile9.addEventListener('click', smile_9); // обработчик события нажатии на кнопку

function smile_9() {
    let userMessage = document.getElementById('main__input');
    userMessage.value = userMessage.value + '😘';
};

const smile10 = document.getElementById('button_smile_10'); // переменная - событие отправки, при нажати на кнопку
smile10.addEventListener('click', smile_10); // обработчик события нажатии на кнопку

function smile_10() {
    let userMessage = document.getElementById('main__input');
    userMessage.value = userMessage.value + '😪';
};

const smile11 = document.getElementById('button_smile_11'); // переменная - событие отправки, при нажати на кнопку
smile11.addEventListener('click', smile_11); // обработчик события нажатии на кнопку

function smile_11() {
    let userMessage = document.getElementById('main__input');
    userMessage.value = userMessage.value + '😴';
};

const smile12 = document.getElementById('button_smile_12'); // переменная - событие отправки, при нажати на кнопку
smile12.addEventListener('click', smile_12); // обработчик события нажатии на кнопку

function smile_12() {
    let userMessage = document.getElementById('main__input');
    userMessage.value = userMessage.value + '🤢';
};

const smile13 = document.getElementById('button_smile_13'); // переменная - событие отправки, при нажати на кнопку
smile13.addEventListener('click', smile_13); // обработчик события нажатии на кнопку

function smile_13() {
    let userMessage = document.getElementById('main__input');
    userMessage.value = userMessage.value + '🥳';
};

const smile14 = document.getElementById('button_smile_14'); // переменная - событие отправки, при нажати на кнопку
smile14.addEventListener('click', smile_14); // обработчик события нажатии на кнопку

function smile_14() {
    let userMessage = document.getElementById('main__input');
    userMessage.value = userMessage.value + '😎';
};

const smile15 = document.getElementById('button_smile_15'); // переменная - событие отправки, при нажати на кнопку
smile15.addEventListener('click', smile_15); // обработчик события нажатии на кнопку

function smile_15() {
    let userMessage = document.getElementById('main__input');
    userMessage.value = userMessage.value + '😡';
};

const smile16 = document.getElementById('button_smile_16'); // переменная - событие отправки, при нажати на кнопку
smile16.addEventListener('click', smile_16); // обработчик события нажатии на кнопку

function smile_16() {
    let userMessage = document.getElementById('main__input');
    userMessage.value = userMessage.value + '💋';
};

const smile17 = document.getElementById('button_smile_17'); // переменная - событие отправки, при нажати на кнопку
smile17.addEventListener('click', smile_17); // обработчик события нажатии на кнопку

function smile_17() {
    let userMessage = document.getElementById('main__input');
    userMessage.value = userMessage.value + '💣';
};

const smile18 = document.getElementById('button_smile_18'); // переменная - событие отправки, при нажати на кнопку
smile18.addEventListener('click', smile_18); // обработчик события нажатии на кнопку

function smile_18() {
    let userMessage = document.getElementById('main__input');
    userMessage.value = userMessage.value + '👌';
};

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// добавить ответы на смайлики и сами смайлы в сообщения
// проверить нажимается на мобильке кнопка с первого раза или снвоа изменять https://www.cyberforum.ru/javascript/thread2315503.html
// смайлы сами не сворачивают и меню, не получилось этого сделать при потере фокуса. 
//и сократить код для смайлов + добавить больше
//ajax читать, чтобы сделать полноценный онлайн чат
// реализовать функцию переключения между пользователя и начала чата с ними.
// добавить изменение галочки со временем


// добавить функцию поиска не только по точной фразе и но части предложения, чтоб увеличить словарный запас
//добавить сценарий в виде ветвления.
// добавить функцию самообучения бота - добавить команду !команда, котое будет вызывать алерт в который добавить фразу и ответ к ней. 
// Далее добавить, чтобы лог записывался и добавлялся в массив с новыми фразами, скорей всего не обойтись без сервера иначе после каждого обновления станицы всё будет пропадать. (node js и msql) или добавить куки для сохранения данных при перезагрузки страницы
