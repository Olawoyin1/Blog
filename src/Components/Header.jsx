import React from 'react'

const Header = () => {
  return (
    <header>
    <div className="container2">
      <div className="d-flex header align-items-center justify-content-between">
        <div className="logo fw-bold">Blog</div>
        <form action="" className="form">
          <i className="uil uil-search"></i>
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