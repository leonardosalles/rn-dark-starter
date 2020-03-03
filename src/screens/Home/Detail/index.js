import * as React from 'react'
import { Text } from 'react-native'
import { Container } from './index.style'
import { withAppContext } from '@app/context'
import DefaultButton from '@app/components/DefaultButton'

function HomeDetailScreen({ navigation, context }) {
  return (
    <Container>
      <DefaultButton
        onPress={() => navigation.goBack()}
        title="Go back"
      />
      <Text>{context.appName}</Text>
    </Container>
  )
}

export default withAppContext(HomeDetailScreen)