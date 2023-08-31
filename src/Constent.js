import { Link,Outlet } from "react-router-dom"

const constent = () => {
  return (
    <>
        <Link to = '/posts/1'>Posts 1</Link> <br />
        <Link to = '/posts/2'>Posts 2</Link> <br />
        <Link to ='/posts/3'>Posts 3</Link> <br />
        <Link to = "/posts/newPost">New Post</Link>
        <Outlet />
    </>
  )
}
export default constent