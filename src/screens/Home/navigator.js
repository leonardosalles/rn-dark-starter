import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './index'
import HomeDetailScreen from './Detail'

const Stack = createStackNavigator()

export default function HomeNavigator(props) {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          {...props}
        />

        <Stack.Screen
          name="HomeDetail"
          component={HomeDetailScreen}
          {...props}
        />
      </Stack.Navigator>
  )
}