import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Provider as AppContext} from './src/context/AppContext'
import {Provider as ListManga} from './src/context/MangaListContext'
import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/LoginScreen'
import DetailScreen from './src/screens/DetailScreen'
import FindScreen from './src/screens/FindScreen'
import React from 'react'
import { MaterialIcons,AntDesign } from '@expo/vector-icons'

const switchNavigator = createSwitchNavigator(
 { 
  // loginFlow: createStackNavigator({
    //Login: LoginScreen
    //Register: RegisterScreen
   //}),
   mainFlow:createBottomTabNavigator({

    Home:{
      screen:createStackNavigator({
        Home:HomeScreen,
        Detail:DetailScreen
      },
      //StackNavigator style
      {
        defaultNavigationOptions: {
          cardStyle: { backgroundColor: '#181818' },
        }
      }
      ),
      navigationOptions:{
        tabBarLabel:'Livros',
        tabBarIcon:({tintColor}) =>(<MaterialIcons color={tintColor} size={30} name='book'/>)
      }
    },




    Find:{ 
      //BottomTab Find
      screen:createStackNavigator({
        Find:FindScreen
      },
      
      {
        defaultNavigationOptions:{
          cardStyle:{backgroundColor:'#171717'}
        }
      }
      ),
      navigationOptions:{
        tabBarLabel:'Descobrir',
        tabBarIcon:({tintColor})=>(<MaterialIcons color={tintColor} size={30} name="search"/>)
      }
    }
    ,
      },
      //Style da BottomTab
      {
        tabBarOptions: {
          labelStyle:{
            fontSize:13
          },
          activeTintColor: '#FDFDFD',
          inactiveTintColor: '#888888',
          activeBackgroundColor: 'black',
          inactiveBackgroundColor: 'black'
        }
      },
      {
        defaultNavigationOptions: {
          cardStyle: { backgroundColor: '#171717' },
        }

  },
  
)}
)

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <ListManga>
    <AppContext>
      <App />
    </AppContext>
    </ListManga>
  )
}