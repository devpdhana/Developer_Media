import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import DataContext from "./context/DataContext"

const EditPost = () => {
    const {posts,editTitle,setEditTitle,editBody,setEditBody,handleEdit} = useContext(DataContext)
    const {id} = useParams()
    const post = posts.find((post)=>(post.id).toString()===id)
    console.log(id)
    useEffect(()=>{
        if (post){
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    },[posts,setEditTitle,setEditBody])

    console.log(editTitle)
  return (
    <main>
        <form className="form-container" onSubmit={(e)=>e.preventDefault()}>
            <div className="form-group">
                <label htmlFor="editTitle">Title</label>
                <input 
                type="text"
                id="editTitle"
                value={editTitle}
                onChange={(e)=>(setEditTitle(e.target.value))}/>
            </div>
            
            <div className="form-group">
                <label htmlFor="body">Body</label>
                <textarea 
                type="text"
                id="body"
                value={editBody}
                onChange={(e)=>(setEditBody(e.target.value))}/>
            </div>
            <div className="form-group">
            <button type = "submit" onClick={()=>handleEdit(post.id)}>Submit</button>
            </div>
            
        </form>
    </main>
  )
}
export default EditPost


