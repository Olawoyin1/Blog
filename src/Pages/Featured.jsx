import React from "react";
import Posts from "../Data";

const Featured = () => {
    
  return (
    <div className="feattured">
      <div class="latest py-2 py-sm-5">
        <div class="container2">
          <h4 class="h-text fw-bold">Latest Post</h4>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 m-0 ">
        
            {/* <!-- ==========Grid Item Starts Here========= --> */}

            {
                Posts.splice(0, 5).map((item) => {
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
        </div>
      </div>
    </div>
  );
};

export default Featured;
