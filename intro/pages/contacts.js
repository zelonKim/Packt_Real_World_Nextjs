import Link from 'next/link'

function About() {
    return (
        <div>
            <Link href='/'> Home </Link>
            <Link href='/about'> About </Link>
            <Link href='/contacts' preload={false}> Contacts </Link>
            This is Contacts
        </div>
    )
}
export default About;