'use client'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/GlobalStyles'
import { theme } from '../styles/theme'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import NewsletterModal from '../components/NewsletterModal'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navigation />
      <Hero />
      <NewsletterModal />
      <Footer />
    </ThemeProvider>
  )
}

