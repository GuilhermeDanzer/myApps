import React, {useState,useContext,useEffect} from 'react'; 
import { View, Text,FlatList, StatusBar,StyleSheet,Image,ScrollView} from 'react-native'; 
import { Button } from 'react-native-elements';
import {Context as AnimeContext} from '../context/AnimeContext'

const TesteScreen = ({navigation}) => { 
  const {state,getRecomendations} = useContext(AnimeContext)
  const [imagemuri,setImagemUri] = useState(null)
  const [type,setType] = useState('manga')
  const [manga,setManga] = useState(null)
  const [genre,setGenre] = useState(Math.floor(Math.random() *45 ) + 1)
  useEffect(()=>{
    setGenre(Math.floor(Math.random() *45 ) + 1)
    getRecomendations({type,genre})
    getRecomendations({type,genre})
    setManga(state.manga[Math.floor(Math.random() * state.manga.length)])
    console.log(manga)

  },[])
  const buscaManga = () =>{
    setGenre(Math.floor(Math.random() *45 ) + 1)
    getRecomendations({type,genre})

    
    setManga(state.manga[Math.floor(Math.random() * state.manga.length)])

    
    
  }
  

  return ( 
   <View style={{flex:1}}> 
      
      <StatusBar hidden/>
     {manga?
     
     <View style={{flex:1}}>

    <Text style={styles.title}>{manga.title}   ({manga.score?manga.score:'N/A'})</Text>

      <View style={styles.imagemContainer}> 
        <Image style={styles.imagem} source={{uri:manga.image_url}}/> 
      </View>
     
        <View style={{flex:1}}>
        <ScrollView>
          <View style={styles.info}> 
         
            <Text style={styles.desc}>{manga.synopsis}</Text>
        
            
          </View>
       
          </ScrollView>
        </View>
       
     </View>
   
     :
     
     
     
     null}
     <View style={styles.buttonContainer}>
        <Button title="Buscar mangá aleatório"
        style={styles.button}
      onPress={buscaManga}
      />
  
     </View>
      
     
     
   </View>

)};

TesteScreen.navigationOptions = {
  headerShown: false
}
const styles = StyleSheet.create({
  button:{

  },
  buttonContainer:{
    justifyContent:'center',
    marginLeft:10,
    flexDirection:'row'
  },
  desc:{
    marginLeft: 20,
    flexWrap:'wrap',
  },
  info:{
    height:'100%',
    width:'100%'
  },
  title:{
    fontSize:18,
    marginVertical:10,
    textAlign:'center'
  },
  imagemContainer:{
    flex:1,
    borderWidth:1,
    borderColor:'red',
    marginHorizontal:100,
    width: 200,
    height: '70%',
    overflow: 'hidden'
  },
  imagem:{
    width:'100%',
    height:'100%'

  }
});

export default TesteScreen;
