import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button,Image,Alert, ScrollView} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const Form= function({onSubmit, initialValues}) {
    const [name, setName] = useState(initialValues.name);
    const [contact,setContact] = useState(initialValues.contact);
    const [email, setEmail] = useState(initialValues.email);
    const [imagePath,setImagePath]= useState(initialValues.imagePath)
    const defaultImage = imagePath ? {uri: imagePath}: require('../../assets/default_contact_image.png')
    const chooseFile = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false){
            Alert.alert('Permission denied','Access to local images is required.')
            return;
        };
        const result = await ImagePicker.launchImageLibraryAsync();

        if (!result.cancelled){
            setImagePath(result.uri)
        }
    };


    return(
    <ScrollView>
        <View>
            <Image source ={defaultImage} style ={styles.ImageStyle} resizeMode='contain'/>
            <Button title='Add your photo' onPress={() => chooseFile()}/> 
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
                onPress={() => onSubmit(name,contact,email,imagePath)}
            />

        </View>
    </ScrollView>
    )
};

Form.defaultProps = {
    initialValues: {name:'', contact:'',email:'',imagePath: ''}
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

    },
    text:{
        alignSelf:'center'
    },
    ImageStyle:{
        height:250,
        width:250,
        borderWidth:1,
        borderRadius:5,
        alignSelf:'center'
    }
});


export default Form;

