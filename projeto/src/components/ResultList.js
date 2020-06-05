import React, {useState} from 'react'; 
import { View, Text, StyleSheet,FlatList,Image,TouchableOpacity} from 'react-native'; 
import MaterialIcons from '@expo/vector-icons'

const ResultList = ({navigation,deleteManga,results,add,saveManga}) => { 


  results= results.filter(x=>x)
  return ( 
   <View> 
     <FlatList
     showsVerticalScrollIndicator={false}
     data={results}
     keyExtractor={(results)=>results.mal_id.toString()}
     renderItem={({item})=>{
      

         return (
        <View style={styles.container}>
        <View style={styles.mangaAll}>
        <View style={styles.mangaImg}>
        <Image style={styles.imagem} source={{uri:item.image_url}}/>
        </View>
        <View style={styles.mangaHeader}>
          <TouchableOpacity onPress={()=>navigation.navigate('Detail',{manga:item})} style={styles.nameTouchStyle} >
            <View style={styles.mangaName}>
              <Text numberOfLines={1} style={styles.mangaNameText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
          {add?
          
          <TouchableOpacity onPress={()=>deleteManga({manga:item})} style={styles.plusTouchStyle}>
          <View style={styles.iconView}>
          <Text style={styles.icon}>x</Text>
          </View>
        
          </TouchableOpacity>
          
          :
          <TouchableOpacity onPress={()=>saveManga({manga:item})} style={styles.plusTouchStyle}>
            <View style={styles.iconPlusView}>
            <Text style={styles.iconPlus}>+</Text>
            </View>
          
            </TouchableOpacity>
            }
        
        </View>
        <View style={styles.mangaInfo}>
        <Text></Text>
        </View>

      </View>
      </View>
       )
     }}

     />
   </View>
)};

const styles = StyleSheet.create({
  
  iconView:{
    marginTop:5,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:100,
    width:30,
    height:30,
    borderWidth:3,
    borderColor:'red',
  },
  icon:{
    fontSize:30,
    color:'red',
    marginBottom:7,
    alignSelf:'center'
  },

  nameTouchStyle:{
    flex:9,
    maxHeight:40, 
  },
  plusTouchStyle:{
    flex:1,
    maxHeight:40
  },
  iconPlusView:{
    marginTop:5,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:100,
    width:30,
    height:30,
    borderWidth:3,
    borderColor:'green',
    
  },
  iconPlus:{
    fontSize:35,
    color:'green',
    marginBottom:4,
    alignSelf:'center'
  
  },
  imagem:{
    width:'100%',
    height:'100%'
  },
  container:{
    flex:1,
  
  },
  mangaAll:{
    marginHorizontal:10,
    marginVertical:13,
    maxHeight:100,
    flexDirection:'row',
    flex:1,
    //borderBottomWidth:3,
    //borderBottomColor:'#151515',
    backgroundColor:'#363636',
    borderRadius:5
  },
  mangaImg:{
    flex:1,
    backgroundColor:'white',

    maxWidth:100,
    maxHeight:100,
    borderTopLeftRadius:3,
    borderBottomLeftRadius:3
  },
  mangaHeader:{
    flex:1,
    maxHeight:'100%',
    maxWidth:'100%',
    flexDirection:'row',
    flexWrap:'wrap'
 
 
  },
  mangaName:{
    borderWidth:1,
    borderColor:'green',
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
  mangaNameText:{
    paddingLeft:7,
    paddingBottom:2,
    paddingTop:2,
    paddingRight:10,
    fontSize:15,
    color:'#FFF'
  }
});

export default ResultList;
