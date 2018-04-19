import React from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { Chatter } from "../actions/Chatter";
import { Message } from "./Message";

class Messages extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={ [styles.content, this.props.style] }
                        ref={ ref => this.scrollView = ref }
                        eyboardDismissMode='interactive'
                        onContentSizeChange={ (width, height) => {
                            this.scrollView.scrollToEnd();
                        } }>

                {
                    this.props.messages.length > 0 ? this.props.messages.map((message, index) => (
                            <View key={ index }
                                  style={ Chatter.isMe(message) ? styles.messageRight : styles.messageLeft }>
                                <Message text={ Chatter.getMessage(message) }
                                         align={ Chatter.isMe(message) ? 'right' : 'left' }/>
                            </View>
                        )
                    ) : null
                }
            </ScrollView>
        );
    }
}

const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    content: {
        position: 'absolute',
        top: 90,
        left: 0,
        right: 0,
        padding: 20,
        height: height - 90 - 70,
        backgroundColor: "#ffffff"
    },
    messageLeft: {
        alignItems: 'flex-start'
    },
    messageRight: {
        alignItems: 'flex-end'
    }
});

export {
    Messages
};
