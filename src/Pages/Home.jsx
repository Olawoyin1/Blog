import React from 'react'
import Hero from '../Components/Hero'
import Featured from '../Components/Featured'
import Posts from '../Data'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundForward } from "react-icons/io";

const Home = () => {
  const latest = Posts.slice(0, 4)
  const lifestyle = Posts.filter((item) => item.category === "lifestyle");
  const technology = Posts.filter((item) => item.category === "Technology");
  // console.log(latest)
  

  return (
    <div>
        <Hero />
        <div className="container2 my-5">

          <h4 className="h-text fw-bold mt-5">Latest Post</h4>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 m-0 ">
            {
              latest.map(item => {
                return(
                  <Featured data={item} />
                )
              })
            }  
          
          </div>

          <div className="cat-header d-flex align-items-center justify-content-between">
            <h4 className='fw-bold mt-5'>Technology</h4>
            <Link className='nav-link' to="/posts">view all  <IoIosArrowRoundForward /></Link>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 m-0 ">
            
            {
              technology.map(item => {
                return(
                  <Featured data={item} />
                )
              })
            }  
          
          </div>



            
          <div className="cat-header d-flex align-items-center justify-content-between">
            <h4 className='fw-bold mt-5'>Lifestyle</h4>
            <Link className='nav-link' to="/posts">view all  <IoIosArrowRoundForward /></Link>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 m-0 ">
            
            {
              lifestyle.map(item => {
                return(
                  <Featured data={item} />
                )
              })
            }  
          
          </div>


        </div>

    </div>
  )
}

export default Home