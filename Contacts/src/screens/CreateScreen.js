import React, {useEffect} from 'react';
import { Alert,Button} from 'react-native';
import Form from '../components/Form';
import {addContact} from '../redux/contactSlice';
import {useDispatch} from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';

const CreateScreen = function({}){
    const dispatch = useDispatch();
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return(
        
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

        }}/>
        

    )
};

export default CreateScreen;
