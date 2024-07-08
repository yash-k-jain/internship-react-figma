import React from "react";
import quotes from "../assets/icons8-quotes-32.png";
import play from "../assets/play.png";
import avatar from "../assets/avatar.png";
import microphone from "../assets/microphone.png";

const Testimonial = () => {
  return (
    <div
      style={{ backgroundColor: "#FFFFFF" }}
      className="mb-2 m-lg-5 m-md-3 m-1"
    >
      <div
        className="p-4  d-flex justify-content-center align-items-center flex-column d-md-block"
        style={{ backgroundColor: "#F7F5F9" }}
      >
        <div className="d-flex justify-content-start align-items-center">
          <img src={quotes} alt="quotes" />
          <span className="ms-3 fs-4 fw-bold">Testimonials</span>
        </div>

        <p className="mt-4 fs-6 text-secondary">
          In a fast growing and ever changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like minded people.
          Websites like hobbycue.com is a great service which helps me get in
          touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and
          services that I can avail, which I can be assured is going to be of
          great quality as it comes recommended by people of the hobbycue
          community. To have discussions, to get visibility, and to be able to
          safely explore various hobbies and activities in my city, all under
          one roof, is an excellent idea and I highly recommend it. 0:00 Shubha
          Nagarajan Classical Dancer
        </p>

        <div className="d-flex flex-sm-row flex-column-reverse">
          <div
            style={{
              backgroundColor: "#CCC1DA",
            }}
            className="p-3 d-flex flex-row align-items-center rounded-3 w-100 mt-4 mt-sm-0 flex-grow-1"
          >
            <div
              style={{ width: "20px", height: "20px" }}
              className="bg-light p-3 rounded-circle d-flex justify-content-center align-items-center flex-grow-1"
            >
              <img width={"15px"} height={"15px"} src={play} alt="play" />
            </div>
            <input
              id="range"
              className="ms-3 w-100"
              type="range"
              min="0"
              max="100"
              step={1}
            />
            <label htmlFor="range" className="ms-3">
              0:00
            </label>
            <div className=" position-relative ms-3">
              <img width={"50px"} height={"50px"} src={avatar} alt="avatar" />
              <img
                width={"15px"}
                height={"15px"}
                className="position-absolute start-0 bottom-0 mb-1 ms-1"
                src={microphone}
                alt="microphone"
              />
            </div>
          </div>
          <div className="ms-sm-3 d-flex align-items-center">
            <img width={"100px"} height={"100px"} src={avatar} alt="avatar" />
            <div className="d-flex flex-column flex-grow-1">
              <span style={{ color: "#8064A2" }} className="fs-6 fw-bold text-nowrap">
                Shubha Nagarajan
              </span>
              <span className="text-secondary text-nowrap text-secondary fw-bold">
                Classical Dancer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
