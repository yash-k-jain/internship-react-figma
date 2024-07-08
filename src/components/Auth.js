import React from "react";
import Form from "./Form";
import hobby from "../assets/kids-painting-hobby-association-2018-child-hobby-horse-school-learning-png-clipart.jpg";

const Auth = () => {
  return (
    <div style={{ backgroundColor: "#F7F5F9" }} className="container-fluid">
      <div
        className="row"
        // style={{
        //   backgroundImage: `url(${hobby})`,
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <div className="col-lg-6 col-md-6 my-5">
          <h1 className="fst-italic fs-2 fw-bolder">
            Explore your <span className="text-primary">hobby</span> or{" "}
            <span style={{ color: "#8064A2" }}>passion</span>
          </h1>
          <p>
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </p>
          <p>
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
          <div>
            <img className="img-fluid" src={hobby} alt="Hobby" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 my-5 d-flex">
          <div className="w-100">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
