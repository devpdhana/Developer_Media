import { Link } from "react-router-dom"
import Home from './Home';
import Posts from './Posts';
import { Routes,Route } from "react-router-dom";
import NewPost from "./NewPost";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const Nav = () => {
  const {search ,setSearch} = useContext(DataContext)
  return (
    <nav className="navbar">
        <form onSubmit={(e)=>e.preventDefault()}>
          <label className="search-label" htmlFor="searchPost">Serch posts</label>
          <input 
          type = "text"
          id="searchPost"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          placeholder="Search post"></input>
        </form>
        <ul className="horizontal-nav">
          <li><Link to = "/"> Home</Link></li>
          <li><Link to = "/home"> Posts</Link></li>
          <li><Link to = "/newPosts"> Newposts</Link></li>
          <li><Link to = "/about"> About</Link></li>
          
        </ul>
        
    </nav>
  )
}
export default Nav