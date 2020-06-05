import React, {useState,useContext,useEffect} from 'react';
import {Context as AppContext} from '../context/AppContext'
import {Context as listMangaContext} from '../context/MangaListContext'
import SearchBar from '../components/SearchBar'
import ResultList from '../components/ResultList'
import { View, Text, StyleSheet,ScrollView,ActivityIndicator } from 'react-native'; 


const FindScreen = ({navigation}) => { 
  const [term,setTerm] = useState('')
  const {state,getManga} = useContext(AppContext)
  const {stateList,saveManga} = useContext(listMangaContext)

  
  return ( 
    <>
   

    <SearchBar term={term}
    onTermChange={setTerm}
    onTermSubmit={()=>getManga({manga:term})}/>
   {state.mangaSearch?<ResultList navigation={navigation} add={false} saveManga ={saveManga} results={state.mangaSearch}/>:<ActivityIndicator size="large" color="#F0EEEE" />}
   
    </>
)};

const styles = StyleSheet.create({});

export default FindScreen;
