/* 
export default (req, res) => {
    const {method} = req;
    const {email, password} = req.body;

    if(method !== 'POST') {
        return res.status(404).end()
    } // take the user input, and filter the request method to accept POST request only

    if (!eamil || !password) {
        return res.status(400).json({
            error: 'Missing required params'
        })
    } // If the email or password does not exist in the request body, will return a 400 status code (bad request)
}


function authenticateUser(email, password) {
    const validEmail = 'johndoe@somecompany.com'
    const validPassword = 'strongpassword';

    if (email === validEmail && password === validPassword) { 
        return { // If the passed data is correct, will get some user data
            id: 'f678f078-fcfe-43ca-9d20-e8c9a95209b6',
            name: 'John Doe',
            email: 'johndoe@somecompany.com'
        }
    }

    return null
}


const user = authenticateUser(email, password)

if (user) {
    return res.json({ user }) // send the user data to the client
} else {
    return res.status(401).json({ // Otherwise, will send a 401 status code (unauthorized) with an error
        error: 'Wrong email of password'
    })
}

 */



//////////////////////////////




import {encode} from '../../../lib/jwt'
import {serialize} from 'cookie'

export default (req, res) => {
    const {method} = req;
    const {email, password} = req.body;

    if(method !== 'POST') {
        return res.status(404).end()
    }


if (!email || !password) {
    return res.status(400).json({
        error: 'Missing required params'
    })
}



function authenticateUser(email, password) {
    const validEmail = 'ksz1860@naver.com'
    const validPassword = '1234';

if (email === validEmail && password === validPassword) { 
    return encode ({ 
        id: 'f678f078-fcfe-43ca-9d20-e8c9a95209b6',
        name: 'Seongjin',
        email: 'ksz1860@naver.com'
    })
}
return null
}


const user = authenticateUser(email, password)

if (user) {
    res.setHeader('Set-Cookie',
        serialize('my_auth', user, { path: '/', httpOnly: true }) // create a cookie named 'my_auth', which contain the user JWT 
        ) // will not pass the JWT to the client directly, keeping it hidden from client side
     return res.json({ success: true })   
} else {
    return res.status(401).json({
        success: false,
        error: 'Wrong email of password'
    })
}
}
