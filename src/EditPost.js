import { useEffect } from "react"
import { useParams } from "react-router-dom"

const EditPost = ({posts,editTitle,setEditTitle,editBody,setEditBody,handleEdit}) => {
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
                <label>Title</label>
                <input 
                type="text"
                id="editTitle"
                value={editTitle}
                onChange={(e)=>(setEditTitle(e.target.value))}/>
            </div>
            
            <div>
                <label>Body</label>
                <textarea 
                type="text"
                id="body"
                value={editBody}
                onChange={(e)=>(setEditBody(e.target.value))}/>
            </div>

            <button type = "submit" onClick={()=>handleEdit(post.id)}>Submit</button>
        </form>
    </main>
  )
}
export default EditPost


