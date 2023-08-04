/* import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} */

///////////////////

import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import { extendTheme } from '@chakra-ui/react'

const config = {
  useSystemColorMode: true,
}

const theme = extendTheme({ config })

export default class Document extends NextDocument() {
    render() {
    return (
      <Html lang="en">
        <Head />
        <body>

          <ColorModeScript 
            initialColorMode={theme.config.initialColorMode} />
            
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

