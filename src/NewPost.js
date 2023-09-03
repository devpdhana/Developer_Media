import { useContext } from "react"
import DataContext from "./context/DataContext"

const NewPost = () => {
  const {title,setTitle,body,setBody,handleClick} = useContext(DataContext)
  return (
    <div className="main NewPost">
      <div className="form-container">
        <h1>New post</h1>
        <form onSubmit={handleClick}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input 
            type="text"
            id = "title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            ></input>
            <br />
          </div>
        
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea 
          type="text"
          id = "body"
          value={body}
          onChange={(e)=>setBody(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <button  type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
  )
}
export default NewPost

// const NewPost = ({ title, setTitle, body, setBody, handleClick }) => {
//   return (
//     <div className="main NewPost">
//       <div className="form-container">
//         <h1>New post</h1>
//         <form onSubmit={handleClick}>
//           <div className="form-group">
//             <label htmlFor="title">Title</label>
//             <input 
//               type="text"
//               id="title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               style={{ width: "100%",height: "30px" }} // Set the width to 100% of the container
//             />
//           </div>
          
//           <div className="form-group">
//             <label htmlFor="body">Body</label>
//             <textarea 
//               id="body"
//               value={body}
//               onChange={(e) => setBody(e.target.value)}
//             ></textarea>
//           </div>
//           <div className="form-group">
//             <button type="submit">Submit</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default NewPost;
