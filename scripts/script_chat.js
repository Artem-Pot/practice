 const Message = document.querySelector('.message__output'); // поле с сообщениями

// событие нажатия на кнопку
const submit = document.getElementById('button__input'); // пернеменная - событие отправки, при нажати на кнопку
submit.addEventListener('click', textInput); // обработчик события нажатии на кнопки


// ------------------первое сообщение бота при загрузке страницы------------------

// массив для рандомной выдачи первого сообщения бота
const botOneMessagesArr = [
'Как ты меня нашёл кожаный мешок?', 
'Ты тот о ком я думаю?', 
'Зачем ты здесь?', 
'Что такое 010101010001?', 
'Ты точно робот?', 
'Ты точно робот? Докажи.', 
'Ты точно робот? А то ходят тут всякие.', 
'Ты точно робот? Хм....', 
'Ты точно робот? Ага, ага.', 
'Ты робот или кожаный мешок?',
'Ты робот или нет?',
]; 

function textOneBot() { 
    const ran = Math.round(Math.random()*10);           // рандомная функция * 10 (для выдачи от 0 до 9 )
    const div = document.createElement('div');          // создание нового diva
    div.className = "message__bot";                     // присвоение новому элементу класс message__bot
    Message.append(div);                                // добавить блок с сообщениеем - последним
    div.innerHTML = botOneMessagesArr[ran];             // создание первого рамдомного сообщения ботом
}

// массив для рандомной выдачи изображений бендера
const botOneimgArr = [
'<img height="60" src="img/chat-bot/bender.png">', 
'<img height="60" src="img/chat-bot/bender2.png">', 
'<img height="60" src="img/chat-bot/bender3.png">', 
'<img height="60" src="img/chat-bot/bender4.png">', 
'<img height="60" src="img/chat-bot/bender5.png">', 
'<img height="60" src="img/chat-bot/bender6.png">', 
'<img height="60" src="img/chat-bot/bender7.png">', 
'<img height="60" src="img/chat-bot/bender8.png">', 
'<img height="60" src="img/chat-bot/bender9.png">', 
'<img height="60" src="img/chat-bot/bender10.png">',
'<img height="60" src="img/chat-bot/bender.png">',
]; 

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

// -------сообщения бота---------------
// массив для рандомной выдачи сообщения бота
const botMessagesArr = [
'уууу, да ты что', 
'кто ты по жизни?', 
'ну ни чего себе, какие познания', 
'сам то кем будешь?', 'ну вот и всё..', 
'есть чо?', 
'нуу уж нет', 
'нет так нет', 
'ага', 
'ага ,как же',
'а сам то как думаешь?',
]; 

// сообщение бота
function textBot() {  
    const ran = Math.round(Math.random()*10); // рандомная функция * 10 (для выдачи от 0 до 9 )
    const div = document.createElement('div'); // создание нового diva
    const userMessage = document.getElementById('message__input').value; // поиск текста в форме сообщения пользователя
    const letterСase = userMessage.trim().toLowerCase(); // перевод сообщения в нижний регистр для исключения задваивания условий с верхним и нижним регистром и удаление лишних пробелов с обоих концов

     if (letterСase  === 'привет' || letterСase  === 'здарова' || letterСase === 'здравствуй' || letterСase  === 'здрасти' || letterСase  === 'здарова') {          // находит искомое слово введеное пользователем
        div.innerHTML = 'Привет, как дела?'; // вывод сообщения бота
      }

    else if (letterСase === 'ты кто?' || letterСase === 'ты кто' || letterСase === 'кто ты' || letterСase === 'кто ты?'){
        div.innerHTML = 'а ты кто по жизни?';
    }

    else if (letterСase === 'как дела?' || letterСase === 'как дела'){
        div.innerHTML = 'Нормально дела, а что?';
    }

    else if (letterСase === 'как тебя зовут?' || letterСase === 'как тебя зовут'){
        div.innerHTML = 'Меня зовут Бендер, а тебя ?';
    }
    
    else {
        div.innerHTML = botMessagesArr[ran]; // сообщение бота взятое из массива с помощью рандомной команды
    }

    div.className = "message__bot";         // присвоение новому элементу класс message__bot
    Message.append(div);                    // добавить блок с сообщениеем - последним
    document.getElementById('message__input').value = ''; // очистка поля ввода от текста после отправки сообщения пользователем (работает не так как нужно т.к. когда она стояла в функции вывода сообщения пользователя она стила сообщение и я не мог взять от туда данные), не работает если просто указать переменную userMessage, поэтому пришлось искать элемент заново
    const block = document.getElementById("placehere"); // прокрутка сообщения в блоке сообщений
    block.scrollTop = block.scrollHeight; // прокрутка блока до самого низа
}
