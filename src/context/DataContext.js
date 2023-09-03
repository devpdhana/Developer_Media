import {createContext,useState,useEffect} from 'react'
import useWindowSize from '../hooks/useWindowSize'
import useAxiosFetch from '../hooks/useAxiosFetch';
import {format} from 'date-fns'
import api from '../Api/posts'
import { useNavigate } from 'react-router-dom';

const DataContext = createContext({})

export const DataProvider = ({children})=>{

    const [posts, setPosts] = useState([])
    const {width} = useWindowSize()
    const [search ,setSearch] = useState('')
    const [searchResult,setSearchResult] = useState([])
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [editTitle,setEditTitle] = useState('')
    const [editBody,setEditBody] = useState('')
    const navigate = useNavigate()
    const {data,fetchError,isLoading} = useAxiosFetch('http://localhost:3500/posts')


    useEffect(()=>{
          setPosts(data)
        
      },[data])

    useEffect(() => {
        const searchResults = posts.filter((post)=>(
          ((post.title).toLowerCase()).includes(search.toLowerCase())||
          ((post.body).toLowerCase()).includes(search.toLowerCase())
        ))
        setSearchResult(searchResults.reverse())    
      }, [posts,search])

      const handleClick = async(e)=>{
        e.preventDefault()
        const id = posts.length ? (posts.length)+1 :1
        const date = format(new Date(),'MMM dd, yyyy pp')
        console.log(date)
        const newPost = {id,title:title,date,body:body}
        try{
          const response = await api.post('/posts',newPost)
          const allPost = [...posts,response.data]
          setPosts(allPost)
          setTitle(' ')
          setBody(' ')
          navigate('/')
        }catch (err){
          if (err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
          }else {
            console.log(err.message)
          }
        }
    }

    const handleDelete = async(id)=>{
        try {
          await api.delete(`/posts/${id}`)
          const postList = posts.filter(post => (post.id) !== id)
          setPosts(postList)
          navigate('/')
        }catch(err) {
          console.log(err.message)
        }
        
      }

      const handleEdit = async(id)=>{
        // const id = posts.length ? (posts.length)+1 : 1
        try{
          const datetime = format(new Date(),'MMM dd, yyy pp')
    
          const newPost = {id,title:editTitle,datetime,body:editBody}
          const response = await api.put(`/posts/${id}`,newPost)
          setPosts(posts.map((post)=>post.id === id ? {...response.data}:post))
          // setPosts(response.data)
          setEditTitle('')
          setEditBody('')
          navigate('/')
        }catch(err){
          console.log(err.message)
        }
        
      }
   
    return  (
        <DataContext.Provider value={{
            width,
            search,setSearch,
            searchResult,fetchError,isLoading,
            posts,
            title,setTitle,body,setBody,handleClick,
            handleDelete,
            editTitle,setEditTitle,editBody,setEditBody,handleEdit
        }}>
            {children}
        </DataContext.Provider>
    )
}


export default DataContext