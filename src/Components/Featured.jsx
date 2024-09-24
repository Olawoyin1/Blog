import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Featured = ({ data }) => {

  return (
    <div key={data.id} className="col mt-3 ps-0">
      <div className="blog-image">
        <img src={data.image} alt="" />
      </div>
      <div className="content p-3 d-flex flex-column gap-3">
        <small className="badge bg-primary d-inline-flex">
          {data.category}
        </small>
        <Link href={`posts/${data.id}`} className="fw-bold text-dark">
          {data.title}
        </Link>
        <div className="author d-flex align-items-center justify-content-between">
          <div className="author-about">
            <img src="./images/profile.jpeg" className="author-image" alt="" />
            <small className="name">{data.author}</small>
          </div>
          <div className="created">
            <small className="text-muted">August 20, 2024</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
