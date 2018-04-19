import React from 'react';

import renderer from 'react-test-renderer';
import { Messages } from "./Messages";
import { Chatter } from "../actions/Chatter";

test('renders correctly with no message', () => {
    const tree = renderer.create(<Messages style={ { marginTop: '0' } }
                                           messages={ [] }/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders correctly with 1 message', () => {
    const tree = renderer.create(<Messages style={ { marginTop: '0' } }
                                           messages={ [Chatter.createMessage('me', 'hello')] }/>).toJSON();
    expect(tree).toMatchSnapshot();
});
