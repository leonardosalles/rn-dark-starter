import * as React from 'react'
import { Image, Platform } from 'react-native'
import { DrawerActions } from '@react-navigation/native'
import { HeaderIconButton, BackButtonContainer, BackButtonText, ColoredIcon } from './index.style'
import { useNavigation } from '@react-navigation/native'
import Images from '@app/static/images'

function LogoTitle() {
  return (
    <Image
      style={{ width: 190, height: 50 }}
      resizeMode="contain"
      source={Images.logo}
    />
  )
}

function HeaderLeft(props) {
  const navigation = useNavigation()
  const hasBackButton = props.canGoBack

  return (
    <HeaderIconButton
      onPress={() => hasBackButton ? navigation.goBack() : navigation.dispatch(DrawerActions.toggleDrawer())}
    >
      {
        hasBackButton ?
          <BackButtonContainer>
            {
              Platform.OS === 'ios' ?
                <ColoredIcon name="chevron-left" size={26} />
              :
                <>
                  <ColoredIcon name="arrow-left" size={26}  />
                  <BackButtonText>Voltar</BackButtonText>
                </>
            }
          </BackButtonContainer>
        :
          <ColoredIcon name="bars" size={26} />   
      }
    </HeaderIconButton>
  )
}

export const getDefaultHeaderOptions = (theme) => ({
    headerStyle: {
      backgroundColor: theme.header.backgroundColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitle: props => <LogoTitle {...props} />,
    headerLeft: props => <HeaderLeft {...props} />
})