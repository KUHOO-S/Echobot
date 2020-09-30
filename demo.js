
var telegram = require('telegram-bot-api')

var api = new telegram({
    token: API_token,
    updates: {
        enabled: true
    }
});

api.getMe()
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.error(err);
    });

api.on('message', function (message) {
    console.log(message); 

    if (message.text === '/start') {

        api.sendMessage({
            chat_id: message.chat.id,
            text: strings.startMessage,
        });

    }
    else if (/hey /i.test(message.text) || /hello /i.test(message.text) || /hi /i.test(message.text)) {
        api.sendDocument(
            {
                chat_id: message.chat.id,
                document: "Hey How are you"
            }
        );
    }
    else if (/love /i.test(message.text)) {
        api.sendMessage(
            {
                chat_id: message.chat.id,
                text: "Spread love hun"
            }
        );
    }
    else {
        api.sendMessage(
            {
                chat_id: message.chat.id,
                text: "Sorry i don't understand"
            }
        );
    }
});