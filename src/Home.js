import { useContext } from "react"
import Post from "./Post"
import DataContext from "./context/DataContext"

const Home = () => {
  const {searchResult,fetchError,isLoading} = useContext(DataContext)
  console.log(fetchError)
  return (
    <main className = "Home Posts">
        {isLoading && <p>Loading...</p>}
        {
           !isLoading && fetchError && <p>{fetchError}</p>
        }
        {!fetchError && !isLoading && (searchResult.length ?
          searchResult.map(post=>
            <Post key = {post.id} post={post} />
          ) : <p>No post available</p>)
        }
    </main>
  )
}
export default Home