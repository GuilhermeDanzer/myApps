import React, {useState} from 'react'; 
import { View, Text,Button, StyleSheet, StatusBar} from 'react-native'; 

const LoginScreen = ({navigation}) => { 
  return ( 
    
   <View> 
     <StatusBar hidden />
     <Text>LoginScreen</Text>
      <Button
      title="Home"
      onPress={()=>navigation.navigate('Home')}
      
      />
   </View>
)};


LoginScreen.navigationOptions = {
  headerShown:false
}

const styles = StyleSheet.create({});

export default LoginScreen;
