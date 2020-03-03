import styled from 'styled-components'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Container = styled.View`
	background-color: ${props => props.theme.page.backgroundColor}
	flex: 1
	justify-content: center
  align-items: center
`

export const ToggleThemeButton = styled(TouchableOpacity)`
	margin-top: 50px
	background-color: #282828
	border-radius: 4px
	justify-content: center
	align-items: center
	padding: 8px 24px
`