var telegram = require('telegram-bot-api')

const API_token= "your token"


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
        console.log(err);
    });


    const mp = new telegram.GetUpdateMessageProvider()

    api.setMessageProvider(mp)
    api.start()
    .then(() => {
        console.log('API is started')
    })
    .catch(console.err)
    
    api.on('update', update => {
        console.log(update);
        console.log(Object.keys(update));
        api.sendMessage(
            {
                chat_id: update.message.chat.id,
                text: 'your message'
            }
        );
        
    }); 
