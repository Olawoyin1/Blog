import React from 'react'
import Featured from '../Components/Featured'
import Posts from '../Data'

const Blog = () => {
 

  return (
    <div className='my-4'>
      <div className="container2">

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 m-0 ">
          {
            Posts.map((item) => {
              return (
                <Featured data={item} />
              )
            })
          } 
        </div>
      </div>
    </div>
  )
}

export default Blog