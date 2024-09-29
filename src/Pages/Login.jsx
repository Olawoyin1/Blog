import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="user-reg py-5">
    <div className="container2">
      <div className="row m-0 h-user">

          <div className="col-md-6 p-0 reg-image">
            <img src="../images/blog4.jpg" alt="" />
          </div>


            <div className="col-md-6 bg-white d-flex align-items-center justify-content-center p-4">
              
                <form action="" className="user-reg-form d-flex flex-column gap-2">
                  <div>
                    <h4 className="fw-bold">Login To Blog</h4>
                    <small>Enter Your Details Below</small>
                  </div>
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <button className="mt-2">Login</button>
                  <small>Not Created an Account yet? <Link to="/register">Signup</Link></small>
                </form>
            </div>
      </div>
    </div>
  </div>
  )
}

export default Login