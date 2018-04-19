/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { NavigatorIOS } from 'react-native';
import { Chat } from "./app/screens/Chat";

export default class App extends Component<Props> {
    render() {
        return (
            <NavigatorIOS
                initialRoute={ {
                    component: Chat,
                    title: 'React Native Simple Chat',
                } }
                style={ { flex: 1 } }
            />
        );
    }
}
