import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// components
import Unboarding from './screens/HelloWorldApp'
import Signup from './screens/SignIn'
import Welcome from './screens/WelcomeScreen'
import Catelog from './screens/Catelog'
import Reminders from './screens/Reminders'
import Home from './screens/Home'

const { Navigator, Screen } = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='unboarding' screenOptions={{ headerShown: false }}>
        <Screen name='unboarding' component={Unboarding} />
        <Screen name='signup'  component={Signup}/>
        <Screen name='welcomescreen'  component={Welcome}/>
        <Screen name='catelog' component={Catelog}/>
        <Screen name='reminders' component={Reminders}/>
        <Screen name='home' component={Home}/>
        
      </Navigator>
    </NavigationContainer>
  )
}

export default App