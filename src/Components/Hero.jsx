import React from 'react'

const Hero = () => {
  return (
    <section class="hero py-2 py-sm-5">
    <div class="container2">
      <div class="box" style={{background: ""}}>


        <div class="box-child2 d-flex d-md-none text-white d-flex align align-content-end justify-content-lg-end p-3 d-flex flex-column gap-3">
          <small class="text-white badge bg-primary">Technology</small>
            <h6 class="fw-bold w-md-50">The Impact of Technology on the Workplace: How Technology is Changing</h6>
            <div class="author d-flex align-items-center gap-5">
              <div class="author-about d-flex align-items-center gap-2">
                <img src="./images/profile.jpeg" class="author-image" alt="" />
                <small class="text-white">Olawoyin</small>
              </div>
              <div class="created">
                <small class="text-white">August 20, 2024</small>
              </div>
            </div>
        </div>


        <div class="d-none d-md-flex box-child content bg-white p-3 d-flex flex-column gap-3">
            <small class=" badge bg-primary">Technology</small>
            <h6 class="fw-bold">The Impact of Technology on the Workplace: How Technology is Changing</h6>
            <div class="author d-flex align-items-center justify-content-between">
              <div class="author-about d-flex align-items-center gap-2">
                <img src="./images/profile.jpeg" class="author-image" alt="" />
                <small class="name">Olawoyin</small>
              </div>
              <div class="created">
                <small class="text-muted">August 20, 2024</small>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero