import styled from 'styled-components'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'

export const HeaderIconButton = styled(TouchableOpacity)`
  padding: 0 16px
  width: 100px
`

export const BackButtonContainer = styled.View`
  flex-direction: row
  align-items: center
`

export const BackButtonText = styled.Text`
  color: ${props => props.theme.colors.textColor}
  font-size: 18px
  padding-left: 6px
`

export const ColoredIcon = styled(Icon)`
  color: ${props => props.theme.colors.textColor}
`