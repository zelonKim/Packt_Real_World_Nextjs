// 'getServerSideProps' function makes the page more dynamic such as calling external API or database 



//const { useRouter } = require("next/router");

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


///////////////


/* 
import Link from 'next/link'

function Home() {
    return (
        <div>
            <Link href={{
              pathname: 'blog/[date]',
              query: {
                date: '2023-01-01',
                greet: 'happy-new-year',
                feel: 'good',
              }
            }}> Home </Link>
        </div>
    )
}
export default Home;

// if you click 'Home' Link, browser`s address bar changes to http://localhost:3000/blog/2023-01-01?greet=happy-new-year&feel=good 
*/

////////////////


/* function MyPage() {
  const router = useRouter();
  const {loggedIn} = useAuth();

  useEffect(() => {
    if(!loggedIn) {
      router.push(router.push ({
        pathname: 'blog/[greet]/[feel]',
        query: {
          date: '2023-01-01',
          greet: 'happy-new-year',
          feel: 'good',
        }
      }))
    }
  }, [loggedIn])

  return loggedIn ? <PrivatePage /> : null
}

export default MyPage; 
 */
////////////


/* import Image from "next/image";

function IndexPage() {
  return (
    <div>
      <Image
        src='http://images.unsplash.com/photo-1605460375648-278bcbd579a6'
        width={500}
        height={200}
        alt='A beautiful Setter'
      />
    </div>
  )
}
export default IndexPage; */

////////////////

/* import Image from "next/image";

function IndexPage() {
  return (
    <div>
      <div style={{ width: 500, height: 200, position:'relative' }}>

      <Image
        src='http://images.unsplash.com/photo-1605460375648-278bcbd579a6'
        layout='fill'
        objectFit='cover'
        alt='A beautiful Setter'
      />
      </div>
    </div>
  )
}
export default IndexPage;
 */

///////////////

/* function IndexPage() {
  return (
    <div>
      <img
        src='http://images.unsplash.com/photo-1605460375648-278bcbd579a6'
        alt='A beautiful Setter'
      />
    </div>
  )
}
export default IndexPage;
 */

import Widget from '@/components/Widget';
import Head from 'next/head'
import Link from 'next/link'

function IndexPage() {
  return (
    <>
      <Head>
        <title> Welcome to my Next.js website </title>
      </Head>
      <div>
        <Link href='/about' passHref>
          About us
        </Link>
      </div>
      <div>
        <Widget pageName='index' />
      </div>
    </>
  )
}
export default IndexPage;

