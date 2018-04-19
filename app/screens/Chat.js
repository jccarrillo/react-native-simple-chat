import React from 'react';
import { Dimensions, Keyboard, StyleSheet, View } from 'react-native';
import { Chatter } from '../actions/Chatter';
import { Messages } from "../components/Messages";
import { MessageTextField } from "../components/MessageTextField";

class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.chatter = new Chatter(this.appendMessage.bind(this));
        this.state = { messages: [Chatter.createMessage('friend', 'Are you there?')] };
        this._keyboardWillShow = this._keyboardWillShow.bind(this);
        this._keyboardWillHide = this._keyboardWillHide.bind(this);
        this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this._keyboardWillShow);
        this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this._keyboardWillHide);
    }

    _keyboardWillShow(e) {
        console.log(e.endCoordinates.height);
        this.setState({
            top: -e.endCoordinates.height / 1.1,
            messagesHeight: 300
        })
    }

    _keyboardWillHide(e) {
        this.setState({ top: 0, messagesHeight: 20 })
    }

    componentWillUnmount() {
        this.keyboardWillShow.remove();
        this.keyboardWillHide.remove()
    }

    /**
     * append message.
     *
     * @param message
     */
    appendMessage(message) {
        this.setState(prevState => ({
            messages: [...prevState.messages, Chatter.createMessage('friend', message)]
        }));
    }

    render() {
        return (
            <View style={ styles.container }>
                <View style={ { top: this.state.top, height: height } }>
                    <Messages style={ { marginTop: this.state.messagesHeight } } messages={ this.state.messages }/>
                    <View style={ styles.footer }>
                        <MessageTextField onSubmit={ (message, cb) => this.chatter.sendMessage(message,
                            () => this.setState(prevState => ({
                                messages: [...prevState.messages, Chatter.createMessage('me', message)]
                            }), cb())
                        ) }/>
                    </View>
                </View>
            </View>
        );
    }
}

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#ffffff'
    },
    footer: { // height: 35 + 35 = 70
        position: 'absolute',
        borderTopWidth: .5,
        borderTopColor: '#888888',
        backgroundColor: "#F9F9F9",
        // top: height - 90 - 70,
        bottom: 1,
        paddingTop: 10,
        left: 0,
        right: 0,
        paddingBottom: 35,
        paddingLeft: 20,
        paddingRight: 20
    }
});

export {
    Chat
};
