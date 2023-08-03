/* import '@/styles/globals.css'
import Head from 'next/head'
import { useState } from 'react'
import cartContext from './components/cartContext'
import Navbar from './components/Navbar'

export default function App({ Component, pageProps }) {
  const [items, setItems] = useState()

  return (
    <>
      <Head>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <cartContext.Provider value={{ items, setItems }}>
        <Navbar />
        <div>
          <Component {...pageProps} />
        </div>
      </cartContext.Provider>
    </>
  )
} */


/////////////////////


import '@/styles/globals.css'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { useStore } from '../../redux/store'
import Navbar from './components/Navbar'

export default function App({ Component, pageProps }) {

  const store = useStore(pageProps.initialReduxState)

  return (
    <>
      <Head>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <Provider store={store}>
        <Navbar />
        <div>
          <Component {...pageProps} />
        </div>
      </Provider>
    </>
  )
}
