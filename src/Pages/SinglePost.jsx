import React from 'react'
import Posts from '../Data';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
    const { id } = useParams();

    const singlePost = Posts.find((item) => item.id === id);

  

   
  return (
    <div>

    </div>
  )
}

export default SinglePost