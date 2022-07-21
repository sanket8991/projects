import React from 'react';
import { fireEvent, render} from '@testing-library/react-native';
import SearchBar from '../searchBar';

test('it should change the text entered in the search bar', () => {
    const onChangeTextMock = jest.fn();
    const {getByTestId} = render(<SearchBar passedProp='yes' onTermChange={onChangeTextMock} />);


    expect(getByTestId("searchInput").props).toEqual(
        expect.objectContaining({
            passedProp:'yes'
        })
    );

    fireEvent.changeText(getByTestId("searchInput"), "testing!")
    expect(onChangeTextMock).toHaveBeenCalled();
    expect(onChangeTextMock).toHaveBeenCalledWith("testing!");

});

