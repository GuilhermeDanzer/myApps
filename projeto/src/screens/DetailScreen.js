import React, {useState} from 'react'; 
import Moment from 'moment';
import { View, Text, StyleSheet,Image,ScrollView,Icon} from 'react-native'; 
import { NavigationActions } from 'react-navigation'



const DetailScreen = ({navigation}) => { 

  const backAction = NavigationActions.back({
  key: null
}) 

 const manga = navigation.getParam('manga')

 Moment.locale('pt-br')
  return ( 
   
    <View style={{flex:1}}> 

      
      
      <View style={{flex:1}}>
 
     <Text style={styles.title}>{manga.title}   ({manga.score?manga.score:'N/A'})</Text>
 
       <View style={styles.imagemContainer}> 
         <Image style={styles.imagem} source={{uri:manga.image_url}}/> 
       </View>
      
         <View style={{flex:1}}>
           
         
         <ScrollView>
           <View style={styles.info}> 
           <Text style={styles.textLabel}>Capitulos: {manga.chapters}</Text>  
           <Text style={styles.textLabel}>{manga.publishing?'Status: Em andamento':'Status: Concluido'}</Text>
           <Text style={styles.textLabel}>Data de lançamento: {Moment(manga.start_date).format('DD/MM/YYYY')}</Text>
           <Text style={styles.textLabel}>Data de finalização: {manga.end_date?Moment(manga.end_date).format('DD/MM/YYYY'):'--'}</Text>
           <Text style={styles.textLabel}>Sinopse:</Text>
             <Text style={styles.desc}>{manga.synopsis}</Text>
           </View>
        
           </ScrollView>
         </View>
        
      </View>
  
      
    </View>
 
 )};




 const styles = StyleSheet.create({
   textLabel:{
    fontSize:16,
    color:'#F0F2F0',
    marginLeft:20,
    marginVertical:10
   },
   buttonContainer:{
     justifyContent:'center',
     marginLeft:10,
     flexDirection:'row'
   },
   desc:{
    fontSize:16,
    color:'#F0F2F0',
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
     textAlign:'center',
     color:'#F0F2F0'
   },
   imagemContainer:{
     flex:1,
     
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

 export default DetailScreen;