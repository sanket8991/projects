import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import indexScreen from "../screens/indexScreen";
import App from '../../App';

test('can press the delete icon', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(<indexScreen/>);
    console.log(getByTestId("deleteIcon"));
});
