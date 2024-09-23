import React from 'react'
import { CiSearch } from "react-icons/ci";

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
          <li><a className="nav-link m-0 " href="/">Home</a></li>
          <li><a className="nav-link m-0 " href="blog">Blog</a></li>
          <li><a className="nav-link m-0 " href="category">Author</a></li>
          <li><a className="nav-link m-0 " href="register">signup</a></li>
          <li><a className="nav-link m-0 " href="register">Login</a></li>
          
        </ul>
      </div>
    </div>
  </header>
  )
}

export default Header