/* 
import Navbar from '@/components/Navbar'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp; 
*/

///////////

import Navbar from '@/components/Navbar'
import ThemeContext from '@/components/themeContext'
import { useState } from 'react'

const themes = {
  dark: {
    background: 'black',
    color: 'white',
  },
  light: {
    background: 'white',
    color: 'black'
  }
}


export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div style={{ width: '100%', minHeight: '100vh', ...themes[theme] }} >
          <Navbar />
          <Component {...pageProps} />
        </div>
      </ThemeContext.Provider>
    </>
  )
}
