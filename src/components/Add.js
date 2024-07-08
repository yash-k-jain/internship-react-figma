import React from "react";
import add from "../assets/add.png";

const Add = () => {
  return (
    <div className="mt-5 p-lg-5 p-md-4 p-2" style={{ background: "#F7FDFF" }}>
      <div className="container-fluid bg-light p-5 border border-2 rounded-3">
        <h1 className="fs-4 fw-bold d-flex justify-content-start align-items-center">
          <img src={add} alt="add" />
          <span className="ms-3">Add your own</span>
        </h1>
        <p className="fs-4">
          Using a series of utilities, you can create this jumbotron, just like
          the one in previous versions of Bootstrap. Check out the examples
          below for how you can remix and restyle it to your liking.
        </p>
        <span className="border border-2 border-primary fw-bolder p-2 px-5 rounded-3 text-primary" type="button">
          Add new
        </span>
      </div>
    </div>
  );
};

export default Add;
