import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

class MessageTextField extends React.Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.props.onSubmit;
        this.state = { value: null };
    }

    render() {
        return (
            <TextInput
                placeholder='Message'
                value={ this.state.value }
                style={ styles.textInput }
                onChangeText={ (text) => this.setState({ value: text }) }
                onSubmitEditing={ (event) => this.onSubmit(event.nativeEvent.text, () => this.setState({ value: null })) }/>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        textAlign: 'left',
        paddingLeft: 10,
        height: 35,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        borderRadius: 20,
        backgroundColor: "#ffffff"
    }
});

export {
    MessageTextField
};
