import * as React from 'react'
import { Container } from './index.style'
import DefaultButton from '@app/components/DefaultButton'
import { Modal } from 'react-native';

export default function NotificationsSettingsModalScreen({ navigation }) {
  return (
    <Container>
      <Modal
          animationType="slide"
          transparent={false}
          visible={true}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
        <DefaultButton onPress={() => navigation.goBack()} title="Close Modal" />
      </Modal>
    </Container>
  )
}