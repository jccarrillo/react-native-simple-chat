import React from 'react';
import { StyleSheet, Text } from 'react-native';

class Message extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text
                style={ [styles.message, this.props.align === 'left' ? styles.messageLeft : styles.messageRight] }>
                { this.props.text.trim() }
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    message: {
        textAlign: 'left',
        borderWidth: 0,
        borderRadius: 12,
        padding: 8,
        overflow: 'hidden',
        marginBottom: 5,
        maxWidth: 200
    },
    messageLeft: {
        backgroundColor: '#CDCFD0'
    },
    messageRight: {
        backgroundColor: 'rgb(0, 122, 255)',
        color: 'white'
    }
});

export {
    Message
};
