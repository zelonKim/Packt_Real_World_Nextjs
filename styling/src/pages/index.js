/* import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.homepage}>
      <h1> Welcome to the CSS modules </h1>
    </div>
  )
}
 */

/////////////////////

/* 
import { Vstack, Button } from '@chakra-ui/react'

export default function Home() {
  return (
    <Vstack padding="10">
      <Button backgroundColor="brand.100"> brand.100 </Button>
      <Button backgroundColor="brand.200"> brand.200 </Button>
      <Button backgroundColor="brand.300"> brand.300 </Button>
      <Button backgroundColor="brand.400"> brand.400 </Button>
    </Vstack>
  )
} 
*/

//////////////////


import { VStack, Button, Text, useColorMode } from '@chakra-ui/react'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return(
    <VStack>
      <Text>
        Chakra UI  
      </Text>
      <Text>
        Rendering in {colorMode} mode  
      </Text>
      <Button onClick={toggleColorMode}> Toggle {colorMode === 'light' ? 'dark' : 'light'} mode </Button> 
    </VStack>
  )
}