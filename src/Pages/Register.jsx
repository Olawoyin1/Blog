import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [login, setLogin] = useState(true)
  return (
    <div class="user-reg py-5">
      <div class="container2">
        <div class="row m-0 h-user">

            <div class="col-md-6 p-0 reg-image">
              <img src="../images/blog3.jpg" alt="" />
            </div>


              <div class="col-md-6 bg-white d-flex align-items-center justify-content-center">
                 
                <form action="" class="user-reg-form d-flex flex-column gap-2">
                    <div>
                      <h4 class="fw-bold">Create an Account</h4>
                      <small>Enter Your Details Below</small>
                    </div>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button class="mt-2">Create Account</button>
                    <button>Sign up with Google</button>
                    <small>Already have an acount? <Link to="/login">Login</Link></small>
                </form> 
                 
               
              </div>
        </div>
      </div>
    </div>
  )
}

export default Register