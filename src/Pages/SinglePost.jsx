import React from 'react'
import Posts from '../Data';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
    const { id } = useParams();
    // console.log(id)

    const singlePost = Posts.find(item => item.id === id);

    // console.log(singlePost);

   
  return (
    <section className="post py-4">
    <div className="container3 d-flex flex-column gap-3 ">
        <small className="text-white badge bg-primary">Technology</small>
        <h4 className="fw-bolder w-md-50">The Impact of Technology on the Workplace: How Technology is Changing</h4>
        <div className="author d-flex align-items-center gap-5">
            <div className="author-about d-flex align-items-center gap-2">
              <img src="../images/profile.jpeg" className="author-image" alt="" />
              <small className="">Olawoyin</small>
            </div>
            <div className="created">
              <small className="">August 20, 2024</small>
            </div>
        </div>
        <div className="post-image"><img src={singlePost.image} alt=""/></div>

       

        <div className="post-content">
            <p className="lead">Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.    One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>

            <div className="ads py-2 py-sm-4">
                <div className="container">
            
                  <div className="ads-box">
                    <small>Advertisement</small>
                    <p className="fw-bold">You can place ads</p>
                  </div>
                </div>
            </div>

            <p className="lead">Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.  One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>

            <div className="post-comments my-4">
                <h4 className="my-2">Comments</h4>
                <div className="comment-box bg-white p-4 d-flex flex-column gap-4">

                    <div className="comment">
                        <div className="author d-flex align-items-center gap-2">
                            <div className="author-about d-flex align-items-center gap-2">
                              <img src="../images/profile.jpeg" className="author-image" alt="" />
                            </div>
                            <div className="created d-flex flex-column">
                                <small className="">@Olawoyin</small>
                                <small className="text-muted smaller">1 minute ago</small>
                            </div>
                        </div>
                        <div className="comment-text">
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, sunt facilis quae ipsum unde natus reiciendis repellendus vel modi inventore.</small>
                        </div>

                    </div>

                    <div className="comment">
                        <div className="author d-flex align-items-center gap-2">
                            <div className="author-about d-flex align-items-center gap-2">
                              <img src="../images/profile.jpeg" className="author-image" alt="" />
                            </div>
                            <div className="created d-flex flex-column">
                                <small className="">@Olawoyin</small>
                                <small className="text-muted smaller">9 minute ago</small>
                            </div>
                        </div>
                        <div className="comment-text">
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, sunt facilis quae ipsum unde natus reiciendis repellendus vel modi inventore.</small>
                        </div>

                    </div>

                    <div className="comment">
                        <div className="author d-flex align-items-center gap-2">
                            <div className="author-about d-flex align-items-center gap-2">
                              <img src="../images/profile.jpeg" className="author-image" alt="" />
                            </div>
                            <div className="created d-flex flex-column">
                                <small className="">@Olawoyin</small>
                                <small className="text-muted smaller">14 minute ago</small>
                            </div>
                        </div>
                        <div className="comment-text">
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, sunt facilis quae ipsum unde natus reiciendis repellendus vel modi inventore.</small>
                        </div>

                    </div>



                </div>
                <div className="your-message mt-3">
                    <form action="">
                        <input type="text" className="border-0 border-bottom message-input p-4"  placeholder="Write your message here..."/>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </section>
  )
}

export default SinglePost