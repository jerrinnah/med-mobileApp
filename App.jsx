import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// components
import Unboarding from './screens/HelloWorldApp'
import Signup from './screens/SignIn'
import Welcome from './screens/WelcomeScreen'
import Catelog from './screens/Catelog'

const { Navigator, Screen } = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='unboarding' screenOptions={{ headerShown: false }}>
        <Screen name='unboarding' component={Unboarding} />
        <Screen name='signup'  component={Signup}/>
        <Screen name='welcomescreen'  component={Welcome}/>
        <Screen name='catelog' component={Catelog}/>
      </Navigator>
    </NavigationContainer>
  )
}

export default App