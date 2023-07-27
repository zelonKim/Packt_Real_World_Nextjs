
// 'getServerSideProps' function makes the page more dynamic such as calling external API or database 

export async function getServerSideProps() {
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
export default IndexPage 