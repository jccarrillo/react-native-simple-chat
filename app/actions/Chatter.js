import MyWebSocket from '../lib/MyWebSocket';

class Chatter {

    constructor(receiveMessage) {
        this.myWebSocket = new MyWebSocket('wss://remy-ws.glitch.me/', receiveMessage);
        this.myWebSocket.init();
    }

    sendMessage(message, cb) {
        this.myWebSocket.sendMessage(message);
        cb();
    }

    static createMessage(sender, message) {
        return { who: sender, what: message };
    }

    static isMe(message) {
        return message.who === 'me';
    }

    static getMessage(message) {
        return message.what;
    }
}

export {
    Chatter
};
