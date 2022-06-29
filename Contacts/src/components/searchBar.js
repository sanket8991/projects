import React from 'react';
import {View,TextInput,StyleSheet} from 'react-native';

const searchBar = function({term,onTermChange,onTermSubmit}){
    return(
        <View>
            <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            placeholder= 'Search...'
            value={term}
            onChangeText = {newTerm => onTermChange(newTerm)}
            onEndEditing = {() => onTermSubmit()}
            />
                
        </View>
    )
};

const styles = StyleSheet.create({
    background:{
        marginTop:10,
        backgroundColor:'#D7D7D7',
        height:50,
        borderRadius:5,
        marginHorizontal:10,
        flexDirection:'row',
        maginBottom:10
    }
});

export default searchBar;

// implementation pending