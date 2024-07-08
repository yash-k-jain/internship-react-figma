import React from "react";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";

const Form = () => {
  const [selectedAuth, setSelectedAuth] = React.useState("signin");
  return (
    <div className="mt-4 mx-lg-5 m-1">
      <span
        style={{
          cursor: "pointer",
          color: `${selectedAuth === "signin" ? "#8064A2": "#000000"}`,
          borderBottom: `${selectedAuth === "signin" ? "3px solid #8064A2": "none"}`,
        }}
        onClick={() => setSelectedAuth("signin")}
        className={`fw-bold me-4 pb-2 `}
      >
        Sign IN
      </span>
      <span
        style={{
          cursor: "pointer",
          color: `${selectedAuth === "joinin" ? "#8064A2": "#000000"}`,
          borderBottom: `${selectedAuth === "joinin" ? "3px solid #8064A2": "none"}`,
        }}
        onClick={() => setSelectedAuth("joinin")}
        className={`fw-bold me-4 pb-2`}
      >
        Join IN
      </span>
      <div className="mt-4">
        <button className="btn btn-outline-primary w-100 d-flex justify-content-center align-items-center">
          <img className="text-baseline" src={google} alt="google" />
          <span className="mx-auto">Continue With Google</span>
        </button>
        <button className="btn btn-outline-primary w-100 d-flex justify-content-center align-items-center mt-3">
          <img src={facebook} alt="google" />
          <span className="mx-auto">Continue With Facebook</span>
        </button>
      </div>
      <div className="d-flex align-items-center mt-3 mb-3">
        <div className="border-bottom flex-grow-1"></div>
        <div className="mx-3">or connect with</div>
        <div className="border-bottom flex-grow-1"></div>
      </div>
      <form className="w-100">
        <div className="mb-3">
          <input
            type="email"
            className="form-control rounded-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control rounded-3"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        {selectedAuth === "joinin" ? (
          <div className="d-flex justify-content-end">
            <p style={{ fontSize: "10px" }} className="text-primary fw-bold">
              Password Strength
            </p>
          </div>
        ) : (
          <div className="mb-3 form-check d-flex justify-content-between align-items-center">
            <div>
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label
                className="form-check-label fs-6 fs-sm-5 fs-md-4"
                htmlFor="exampleCheck1"
              >
                Remember Me
              </label>
            </div>
            <span className="fs-6 fs-sm-5 fs-md-4">Forgot Password?</span>
          </div>
        )}
        <button
          style={{ backgroundColor: "#8064A2" }}
          type="submit"
          className="btn text-light fw-bolder w-100"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Form;
