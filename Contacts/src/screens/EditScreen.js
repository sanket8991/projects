import React from 'react';
import {Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import { editContact } from '../redux/contactSlice';
import Form from '../components/Form';

const EditScreen = function({navigation}) {
    const id = navigation.getParam('id');
    const value = useSelector((state) => state.contacts);
    const data = value.find((contact) => contact.id === navigation.getParam('id'));
    const dispatch = useDispatch();
    return(
        <Form 
        initialValues = {{name: data.name, contact: data.contact, email:data.email}}

        onSubmit = {(name,contact,email) => {
            if (!name || !contact){
                Alert.alert(message ='the name and contact fields cannot be empty');

            }else if (!Number.isInteger(Number(contact)) || Number(contact) <0){
                Alert.alert(message = 'the contact should contain only numbers')

            }else{
                dispatch(editContact({id, name,contact: String(Number(contact)),email}));;
                Alert.alert(message = 'the contact was saved successfully.')
            }

        }}
        />
    )

};

export default EditScreen;