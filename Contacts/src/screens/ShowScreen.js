import React, {useContext} from 'react';

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {Context} from '../context/ContactContext';

import { Feather } from '@expo/vector-icons';

const ShowScreen = function({navigation}){

    const {state} = useContext(Context);

    const contactInfo = state.find((contact) => contact.id === navigation.getParam('id'));

    console.log(contactInfo);
    return(
        <View>
            <Text style= {styles.text}>Person- {contactInfo.name}</Text>
            <Text style= {styles.text}>Contact- {contactInfo.contact}</Text>
            <Text style= {styles.text}>Email- {contactInfo.email}</Text>

        </View>
    )
};

ShowScreen.navigationOptions = ({navigation}) => {
    return{
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', {id : navigation.getParam('id')})}>
                <Feather name="edit-2" size={30} color="black" />
            </TouchableOpacity>
        ),
    };
}


const styles = StyleSheet.create({
    text:{
        fontSize:24,
        paddingVertical:20,
        paddingHorizontal:10,
        borderTopWidth:1,
        borderColor:'grey'
    }

});




export default ShowScreen;


