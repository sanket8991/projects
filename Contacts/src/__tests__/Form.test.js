import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Form from '../components/Form';
import {Alert} from 'react-native';

jest.spyOn(Alert,'alert');
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
test('it renders the screen properly', () => {
    const {toJSON} = render(
    <Form onSubmit = {(name,contact,email,imagePath) => {
        if (!name || !contact){
            Alert.alert('Alert','the name and contact fields cannot be empty');

        }else if (!Number.isInteger(Number(contact)) || Number(contact) < 0){
            Alert.alert('Alert','the contact should contain only numbers')

        }else if (email !== "" && !email.toLowerCase().match(re)){
            Alert.alert('Alert','enter a valid email id');

        }else{
            dispatch(addContact({id:nanoid(), name:name, contact:String(Number(contact)),email:email,imagePath:imagePath}));
            Alert.alert('Alert','the contact was saved successfully.')
        }
    
    }}/>);
    expect(toJSON()).toMatchSnapshot();
});

test('it shows the alert for name and contact', () => {
    const {getByTestId} = render(
    <Form onSubmit = {(name,contact,email,imagePath) => {
        if (!name || !contact){
            Alert.alert('Alert','the name and contact fields cannot be empty');

        }else if (!Number.isInteger(Number(contact)) || Number(contact) < 0){
            Alert.alert('Alert','the contact should contain only numbers')

        }else if (email !== "" && !email.toLowerCase().match(re)){
            Alert.alert('Alert','enter a valid email id');

        }else{
            Alert.alert('Alert','the contact was saved successfully.')
        }
    
    }}/>);
    // for name or contact field being left empty
    const inputName = getByTestId('nameInput');
    const inputContact = getByTestId('contactInput');
    fireEvent.changeText(inputName, 'cat');
    fireEvent.press(getByTestId('submitButton'));
    expect(inputName.props.value).toBe('cat')
    expect(Alert.alert).toHaveBeenCalledWith('Alert','the name and contact fields cannot be empty')


});

test('it shows the alert invalid contact input', () => {
    const {getByTestId} = render(
    <Form onSubmit = {(name,contact,email,imagePath) => {
        if (!name || !contact){
            Alert.alert('Alert','the name and contact fields cannot be empty');

        }else if (!Number.isInteger(Number(contact)) || Number(contact) < 0){
            Alert.alert('Alert','the contact should contain only numbers')

        }else if (email !== "" && !email.toLowerCase().match(re)){
            Alert.alert('Alert','enter a valid email id');

        }else{
            Alert.alert('Alert','the contact was saved successfully.')
        }
    
    }}/>);
    // for name or contact field being left empty
    const inputName = getByTestId('nameInput');
    const inputContact = getByTestId('contactInput');
    fireEvent.changeText(inputName, 'cat');
    fireEvent.changeText(inputContact, '123.123.123')
    fireEvent.press(getByTestId('submitButton'));
    expect(inputName.props.value).toBe('cat')
    expect(Alert.alert).toHaveBeenCalledWith('Alert','the contact should contain only numbers')


});


test('it shows the alert invalid email input', () => {
    const {getByTestId} = render(
    <Form onSubmit = {(name,contact,email,imagePath) => {
        if (!name || !contact){
            Alert.alert('Alert','the name and contact fields cannot be empty');

        }else if (!Number.isInteger(Number(contact)) || Number(contact) < 0){
            Alert.alert('Alert','the contact should contain only numbers')

        }else if (email !== "" && !email.toLowerCase().match(re)){
            Alert.alert('Alert','enter a valid email id');

        }else{
            Alert.alert('Alert','the contact was saved successfully.')
        }
    
    }}/>);
    // for name or contact field being left empty
    const inputName = getByTestId('nameInput');
    const inputContact = getByTestId('contactInput');
    const inputEmail = getByTestId('emailInput');
    fireEvent.changeText(inputName, 'cat');
    fireEvent.changeText(inputContact, '123456');
    fireEvent.changeText(getByTestId("emailInput"), 'someemail')
    fireEvent.press(getByTestId('submitButton'));
    expect(inputName.props.value).toBe('cat')
    expect(Alert.alert).toHaveBeenCalledWith('Alert','enter a valid email id')


});
