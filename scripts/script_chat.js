 const Message = document.querySelector('.message__output'); // поле с сообщениями

// событие нажатия на кнопку
const submit = document.getElementById('button__input'); // событие отправка, при нажати на кнопку
submit.addEventListener('click', textInput); // обработчик события нажатии на кнопки


// -------сообщение пользвователя---------------
function textInput() {                                   
    const userMessage = document.getElementById('message__input').value; // поиск текста в форме сообщения пользователя
    const div = document.createElement('div'); // создание нового diva

    div.className = "message__users"; // присвоение новому элементу класс message__users
    Message.append(div); // добавить блок с сообщениеем - последним
    div.innerHTML = userMessage; // вывод сообщения пользователя
    setTimeout(() => {  textBot(); }, 1000); // функция задержки вывода сообщения бота мсек
    
}

// -------сообщения бота---------------
// массив для рандомной выдачи сообщения
let botMessagesArr = ['уууу, да ты что', 
'кто ты по жизни?', 
'ну ни чего себе, какие познания', 
'сам то кем будешь?', 'ну вот и всё..', 
'есть чо?', 
'нуу уж нет', 
'нет так нет', 
'ага', 
'ага ,как же']; 


// function textBot() {  
//     const ran = Math.round(Math.random()*10); // рандомная функци * 10 (для выдачи от 0 до 9 )
//     const div = document.createElement('div'); // создание нового diva

//     div.className = "message__bot"; // присвоение новому элементу класс message__bot
//     div.innerHTML = botMessagesArr[ran]; // сообщение бота взятое из массива с помощью рандомной команды
//     Message.append(div); // добавить блок с сообщениеем - последним
// }



function textBot() {  
    const ran = Math.round(Math.random()*10); // рандомная функци * 10 (для выдачи от 0 до 9 )
    const div = document.createElement('div'); // создание нового diva
    const userMessage = document.getElementById('message__input').value; // поиск текста в форме сообщения пользователя

     if (userMessage == 'Привет' || userMessage == 'привет' || userMessage == 'здарова' || userMessage == 'Здарова' || userMessage == 'Здравствуй' || userMessage == 'Здрасти' || userMessage == 'здравствуй' || userMessage == 'здрасти' || userMessage == 'здарова') {          // находит искомое слово введеное пользователем
        div.innerHTML = 'Привет, как дела?'; // вывод сообщения бота
      }

    else if (userMessage == 'ты кто?' || userMessage == 'ты кто' || userMessage == 'кто ты' || userMessage == 'Кто ты' || userMessage == 'кто ты?' || userMessage == 'Кто ты?'){
        div.innerHTML = 'а ты кто по жизни?';
    }

    else if (userMessage == 'как дела?' || userMessage == 'как дела' || userMessage == 'Как дела?' || userMessage == 'Как дела'){
        div.innerHTML = 'Нормально дела, а что?';
    }

    else if (userMessage == 'как тебя зовут?' || userMessage == 'Как тебя зовут?' || userMessage == 'как тебя зовут' || userMessage == 'Как тебя зовут'){
        div.innerHTML = 'Меня зовут Бендер, а тебя ?';
    }
    
    else {
        div.innerHTML = botMessagesArr[ran]; // сообщение бота взятое из массива с помощью рандомной команды
    }

    div.className = "message__bot";         // присвоение новому элементу класс message__bot
    Message.append(div);                    // добавить блок с сообщениеем - последним
    document.getElementById('message__input').value = ''; // очистка поля ввода от текста после отправки сообщения пользователем (работает не так как нужно т.к. когда она стояла в функции вывода сообщения пользователя она стила сообщение и я не мог взять от туда данные), не работает если просто указать переменную userMessage, поэтому пришлось искать элемент заново
}
