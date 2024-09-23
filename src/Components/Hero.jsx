import React from 'react'

const Hero = () => {
  return (
    <section className="hero py-2 py-sm-5">
    <div className="container2">
      <div className="box" style={{background: ""}}>


        <div className="box-child2 d-flex d-md-none text-white d-flex align align-content-end justify-content-lg-end p-3 d-flex flex-column gap-3">
          <small className="text-white badge bg-primary">Technology</small>
            <h6 className="fw-bold w-md-50">The Impact of Technology on the Workplace: How Technology is Changing</h6>
            <div className="author d-flex align-items-center gap-5">
              <div className="author-about d-flex align-items-center gap-2">
                <img src="./images/profile.jpeg" className="author-image" alt="" />
                <small className="text-white">Olawoyin</small>
              </div>
              <div className="created">
                <small className="text-white">August 20, 2024</small>
              </div>
            </div>
        </div>


        <div className="d-none d-md-flex box-child content bg-white p-3 d-flex flex-column gap-3">
            <small className=" badge bg-primary">Technology</small>
            <h6 className="fw-bold">The Impact of Technology on the Workplace: How Technology is Changing</h6>
            <div className="author d-flex align-items-center justify-content-between">
              <div className="author-about d-flex align-items-center gap-2">
                <img src="./images/profile.jpeg" className="author-image" alt="" />
                <small className="name">Olawoyin</small>
              </div>
              <div className="created">
                <small className="text-muted">August 20, 2024</small>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero