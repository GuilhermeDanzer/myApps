import React, {useState} from 'react'; 
import { View, TextInput, StyleSheet} from 'react-native'; 
import {Feather} from '@expo/vector-icons'

const SearchBar = ({term,onTermChange,onTermSubmit}) => { 
  console.log(term)
  return ( 
   <View style={styles.viewStyle}>
     <Feather name='search' style={styles.iconStyle}/> 
     <TextInput
     onEndEditing={()=>onTermSubmit()}
     autoCorret={false}
     style={styles.inputStyle}
     placeholder='Procurar'
     value={term}
     onChangeText={newTerm=>onTermChange(newTerm)}
     />
   </View>
)};

const styles = StyleSheet.create({
  viewStyle:{
    backgroundColor:'#F0EEEE',
    height:40,
    borderRadius:5,
    marginTop:10,
    marginHorizontal:15,
    flexDirection:"row",
    marginBottom:10
  },
  inputStyle:{
    flex:1,
    fontSize:18
  },
  iconStyle:{
    fontSize:35,
    alignSelf:'center',
    marginHorizontal:10
  }
});

export default SearchBar;
