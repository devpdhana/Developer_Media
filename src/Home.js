import Post from "./Post"

const Home = ({posts}) => {
  return (
    <main className = "Home Posts">
      
        {
          posts.map(post=>
            <Post key = {post.id} post={post} />
          )
        }
    </main>
  )
}
export default Home