import React from "react";
import Posts from "../Data";

const Featured = () => {

  const lifestyle = Posts.filter(item => item.category === 'lifestyle')
  const technology = Posts.filter(item => item.category === 'Technology')
    
  return (
    <div className="featured">
      <div class="latest py-2 py-sm-5">
        <div class="container2">
          <h4 class="h-text fw-bold">Latest Post</h4>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 m-0 ">
        
            {/* <!-- ==========Grid Item Starts Here========= --> */}

            {
                Posts.slice(0, 5).map((item) => {
                    return (
                        <div class="col mt-3 ps-0">
                            <div class="blog-image">
                                <img src={item.image} alt="" />
                            </div>
                            <div class="content p-3 d-flex flex-column gap-3">
                                <small class="badge bg-primary d-inline-flex">{item.category}</small>
                                <h6 class="fw-bold">{item.title}</h6>
                                <div class="author d-flex align-items-center justify-content-between">
                                <div class="author-about">
                                    <img
                                    src="./images/profile.jpeg"
                                    class="author-image"
                                    alt=""
                                    />
                                    <small class="name">{item.author}</small>
                                </div>
                                <div class="created">
                                    <small class="text-muted">August 20, 2024</small>
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
              <a href="blog" class="view-all" >view all</a>
            </div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 m-0 ">
              {
                lifestyle.slice(0, 5).map((item) => {
                  return (
                      <div class="col mt-3 ps-0">
                          <div class="blog-image">
                              <img src={item.image} alt="" />
                          </div>
                          <div class="content p-3 d-flex flex-column gap-3">
                              <small class="badge bg-primary d-inline-flex">{item.category}</small>
                              <h6 class="fw-bold">{item.title}</h6>
                              <div class="author d-flex align-items-center justify-content-between">
                              <div class="author-about">
                                  <img
                                  src="./images/profile.jpeg"
                                  class="author-image"
                                  alt=""
                                  />
                                  <small class="name">{item.author}</small>
                              </div>
                              <div class="created">
                                  <small class="text-muted">August 20, 2024</small>
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
              <a href="blog" class="view-all" >view all</a>
            </div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 m-0 ">
              {
                technology.slice(0, 5).map((item) => {
                  return (
                      <div class="col mt-3 ps-0">
                          <div class="blog-image">
                              <img src={item.image} alt="" />
                          </div>
                          <div class="content p-3 d-flex flex-column gap-3">
                              <small class="badge bg-primary d-inline-flex">{item.category}</small>
                              <h6 class="fw-bold">{item.title}</h6>
                              <div class="author d-flex align-items-center justify-content-between">
                              <div class="author-about">
                                  <img
                                  src="./images/profile.jpeg"
                                  class="author-image"
                                  alt=""
                                  />
                                  <small class="name">{item.author}</small>
                              </div>
                              <div class="created">
                                  <small class="text-muted">August 20, 2024</small>
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
