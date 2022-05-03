import type { AppProps } from 'next/app'
import { GeistProvider, CssBaseline } from '@geist-ui/core'
import react, { useState } from 'react'
import 'inter-ui/inter.css'
import '../styles/global.css'
import 'animate.css/animate.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  const themeType = useState('dark')
  return (
    <GeistProvider themeType='dark'>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  )
}
export default MyApp
