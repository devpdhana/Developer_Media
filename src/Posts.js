import { Link,Outlet } from "react-router-dom"
import Constent from "./Constent"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

const Posts = ({posts,handleDelete}) => {
  const {id} = useParams()
  const post = posts.find(post => (post.id) === Number(id))
  console.log(post)
  return (
    <main>
        {/* <h1><Link to = '/posts/1'>Posts 1</Link></h1>
        <h1><Link to = '/posts/2'>Posts 2</Link></h1>
        <h1><Link to ='/posts/3'>Posts 3</Link></h1>
        <h1><Link to = "/posts/newPost">New Post</Link></h1>
        <Outlet /> */}

        {/* <h1>Posts</h1> */}<h1>Post</h1>
        {post ? 
          (<>
          <article className="post-container">
          <h1 className="post-title">{post.title}</h1>
          <p className="post-date">{post.date}</p>
          <p className="post-body">{post.body}</p>
          </article>
  
          <button onClick={()=>handleDelete(post.id)} className="deleteButton">Delete post</button>
          <Link to={`/edit/${post.id}`} ><button className="editButton">Edit post</button> </Link>
          </>)
          :
          (<>
          <h1>Post not available</h1>
          </>)
        }

        

        {/* {
          posts.map((post)=>(
            (post.id)===Number(id) ? (<h1  key = {post.id}>{post.title}</h1>):
            (<h1 key = {post.id}>Error</h1>)
          ))
        } */}

      {/* {posts.map((post) => (
        post.id === Number(id) ? (
          <h1 key={post.id}>{post.title}</h1>
        ) : null
      ))} */}
      {/* {posts.every((post) => post.id !== Number(id)) && <h1>Error</h1>} */}

    </main>
  )
}
export default Posts