import { Link, useParams } from "react-router-dom"

const Post = ({post}) => {

    const {id} = useParams()

  return (
    <div className="post-container">
        {/* <h1>{post}</h1> */}
        <Link to={`newPosts/${post.id}`} className="post-link"><h1 className="post-title">{post.title}</h1>
        <article className="post-date">{post.date}</article> 
        </Link>
        <p className="post-body">{(post.body).length>20 ? `${(post.body).slice(0,20)}...`:post.body}</p>
    </div>
  )
}
export default Post