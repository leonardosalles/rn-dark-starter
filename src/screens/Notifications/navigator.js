import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import NotificationsScreen from './index'

const Stack = createStackNavigator()

export default function NotificationsNavigator(props) {
  return (
      <Stack.Navigator initialRouteName="Notifications">
        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
          {...props}
        />
      </Stack.Navigator>
  )
}