import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import Posts from './Posts';
import Missing from "./Missing";
import Footer from './Footer'
import About from './About'
import Constent from './Constent';
import { Route, Routes,Link, useNavigate } from 'react-router-dom';
import Post from './Post';
import {useState , useEffect} from 'react'
import {format} from 'date-fns'
import api from './Api/posts'
import EditPost from './EditPost';
//customHooks
import useWindowSize from './hooks/useWindowSize';

function App() {

  const [posts, setPosts] = useState([
    // {
    //   id: 1,
    //   title: "Artificial Intelligence: Changing the Landscape",
    //   date: "08/11/2023, 10AM",
    //   body: "Discover how AI is revolutionizing industries and reshaping our world."
    // },
    // {
    //   id: 2,
    //   title: "Machine Learning: Unveiling New Possibilities",
    //   date: "08/11/2023, 11AM",
    //   body: "Exploring the fascinating world of machine learning and its real-world applications."
    // },
    // {
    //   id: 3,
    //   title: "The Rise of Automation in Modern Technology",
    //   date: "08/11/2023, 12PM",
    //   body: "Dive into the advancements in automation technology and its impact on various sectors."
    // },
    // {
    //   id: 4,
    //   title: "Enhancing User Experience with AI-Powered Systems",
    //   date: "08/11/2023, 1PM",
    //   body: "Exploring how AI is transforming user experiences and creating personalized interactions."
    // }
  ]);
  
  const [search ,setSearch] = useState('')
  const [title,setTitle] = useState('')
  const [body,setBody] = useState('')
  const [searchResult,setSearchResult] = useState([])
  const [editTitle,setEditTitle] = useState('')
  const [editBody,setEditBody] = useState('')
  const navigate = useNavigate()

  const {width} = useWindowSize()

  useEffect(()=>{
    const fetchPosts = async()=>{
      try{
        const response = await api.get('/posts')
        setPosts(response.data)
      }catch(err) {
        if(err.response){
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        }else {
          console.log(err.message)
        }
      }
    }
    fetchPosts()
  },[])

  

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

  useEffect(() => {
    const searchResults = posts.filter((post)=>(
      ((post.title).toLowerCase()).includes(search.toLowerCase())||
      ((post.body).toLowerCase()).includes(search.toLowerCase())
    ))
    setSearchResult(searchResults.reverse())    
  }, [posts,search])
  
  

  return (
    <div className="App">
      {/* <nav>
        <ul>
          
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/posts">Posts</Link></li>
          <li><Link to = "/about">About</Link></li>

        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/posts" element={<Constent/>}>
            <Route index element={<Posts/>}/>
              <Route path='newPost' element={<NewPost/>}/>
              <Route path=':id' element={<Post/>}/>
              
        </Route>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Missing/>}/>
      </Routes> */}
      
      
      <Header 
      title = "Developer Media"
      width = {width}
      />
      <Nav
      search={search}
      setSearch={setSearch}/>

      
      {/* <Home
      posts = {searchResult}/>
      <NewPost
      title={title}
      setTitle={setTitle}
      body={body}
      setBody={setBody}
      handleClick={handleClick}/>
      <Posts/>
      <Missing />
      <Footer/> */}
      {
          <Routes>
            <Route path='/' element={<Home posts={searchResult}/>}>
              <Route path=''/>
            </Route>
            <Route path='/home' element={<Home posts = {posts}/>}>
              
            </Route>
            <Route path='/newPosts' >
              <Route index element={<NewPost 
                title={title}
                setTitle={setTitle}
                body={body}
                setBody={setBody}
                handleClick={handleClick}/>}/>
              <Route path=':id' element={<Posts 
              posts ={posts}
              handleDelete={handleDelete}
              />}/>
            </Route>
            <Route path='/edit/:id' element={<EditPost
            posts = {posts} 
            editTitle = {editTitle}
            setEditTitle = {setEditTitle}
            editBody = {editBody}
            setEditBody = {setEditBody}
            handleEdit = {handleEdit}
            />} />
            <Route path='/about' element={<About />}></Route>
            <Route path='*' element={<Missing />}></Route>
          </Routes>
        }

        <Footer />
    </div>
  );
}

export default App;
