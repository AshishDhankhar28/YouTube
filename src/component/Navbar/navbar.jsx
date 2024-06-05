import './navbar.css'

import threecross from "../../assets/menu.png"
import logo from "../../assets/Logo.jpg"
import search from "../../assets/search.png"
import user from "../../assets/user_profile.jpg"
import voicesearch from "../../assets/voice-search.png"
import upload from "../../assets/upload.png"
import notification from "../../assets/notification.png"
import { Link } from 'react-router-dom'


const navbar = () => {
  return (
    <nav>
        <Link to='/' className="nav1 flex">
            <img className='nav-image-1' src={threecross}></img>
            <img src={logo}></img>
                
        </Link> 
             
        <div className='nav2 flex'>
            <div className="flex">
                <input type='text' placeholder='Search'></input>
                <img src={search}></img>
            </div>
            <img src={voicesearch}></img>
        </div>
        <div className="nav3 flex">
            <img src={upload}></img>
            <img src={notification}></img>
            <img src={user}></img>
        </div>
    </nav>
  )
}

export default navbar