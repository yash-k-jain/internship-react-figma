import React from "react";
import arrowUp from "../assets/arrowUp.png";
import hobby from "../assets/kids-painting-hobby-association-2018-child-hobby-horse-school-learning-png-clipart.jpg";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedln from "../assets/linkedln.png";
import github from "../assets/github.png";
import twitter from "../assets/twitter.png";
import down from "../assets/down.png";

const MobileFooter = () => {
  return (
    <div>
      <div className="mb-2 m-lg-5 m-md-3 m-3">
        <div>
          <h1 className="fs-3 fst-italic">
            Your <span className="text-primary fw-bolder">Hobby</span>, Your{" "}
            <span className="text-danger fw-bolder">Community</span>
          </h1>
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-primary mt-3">Get Started</button>
            <button
              style={{ width: "30px", height: "30px" }}
              type="button"
              className="rounded-circle border-0 d-flex justify-content-center align-items-center me-5"
              data-bs-container="body"
              data-bs-toggle="popover"
              data-bs-placement="top"
              title="Popover title"
              data-bs-content="Scroll to Top"
            >
              <img width={"20px"} height={"20px"} src={arrowUp} alt="arrowUp" />
            </button>
          </div>
          <img
            className="mt-5"
            width={"100%"}
            height={"250rem"}
            src={hobby}
            alt="hobby"
          />
        </div>
        <footer className="text-center text-lg-start bg-body-tertiary text-muted">
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-12 col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 d-flex justify-content-start align-items-start flex-column">
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <button
                      className="btn fw-bolder "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Hobbycue
                    </button>
                    <button
                      className="btn fw-bolder "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <img
                        width={"20px"}
                        height={"20px"}
                        src={down}
                        alt="down"
                      />
                    </button>
                  </div>
                  <div className="collapse" id="collapseExample">
                    <div className="card card-body border border-0 mt-2 d-flex justify-content-start align-items-start flex-column">
                      <p>
                        <span className="text-reset">About Us</span>
                      </p>
                      <p>
                        <span className="text-reset">Our Services</span>
                      </p>
                      <p>
                        <span className="text-reset">Work With Us</span>
                      </p>
                      <p>
                        <span className="text-reset">FAQ</span>
                      </p>
                      <p>
                        <span className="text-reset">Contact Us</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 d-flex justify-content-start align-items-start flex-column">
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <button
                      className="btn fw-bolder "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample2"
                      aria-expanded="false"
                      aria-controls="collapseExample2"
                    >
                      How Do I
                    </button>
                    <button
                      className="btn fw-bolder "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample2"
                      aria-expanded="false"
                      aria-controls="collapseExample2"
                    >
                      <img
                        width={"20px"}
                        height={"20px"}
                        src={down}
                        alt="down"
                      />
                    </button>
                  </div>
                  <div className="collapse" id="collapseExample2">
                    <div className="card card-body border border-0 mt-2 d-flex justify-content-start align-items-start flex-column">
                      <p>
                        <span className="text-reset">Pricing</span>
                      </p>
                      <p>
                        <span className="text-reset">Sign Up</span>
                      </p>
                      <p>
                        <span className="text-reset">Add a listing</span>
                      </p>
                      <p>
                        <span className="text-reset">Clain Listing</span>
                      </p>
                      <p>
                        <span className="text-reset">Post A Query</span>
                      </p>
                      <p>
                        <span className="text-reset">Add a Blog Post</span>
                      </p>
                      <p>
                        <span className="text-reset">Other Queries</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 d-flex justify-content-start align-items-start flex-column">
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <button
                      className="btn fw-bolder "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample3"
                      aria-expanded="false"
                      aria-controls="collapseExample3"
                    >
                      Quick Links
                    </button>
                    <button
                      className="btn fw-bolder "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample3"
                      aria-expanded="false"
                      aria-controls="collapseExample3"
                    >
                      <img
                        width={"20px"}
                        height={"20px"}
                        src={down}
                        alt="down"
                      />
                    </button>
                  </div>
                  <div className="collapse" id="collapseExample3">
                    <div className="card card-body border border-0 mt-2 d-flex justify-content-start align-items-start flex-column">
                      <p>
                        <span className="text-reset">Listings</span>
                      </p>
                      <p>
                        <span className="text-reset">Blog Posts</span>
                      </p>
                      <p>
                        <span className="text-reset">Shops / Store</span>
                      </p>
                      <p>
                        <span className="text-reset">Community</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-5 col-lg-6 mx-auto mb-4 d-flex justify-content-start align-items-start flex-column ms-3">
                  <h6 className="text-uppercase text-dark fw-bolder mb-4">
                    Social media
                  </h6>
                  <div className="d-flex justify-content-between align-items-center flex-grow-1 w-100">
                    <span className="me-4 text-reset">
                      <img
                        src={facebook}
                        alt="facebook"
                        width={"20px"}
                        height={"20px"}
                      />
                    </span>
                    <span className="me-4 text-reset">
                      <img
                        src={google}
                        alt="google"
                        width={"20px"}
                        height={"20px"}
                      />
                    </span>
                    <span className="me-4 text-reset">
                      <img
                        src={twitter}
                        alt="twitter"
                        width={"20px"}
                        height={"20px"}
                      />
                    </span>
                    <span className="me-4 text-reset">
                      <img
                        src={github}
                        alt="github"
                        width={"20px"}
                        height={"20px"}
                      />
                    </span>
                    <span className="me-4 text-reset">
                      <img
                        src={instagram}
                        alt="instagram"
                        width={"20px"}
                        height={"20px"}
                      />
                    </span>
                    <span className="me-4 text-reset">
                      <img
                        src={linkedln}
                        alt="linkedln}"
                        width={"20px"}
                        height={"20px"}
                      />
                    </span>
                  </div>

                  <h6 className="text-uppercase text-dark fw-bolder mb-4 mt-5">
                    Invite Friends
                  </h6>
                  <div
                    style={{ border: "2px solid #8064A2" }}
                    className="d-flex rounded-3 w-100"
                  >
                    <input
                      placeholder="Email ID"
                      className="rounded-start border-0 flex-grow-1 p-2"
                      type="text"
                    />
                    <button
                      style={{ backgroundColor: "#8064A2" }}
                      className="rounded-end border-0 btn-primary pe-3 d-flex align-items-center"
                    >
                      <span>Invite</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © Purple Cues Private Limited
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MobileFooter;
