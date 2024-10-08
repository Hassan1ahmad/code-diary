import React,{useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


function Navbar() {
const [displaySearch, setDisplaySearch] = useState(null);
const [showSideNav, setShowSideNav] = useState(false);
const serachiconclicked=()=>{
  setDisplaySearch('show')
}
const shownavclicked=()=>{
  if (showSideNav=== false) {
    setShowSideNav(true)
  } else {
    setShowSideNav(false)
  }
}

  return (
    <div className='main-section'>
      {/* ============================section 1========================= */}
     <div className="section1">
      <div className="brand">
      <Link to='/' >Code Diary</Link>
      </div>
      <div className="madeby">
        Made by Hassan Ahmad
      </div>
     </div>
      {/* ============================section 2========================= */}
     <div className="section2">
      <div className="left">
        <Link to='/' ><i className="fa-solid fa-house"></i></Link>
      </div>
       {/* Hamburger Icon */}
       <div className="hamburger" >
                <i onClick={shownavclicked} className="fa-solid fa-bars"></i>
            </div>
      <div className={`center ${showSideNav === true? 'active' : ''}`}>      
      <ul>
        <li className='dropdown-parent' > <Link className='dropdown' to='/cascaddingss' >CSS</Link> 
             <ul className='dropdown-nav'>
              <li><Link onClick={shownavclicked} to='/cascaddingss' >CSS Notes</Link> </li>
              <li><Link onClick={shownavclicked}to='/css-websites' >CSS Websites</Link> </li>
              </ul>  
               </li>
        <li> <Link onClick={shownavclicked} to='/javascriptnotes' >Javascript</Link> </li>
        <li> <Link onClick={shownavclicked} to='/reactjs' >React JS</Link> </li>
        <li> <Link onClick={shownavclicked} to='/expressjs' >Express JS</Link> </li>
        <li> <Link onClick={shownavclicked} to='/npm' >NPM Pakages</Link> </li>
        <li> <Link onClick={shownavclicked} to='/ui-components' >UI Components</Link> </li>
         
      </ul>
      </div>
      {/* ====================right search box==================== */}
      <div className='search-box'>
      <div className={`icon ${displaySearch === null? '' : 'display-none'}`}>
        <i onClick={serachiconclicked} className="fa-solid fa-magnifying-glass"></i>
        </div>
      <div className={`right ${displaySearch === null? 'display-none' : ''}`}>
        <div className="serach-button">
          <input type="search" name="" id="" />
        </div>
        <div className="icon">
        <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        </div>
      </div>
     
      
     </div>

    </div>
  )
}

export default Navbar
