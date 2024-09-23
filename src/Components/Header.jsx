import React from 'react'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
    <div className="container2">
      <div className="d-flex header align-items-center justify-content-between">
        <a href='/' className="logo navbar-brand fw-bold">Blog</a>
        <form action="" className="form">
          <CiSearch className='icon' />
          <input type="search" placeholder="Search Post..." className="search" name="" id="" />
        </form>
        <ul className="navbar d-none d-sm-flex p-0 m-0 align-items-center gap-4">
          <li><Link className='nav-link' to="/">Home</Link></li>
          <li><Link className='nav-link' to="/posts">Blog</Link></li>
          <li><Link className='nav-link' to="/author">Author</Link></li>
          <li><Link className='nav-link' to="/register">Signup</Link></li>
          <li><Link className='nav-link' to="/register">Login</Link></li>
          
        </ul>
      </div>
    </div>
  </header>
  )
}

export default Header