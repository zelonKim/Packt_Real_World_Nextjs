export default function Home() {
  return (
   <div>hello</div>
  )
}

////////////

 const jwt = require('jsonwebtoken')

 const myToken = jwt.sign(
  {
    name: 'Seongjin',
    admin: false,
  },
  'secretpassword',
 )

 const tokenValue = jwt.verify(myToken, 'secretpassword')

 console.log(tokenValue) // {name: 'Seongjin', admin: false, iat: 1634131396}

