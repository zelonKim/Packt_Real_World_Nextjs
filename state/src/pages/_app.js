import '@/styles/globals.css'
import Head from 'next/head'
import ShoppingCartContext from './components/cartContext'

export default function App({ Component, pageProps }) {
  const [items, setItems] = useState({})

  return (
    <>
      <Head>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <ShoppingCartContext.Provider value={{ items, setItems }}>
        <Navbar />
        <div>
          <Component {...pageProps} />
        </div>
      </ShoppingCartContext.Provider>
    </>
  )
  
}
