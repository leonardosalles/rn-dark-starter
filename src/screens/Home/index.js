import React, { useEffect } from 'react'
import { Text, StatusBar } from 'react-native'
import { Container, ToggleThemeButton } from './index.style'
import { withAppContext } from '@app/context'
import { useTheme } from '@app/themes'

import DefaultButton from '@app/components/DefaultButton'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { getUser, setUser, SET_USER } from '@app/actions/user'
import userStore from '@app/reducers/user'

function HomeScreen({ navigation }) {
  const theme = useTheme()
  const [ isDark, setIsDark ] = React.useState(false)

  useEffect(() => {
    // Watch every dispatch in user store
    userStore.subscribe(() => {
      // Get new state
      const state = userStore.getState()

      if (state.type === SET_USER) {
        // Do whatever you want when user data is set
        console.log('User action dispatch', state)
      }
    })
  }, [])

  const toggleDarkTheme = () => {
    userStore.dispatch(setUser({ name: 'Leonardo' }))
    userStore.dispatch(getUser())

    if (isDark) {
      theme.change('Default')
      setIsDark(false)
    } else {
      theme.change('Dark')
      setIsDark(true)
    }
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" />

      <DefaultButton
        onPress={() => navigation.navigate('HomeDetail')}
        title="Go to detail screen"
      />

      <DefaultButton
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />

      <ToggleThemeButton onPress={() => toggleDarkTheme()}>
        {
          isDark ?
            <Icon name="sun" size={32} color={theme.colors.primary.main} />
          :
            <Icon name="moon" size={32} color={theme.colors.primary.main} />
        }
        <Text style={{ color: theme.colors.primary.main}}>Go {isDark ? 'Light' : 'Dark'}</Text>
      </ToggleThemeButton>
    </Container>
  )
}

export default withAppContext(HomeScreen)