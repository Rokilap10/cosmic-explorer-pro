import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from '../context/ThemeContext'
import { FavoritesProvider } from '../context/FavoritesContext'
import '../styles/globals.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <FavoritesProvider>
          <Component {...pageProps} />
        </FavoritesProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}