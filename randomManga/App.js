import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Provider as AnimeProvider} from './src/context/AnimeContext'
import TesteScreen from './src/screens/TesteScreen'
import React from 'react'


const switchNavigator = createStackNavigator(
  {
    Teste:TesteScreen,


      },
      {
        defaultNavigationOptions: {
          cardStyle: { backgroundColor: '#FFFFFF' },
        }
  }
)


const App = createAppContainer(switchNavigator)

export default () => {
  return (

    <AnimeProvider>
      <App />
    </AnimeProvider>
  )
}