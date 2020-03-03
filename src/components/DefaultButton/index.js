import * as React from 'react'
import ColoredWrapperButton from './index.style'
import { withAppContext } from '@app/context'
import { useTheme } from '@app/themes'

function DefaultButton({ ...rest }) {
  const theme = useTheme()

  return (
    <ColoredWrapperButton {...rest} color={rest.color ? rest.color : theme.colors.primary.main}/>
  )
}

export default withAppContext(DefaultButton)