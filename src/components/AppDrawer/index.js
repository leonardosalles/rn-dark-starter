import * as React from 'react'
import { DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer'
import { Container } from './index.style'
import { Button } from 'react-native'
import { useTheme } from '@app/themes'

export default function AppDrawer({ progress, ...rest }) {
  const theme = useTheme()
  const navigation = rest.navigation

  const navigate = screenName => {
    navigation.navigate(screenName)
  }

  return (
    <DrawerContentScrollView {...rest} style={{ backgroundColor: theme.drawer.backgroundColor }}>
      <Container>
        <DrawerItemList
          {...rest}
          labelStyle={{color: theme.drawer.activeTintColor}}
          activeTintColor={theme.drawer.activeTintColor}
          inactiveTintColor={theme.drawer.inactiveTintColor}
        />

        {/*<Button
          title="Home"
          onPress={() => { navigate('Home')}}
        />

        <Button
          title="Notifications"
          onPress={() => { navigate('Notifications') }}
        />*/}
      </Container>
    </DrawerContentScrollView>
  )
}