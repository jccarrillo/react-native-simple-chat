import React from 'react';

import renderer from 'react-test-renderer';
import { MessageTextField } from "./MessageTextField";

test('renders correctly', () => {
    var text = "hello";
    const tree = renderer.create(<MessageTextField onSubmit={ (message, cb) => {
    } }/>).toJSON();
    expect(tree).toMatchSnapshot();
});
