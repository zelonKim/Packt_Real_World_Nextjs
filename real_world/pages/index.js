// 'getServerSideProps' function makes the page more dynamic such as calling external API or database 

// import { useEffect } from "react";

/* export async function getServerSideProps() {
  const userRequest = await fetch('https://example.com/api/user')
  const userData = awiat userRequest.json()

  return {
    props: {
      user: userData
    }
  }
}

function IndexPage(props) {
  return (
    <div>hello, {props.user.name}</div>
  )
}
export default IndexPage  */


////////////////////////////

/* 
export async function getStaticProps() {
  const userRequest = await fetch('https://example.com/api/user')
  const userData = awiat userRequest.json()

  const dashboardRequest = await fetch('/api/dashboard')
  const dashboardData = await dashboardRequest.json()

  return {
    props: {
      user: userData,
      data: dashboardData,
    },
    revalidate: 600 // cache it for up to 600 seconds using SSG and ISR
  }
}

function IndexPage(props) {
  return (
    <div>
      <Dashboard
        user = {props.user}
        data = {props.data}
      />
      </div>
      )
}
export default IndexPage  */

////////////////


/* function EffectPage() {
  const [isClient, setIsClient] = useState(false)
  
  useEffect(()=> {
    setIsClient(true)
  }, [])

  return (
    <div>
      {isClient && (<Highlight code={"console.log('Hello, world!')"} language='js' />)}
    </div>
  )
}
export default EffectPage; */


////////////


/* function IndexPage() {
  const side = process.window ? 'client' : 'server';
  return <div> You`re currently on the {side}-side </div>
}
export default IndexPage; */


///////////

/* 
import dynamic from 'next/dynamic'
const Highlight = dynamic( () => import ('../components/Highlight'), { ssr: false })

import styles from '../styles/Home.module.css'

function DynamicPage() {
  return (
    <div className={styles.main}>
      <Highlight code={"console.log('Hello, world!')"} language='js' />
    </div>
  )
} */


