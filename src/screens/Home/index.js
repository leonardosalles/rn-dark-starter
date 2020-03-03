import * as React from 'react'
import { Text, StatusBar } from 'react-native'
import { Container, ToggleThemeButton } from './index.style'
import { withAppContext } from '@app/context'
import { useTheme } from '@app/themes'

import DefaultButton from '@app/components/DefaultButton'
import Icon from 'react-native-vector-icons/FontAwesome5'

function HomeScreen({ navigation }) {
  const theme = useTheme()
  const [ isDark, setIsDark ] = React.useState(false)

  const toggleDarkTheme = () => {
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