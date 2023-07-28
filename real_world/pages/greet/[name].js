/* export async function getServerSideProps({ params }) {
    const { name } = params;
    return {
        props: {
            name
        }
    }
}

function Greet(props) {
    return (
        <h1> Hello, {props.name} </h1>
    )
}
export default Greet; */

///////////////////


import { useRouter } from 'next/router'

function Greet() {
    const { query } = useRouter();
    
    console.log(query) 
    return <h1>Hello {query.name} </h1> 
}
export default Greet;

