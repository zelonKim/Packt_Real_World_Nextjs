import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  colors: {
    brand: {
      100: '#ffebee',
      200: '#e57373',
      300: '#f44336',
      400: '#e53935',
    }
  }
})


function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider theme={customTheme}>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}
export default MyApp;