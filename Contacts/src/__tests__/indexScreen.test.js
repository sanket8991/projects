import React from 'react';
import IndexScreen from "../screens/IndexScreen";
import {render, fireEvent} from '@testing-library/react-native';
import store from '../redux/store';
import {Provider} from 'react-redux';

test('should render the screen properly', () => {
    const {toJSON} = render(<Provider store = {store}><IndexScreen/></Provider>)
    expect(toJSON()).toMatchSnapshot();
})
test('testing the delete icon', () => {
    const {getByTestId} = render(<Provider store = {store}><IndexScreen/></Provider>);
    const onPressMock = jest.fn();

    const foundIcon = getByTestId("deleteIcon");
    expect(foundIcon).toBeTruthy();
    fireEvent.press(foundIcon);
    
    
});