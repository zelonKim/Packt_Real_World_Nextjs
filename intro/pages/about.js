/* import Link from 'next/link'

function About() {
    return (
        <div>
            <Link href='/'> Home </Link>
            <Link href='/about'> About </Link>
            <Link href='/contacts' preload={false}> Contacts </Link>
            This is About
        </div>
    )
}
export default About; */

/////////////////

import Widget from '@/components/Widget';
import Head from 'next/head'
import Link from 'next/link'

function AboutPage() {
  return (
    <>
      <Head>
        <title> About this website </title>
      </Head>
      <div>
        <Link href='/' passHref>
          Back to home
        </Link>
      </div>
      <div>
        <Widget pageName='about' />
      </div>
    </>
  )
}
export default AboutPage;
