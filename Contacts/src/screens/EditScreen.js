import React from 'react';
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
            dispatch(editContact({id, name,contact,email}));

        }}
        />
    )

};

export default EditScreen;