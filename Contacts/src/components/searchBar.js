import React from 'react';
import {View,TextInput,StyleSheet} from 'react-native';

const SearchBar = function({term,onTermChange}){
    return(
        <View style= {styles.background}>
            <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            placeholder= 'Search name...'
            value={term}
            onChangeText = {newTerm => onTermChange(newTerm)}
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

export default SearchBar;
