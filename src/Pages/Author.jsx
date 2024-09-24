import React from "react";
import Posts from "../Data";
import Featured from "../Components/Featured";

const Author = () => {
  const owner = Posts.filter(item => item.author === "Gbolahan")
  return (
    <div class="author-main  py-5">
      <div class="container2">
        <div class="row m-0">
          <div class="col-md-8 ">
            <div class="all-about-user d-flex flex-column gap-3 align-items-center justify-content-center">
              <div class="d-flex flex-column align-items-center justify-content-center gap-2">
                <div class="user-image">
                  <img src="./images/profile.jpeg" alt="" />
                </div>
                <p class="fw-bold">Olawoyin Gbolahan</p>
                <small>@Olawoyin0013</small>
                <button>Edit Profile</button>
              </div>

              <div class="user-about">
                <h5 class="fw-bold">About</h5>
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Temporibus maiores deleniti minus, accusamus perspiciatis
                  natus saepe alias laborum architecto cupiditate provident.
                  Molestias qui expedita voluptate deleniti recusandae nesciunt
                  sit animi.
                </small>
              </div>
            </div>


            <h4 className="h-text fw-bold mt-5">Latest Post</h4>
          <div className="row row-cols-1 row-cols-sm-2  m-0 ">
            {
              owner.map(item => {
                return(
                  <Featured data={item} />
                )
              })
            }  
          
          </div>
            


          </div>

          <article class="col-md-4 mt-4 m-md-0">
            <div class="recent rounded">
              <div class="r-header">
                <p class="p-2 fw-bold">RECENT ACTIVITIES</p>
              </div>
              <div class="recent-items d-flex flex-column gap-3 p-3">
                <div class="recent-item p-3 border">
                  <div class="author d-flex align-items-center gap-2">
                    <div class="author-about d-flex align-items-center gap-2">
                      <img
                        src="./images/profile.jpeg"
                        class="author-image"
                        alt=""
                      />
                    </div>
                    <div class="created d-flex flex-column">
                      <small class="">@Olawoyin</small>
                      <small class="text-muted smaller">1 minute ago</small>
                    </div>
                  </div>
                  <small class="fw-bold">comment on a post</small>
                  <small>
                    <em>
                      "The Impact of Technology on the Workplace: How Technology
                      is Changing"
                    </em>
                  </small>

                  <div class="user-comment p-2 mt-2 rounded">
                    <small class="">This is great, I love it</small>
                  </div>
                </div>

                <div class="recent-item p-3 border">
                  <div class="author d-flex align-items-center gap-2">
                    <div class="author-about d-flex align-items-center gap-2">
                      <img
                        src="./images/profile.jpeg"
                        class="author-image"
                        alt=""
                      />
                    </div>
                    <div class="created d-flex flex-column">
                      <small class="">@Olawoyin</small>
                      <small class="text-muted smaller">1 minute ago</small>
                    </div>
                  </div>
                  <small class="fw-bold">comment on a post</small>
                  <small>
                    <em>
                      "The Impact of Technology on the Workplace: How Technology
                      is Changing"
                    </em>
                  </small>

                  <div class="user-comment p-2 mt-2 rounded">
                    <small class="">This is great, I love it</small>
                  </div>
                </div>

                <div class="recent-item p-3 border">
                  <div class="author d-flex align-items-center gap-2">
                    <div class="author-about d-flex align-items-center gap-2">
                      <img
                        src="./images/profile.jpeg"
                        class="author-image"
                        alt=""
                      />
                    </div>
                    <div class="created d-flex flex-column">
                      <small class="">@Olawoyin</small>
                      <small class="text-muted smaller">1 minute ago</small>
                    </div>
                  </div>
                  <small class="fw-bold">comment on a post</small>
                  <small>
                    <em>
                      "The Impact of Technology on the Workplace: How Technology
                      is Changing"
                    </em>
                  </small>

                  <div class="user-comment p-2 mt-2 rounded">
                    <small class="">This is great, I love it</small>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Author;
