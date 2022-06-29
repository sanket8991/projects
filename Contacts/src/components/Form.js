import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

const Form= function({onSubmit, initialValues}) {
    const [name, setName] = useState(initialValues.name);
    const [contact,setContact] = useState(initialValues.contact);
    const [email, setEmail] = useState(initialValues.email);

    return(
    <View>
    <Text style = {styles.label}>Enter Name</Text>
    <TextInput 
        style = {styles.input} 
        value ={name}
        onChangeText = {(text) => setName(text)}
    />
    <Text style = {styles.label}>Enter Contact</Text>
    <TextInput 
        style = {styles.input} 
        value ={contact}
        keyboardType= "phone-pad"
        onChangeText = {(text) => setContact(text)}
    />

    <Text style = {styles.label}>Enter Email</Text>
    <TextInput 
        style = {styles.input} 
        value ={email}
        keyboardType= "email-address" 
        onChangeText = {(text) => setEmail(text)}
    />

    <Button 
        title='save'
        onPress={() => onSubmit(name,contact,email)}
    />

    </View>
    )
};

Form.defaultProps = {
    initialValues: {name:'', contact:'',email:''}
};



const styles = StyleSheet.create({
    label:{
        fontSize:20,
        marginBottom:10,
        marginLeft:5
    },

    input:{
        fontSize:18,
        borderWidth:1,
        borderColor: 'black',
        marginBottom:15,
        padding:5,
        margin:5

    }
});


export default Form;

