import Post from "./Post"

const Home = ({posts,fetchError,isLoading}) => {
  console.log(fetchError)
  return (
    <main className = "Home Posts">
        {isLoading && <p>Loading...</p>}
        {
           !isLoading && fetchError && <p>{fetchError}</p>
        }
        {!fetchError && !isLoading && (posts.length ?
          posts.map(post=>
            <Post key = {post.id} post={post} />
          ) : <p>No post available</p>)
        }
    </main>
  )
}
export default Home