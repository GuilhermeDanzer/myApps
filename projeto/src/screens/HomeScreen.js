import React, {useState,useContext,useEffect} from 'react';
import {Context as ListContext} from '../context/MangaListContext'
import { View, Button,Text, SafeAreaView ,ScrollView,StyleSheet,TouchableOpacity} from 'react-native'; 
import ResultList from '../components/ResultList'
const HomeScreen = ({navigation}) => { 

  const {state,deleteManga} = useContext(ListContext)
  return ( 
    <>

      <ResultList navigation={navigation} deleteManga ={deleteManga} add={true} saveManga ={null} results={state}/>
   
    </>
   /*<SafeAreaView  style={styles.container}> 
    <View style={styles.bookAll}>
      <View style={styles.bookImg}>
        <Text>Teste</Text>
      </View>
      <View style={styles.bookContent}>
        <TouchableOpacity
        onPress={()=>getManga({manga})}
        >
          <View style={styles.bookName}>
            <Text style={styles.bookNameText}></Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
   </SafeAreaView >*/
   
)};


const styles = StyleSheet.create({
  container:{
    flex:1,
  
  },
  bookAll:{
    marginHorizontal:10,
    marginVertical:13,
    maxHeight:100,
    flexDirection:'row',
    flex:1,
    borderBottomWidth:3,
    borderBottomColor:'#151515',
    backgroundColor:'#363636',
    borderRadius:5
  },
  bookImg:{
    flex:1,
    backgroundColor:'white',

    maxWidth:100,
    maxHeight:100,
    borderTopLeftRadius:3,
    borderBottomLeftRadius:3
  },
  bookContent:{
    flex:1,
    maxHeight:'100%',
    maxWidth:'100%',
 
  },
  bookName:{
    maxHeight:50,
   
    alignSelf:'flex-start',
    borderWidth:2,
    borderColor:'#FFFFFF',
    borderRadius:15,
    backgroundColor:'#363636',
    marginTop:10,
    marginLeft:5,
    marginBottom:5
  },
  bookNameText:{
    paddingLeft:7,
    paddingBottom:2,
    paddingTop:2,
    paddingRight:10,
    fontSize:15,
    color:'#FFF'
  }
});
export default HomeScreen;
