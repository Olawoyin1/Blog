import React from "react";
import Posts from "../Data";
import { IoIosArrowRoundForward } from "react-icons/io";

const Featured = () => {

  const lifestyle = Posts.filter(item => item.category === 'lifestyle')
  const technology = Posts.filter(item => item.category === 'Technology')
    
  return (
    <div className="featured">
      <div className="latest py-2 py-sm-5">
        <div className="container2">
          <h4 className="h-text fw-bold">Latest Post</h4>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 m-0 ">
        
            {/* <!-- ==========Grid Item Starts Here========= --> */}

            {
                Posts.slice(0, 5).map((item) => {
                    return (
                        <div key={item.id} className="col mt-3 ps-0">
                            <div className="blog-image">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="content p-3 d-flex flex-column gap-3">
                                <small className="badge bg-primary d-inline-flex">{item.category}</small>
                                <a href={`posts/${item.id}`} className="fw-bold text-dark">{item.title}</a>
                                <div className="author d-flex align-items-center justify-content-between">
                                <div className="author-about">
                                    <img
                                    src="./images/profile.jpeg"
                                    className="author-image"
                                    alt=""
                                    />
                                    <small className="name">{item.author}</small>
                                </div>
                                <div className="created">
                                    <small className="text-muted">August 20, 2024</small>
                                </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
            {/* <!-- ==========Grid Item Ends Here========= --> */}
          </div>

          {/* ==========LIFESTYLE STARTS HERE================ */}
          <div className="lifestyle my-5">
            <div className="cat-header d-flex align-items-center justify-content-between">
              <h4 className="fw-bold">Lifestyle</h4>
              <a href="blog" className="view-all" >view all <IoIosArrowRoundForward /></a>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 m-0 ">
              {
                lifestyle.slice(0, 5).map((item) => {
                  return (
                      <div key={item.id} className="col mt-3 ps-0">
                          <div className="blog-image">
                              <img src={item.image} alt="" />
                          </div>
                          <div className="content p-3 d-flex flex-column gap-3">
                              <small className="badge bg-primary d-inline-flex">{item.category}</small>
                              <a href={`posts/${item.id}`} className="fw-bold text-dark">{item.title}</a>
                              <div className="author d-flex align-items-center justify-content-between">
                              <div className="author-about">
                                  <img
                                  src="./images/profile.jpeg"
                                  className="author-image"
                                  alt=""
                                  />
                                  <small className="name">{item.author}</small>
                              </div>
                              <div className="created">
                                  <small className="text-muted">August 20, 2024</small>
                              </div>
                              </div>
                          </div>
                      </div>
                  )
              })
              }
            </div>
          </div>
          {/* ==========LIFESTYLE ENDS HERE================ */}

          {/* ==========TECHNOLOGY STARTS HERE================ */}
          <div className="lifestyle my-5">
            <div className="cat-header d-flex align-items-center justify-content-between">
              <h4 className="fw-bold">Technology</h4>
              <a href="blog" className="view-all" >view all <IoIosArrowRoundForward /></a>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 m-0 ">
              {
                technology.slice(0, 5).map((item) => {
                  return (
                      <div key={item.id} className="col mt-3 ps-0">
                          <div className="blog-image">
                              <img src={item.image} alt="" />
                          </div>
                          <div className="content p-3 d-flex flex-column gap-3">
                              <small className="badge bg-primary d-inline-flex">{item.category}</small>
                              <a href={`posts/${item.id}`} className="fw-bold text-dark">{item.title}</a>
                              <div className="author d-flex align-items-center justify-content-between">
                              <div className="author-about">
                                  <img
                                  src="./images/profile.jpeg"
                                  className="author-image"
                                  alt=""
                                  />
                                  <small className="name">{item.author}</small>
                              </div>
                              <div className="created">
                                  <small className="text-muted">August 20, 2024</small>
                              </div>
                              </div>
                          </div>
                      </div>
                  )
              })
              }
            </div>
          </div>
          {/* ==========TECHNOLOGY ENDS HERE================ */}


        </div>
      </div>
    </div>
  );
};

export default Featured;
