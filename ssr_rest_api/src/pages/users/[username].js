/* import Link from "next/link";

export async function getServerSideProps(ctx) {
    const {username} = ctx.query;

    const userReq = await axios.get(`${process.env.API_ENDPOINT}/04/users/${username}`,
        {
            headers: {
                authorization: process.env.API_TOKEN
            } 
        } // need to pass a valid token as an HTTP authorization header while making the API request (the server will know that you are authorized to access)
    ) // 'axios' can add an HTTP header to the request by passing an object as the second argument of its 'get' method, containing a property called 'headers' 


    if (userReq.status === 404) {
        return {
            notFound: true
        }
    } // Next.js will automatically redirect to its default 404 page 


    return {
        props: {
            user: userReq.data
        }
    }
}


function UserPage({ user }) {
    return (
        <div>
            <div>
                <Link href="/" passHref>
                    Back to home
                </Link>
            </div>
            <hr />
            <div style={{ display: 'felx' }}>
                <img
                    src={user.profile_picture}
                    alt={user.username}
                    width={150}
                    height={150}
                />
                <div>
                    <div>
                        <b>Username:</b> {user.username}
                    </div>
                    <div>
                        <b>Full name:</b> {user.first_name} {user.last_name}
                    </div>
                    <div>
                        <b>Email:</b> {user.email}
                    </div>
                    <div>
                        <b>Company:</b> {user.company}
                    </div>
                    <div>
                        <b>Job title:</b> {user.job_title}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserPage; */





//////////////////


/* 
import Link from "next/link";

export async function getServerSideProps({ query }) {
    const { username } = query;
    return {
        props: {
            username,
            authorization: process.env.API_TOKEN
        }
    }
}

function UserPage({ username, authorization }) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null)

    useEffect(async() => {
        const req = await fetch(`https://api.rwnjs.com/04/users/${username}`,
        { headers: {authorization}}
        )

    const reqData = await req.json()
    setLoading(false)
    setData(reqData)
    }, [])

    return(
        <div>
            <div>
                <Link href="/" passHref>
                    Back to home
                </Link>
            </div>
            <hr />
            {loading && <div>Loading user data...</div>}
            {data && <UserData user={data} />}
        </div>
    )
}
export default UserPage;

function UserData({ user }) {
    return (
        <div style={{ display: 'flex' }}>
                <img
                    src={user.profile_picture}
                    alt={user.username}
                    width={150}
                    height={150}
                />
                <div>
                    <div>
                        <b>Username:</b> {user.username}
                    </div>
                    <div>
                        <b>Full name:</b> {user.first_name} {user.last_name}
                    </div>
                    <div>
                        <b>Email:</b> {user.email}
                    </div>
                    <div>
                        <b>Company:</b> {user.company}
                    </div>
                    <div>
                        <b>Job title:</b> {user.job_title}
                    </div>
                </div>
            </div>
    )
} */


///////////////////

import Link from "next/link";

function UserPage({ username}) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null)

    useEffect(async() => {
        const req = await fetch(`/api/singleUser?username=${username}`,
        )
        const data = await req.json()

        setLoading(false)
        setData(reqData)
    }, [])

    return(
        <div>
            <div>
                <Link href="/" passHref>
                    Back to home
                </Link>
            </div>
            <hr />
            {loading && <div> Loading user data... </div>}
            {data && <UserData user={data} />}
        </div>
    )
}
export default UserPage;

function UserData({ user }) {
    return (
        <div style={{ display: 'flex' }}>
                <img
                    src={user.profile_picture}
                    alt={user.username}
                    width={150}
                    height={150}
                />
                <div>
                    <div>
                        <b>Username:</b> {user.username}
                    </div>
                    <div>
                        <b>Full name:</b> {user.first_name} {user.last_name}
                    </div>
                    <div>
                        <b>Email:</b> {user.email}
                    </div>
                    <div>
                        <b>Company:</b> {user.company}
                    </div>
                    <div>
                        <b>Job title:</b> {user.job_title}
                    </div>
                </div>
            </div>
    )
} 