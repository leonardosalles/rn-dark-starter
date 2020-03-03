import * as React from 'react'
import { AppThemeProvider } from '@app/themes'
import Layout from '@app/components/Layout'
import { API_URL } from 'react-native-dotenv'

console.log(API_URL)

export default function App() {
  return (
    <AppThemeProvider>
      <Layout />
    </AppThemeProvider>
  )
}