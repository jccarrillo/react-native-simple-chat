import React from 'react';
import { Message } from './Message';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<Message text={ 'hello' }/>).toJSON();
    expect(tree).toMatchSnapshot();
});
