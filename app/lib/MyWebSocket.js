'use strict';

class MyWebSocket {

    constructor(url, receiveMessage) {
        this.url = url;
        this.receiveMessage = receiveMessage;
        this._ws = new WebSocket(this.url);
    }

    init() {
        this._ws.onopen = () => {
        };
        this._ws.onmessage = (e) => {
            if (!(e.data instanceof ArrayBuffer) && !(/^\d+$/).test(e.data)) {
                let message = JSON.parse(e.data);
                this.receiveMessage(message);
            }
        };
        this._ws.onerror = (e) => {
            console.log(e.message);
        };
        this._ws.onclose = (e) => {
            console.log(e.code, e.reason);
        };
    };

    sendMessage(message) {
        this._ws.send(message);
    };
}

export default MyWebSocket;
