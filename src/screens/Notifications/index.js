import * as React from 'react'
import { Container } from './index.style'
import DefaultButton from '@app/components/DefaultButton'

export default function NotificationsScreen({ navigation }) {
  return (
    <Container>
      <DefaultButton onPress={() => navigation.goBack()} title="Go back home" />
      <DefaultButton onPress={() => navigation.navigate('NotificationsSettings')} title="Open Modal" />
    </Container>
  )
}