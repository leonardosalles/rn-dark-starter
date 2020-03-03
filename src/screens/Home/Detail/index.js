import * as React from 'react'
import { Text } from 'react-native'
import { Container } from './index.style'
import { withAppContext } from '@app/context'
import DefaultButton from '@app/components/DefaultButton'
import { useTheme } from '@app/themes'

function HomeDetailScreen({ navigation, context }) {
  const theme = useTheme()

  return (
    <Container>
      <DefaultButton
        onPress={() => navigation.goBack()}
        title="Go back Home"
      />

      <Text style={{ color: theme.colors.primary.main}}>
        {context.appName}
      </Text>
    </Container>
  )
}

export default withAppContext(HomeDetailScreen)