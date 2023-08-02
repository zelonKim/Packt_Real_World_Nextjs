import { useQuery } from '@apollo/client'
import Link from 'next/link'
import Loading from './components/Loading'
import Sign from './components/Sign'
import GET_LATEST_SIGNS from './lib/apollo/queries/getLatestSigns'


function HomePage() {
  const {loading , error, data} = useQuery(GET_LATEST_SIGNS, {
    fetchPolicy: 'no-cache',
  })

  if (loading) {
    return <Loading />
  }


  return (
   <div>
      <h1>Real World Next.js signbook</h1>

      <Link href="/new-sign">
          <button> Add new sign </button>
      </Link>
      
      <div>
          {data.sign.map((sign) => (
            <Sign key={sign.uuid} {...sign} />
          ))}
      </div>
   </div>
  )
}
export default HomePage
