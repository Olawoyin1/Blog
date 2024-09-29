import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="py-4">
    <div className="container2">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3  py-sm-2 m-0">

        <div className="col-lg-4 d-flex flex-column ps-0 gap-3 mt-3 text-center text-sm-start">
          <h6 className="fw-bold">About</h6>
          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste reiciendis incidunt ratione pariatur eum alias architecto repudiandae totam officia aperiam!</small>
          <small><b>Email:</b> yustee2017@gmail.com</small>
          <small><b>Phone: </b>+234 816 802 8145</small>
        </div>



        <div className="d-flex setwidth gap-5 justify-content-evenly p-0">
            
            <div className="col-lg-2 ps-0 mt-3  text-sm-start">
              <h6 className="fw-bold">Category</h6>
              <ul className="p-0 d-flex flex-column gap-2 mt-3">
                <li><Link className='nav-link' to="/posts">Lifestyle</Link></li>
                <li><Link className='nav-link' to="/posts">Technology</Link></li>
                <li><Link className='nav-link' to="/posts">Blog</Link></li>
                <li><Link className='nav-link' to="/posts">Travel</Link></li>
                <li><Link className='nav-link' to="/posts">Business</Link></li>
                <li><Link className='nav-link' to="/posts">Economy</Link></li>
                <li><Link className='nav-link' to="/posts">Sports</Link></li>
              </ul>
            </div>

            <div className="col-lg-2 ps-0 mt-3 text-sm-start">
                <h6 className="fw-bold">Quick Links</h6>
                <ul className="p-0 d-flex flex-column gap-2 mt-3">
                  <li><Link className='nav-link' to="/">Home</Link></li>
                  <li><Link className='nav-link' to="/login">Login</Link></li>
                  <li><Link className='nav-link' to="register">Signup</Link></li>
                  <li><Link className='nav-link' to="posts">Archived</Link></li>
                  <li><Link className='nav-link' to="author">Author</Link></li>
                  <li><Link className='nav-link' to="/">Contact</Link></li>
                </ul>
              </div>
        </div>
        
        
        <div className="col-lg-4 d-flex align-items-center justify-content-center ps-0 mt-3">
          <div className="bg-white text-center rounded p-3">
            <h6 className="fw-bold">Weekly Newsletter</h6>
            <small>Get a blog article and offers via email</small>
            <form action="" className="mt-3">
              <input type="email" placeholder="Your Email" />
              <button className="btn btn-primary mt-2">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>

  )
}

export default Footer