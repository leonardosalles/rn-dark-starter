import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { getDefaultHeaderOptions } from '../Header'
import { ThemeProvider } from 'styled-components'

import routes from '@app/routes'
import AppDrawer from '@app/components/AppDrawer'
import { useTheme } from '@app/themes'

const Drawer = createDrawerNavigator()

export default function Layout() {
  const initialScreen = routes[0]
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName={initialScreen.title} drawerContent={props => <AppDrawer {...props} />}>
          {
            routes.map((item, index) => (
              <Drawer.Screen name={item.title} key={index}>
                {props => <item.component {...props} options={getDefaultHeaderOptions(theme)} />}
              </Drawer.Screen>
            ))
          }
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}