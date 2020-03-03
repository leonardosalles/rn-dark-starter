import * as React from 'react'
import { AppThemeProvider } from '@app/themes'
import Layout from '@app/components/Layout'

export default function App() {
  return (
    <AppThemeProvider>
      <Layout />
    </AppThemeProvider>
  )
}