import React from "react";
import people from "../assets/people.png";
import location from "../assets/location.png";
import event from "../assets/event.png";
import product from "../assets/product.png";

const Cards = () => {
  return (
    <div className="row mb-2 m-lg-5 m-md-3 m-1">
      <div className="col-md-6 mb-4">
        <div className="h-100 d-flex flex-column border rounded overflow-hidden shadow-sm">
          <div className="col p-4 d-flex flex-column flex-grow-1 position-static border border-2 rounded-3">
            <strong className="d-inline-block mb-2 d-flex justify-content-md-start align-items-center justify-content-center text-dark">
              <img
                className="me-md-4 me-2"
                width={"20px"}
                height={"20px"}
                src={people}
                alt="people"
              />
              People
            </strong>
            <p className="card-text mb-3">
              Find a teacher, coach, or expert for your hobby interest in your
              locality. Find a partner, teammate, accompanist or collaborator.
            </p>
            <button
              style={{ border: "2px solid #8064A2", color: "#8064A2" }}
              className="btn mt-auto w-50 fw-bolder"
            >
              Connect
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="h-100 d-flex flex-column border rounded overflow-hidden shadow-sm">
          <div className="col p-4 d-flex flex-column flex-grow-1 position-static border border-2 rounded-3">
            <strong className="d-inline-block mb-2 d-flex justify-content-md-start align-items-center justify-content-center text-dark">
              <img
                className="me-md-4 me-2"
                width={"20px"}
                height={"20px"}
                src={location}
                alt="location"
              />
              Place
            </strong>
            <p className="mb-3">
              Find a class, school, playground, auditorium, studio, shop or an
              event venue. Book a slot at venues that allow booking through
              hobbycue.
            </p>
            <button
              style={{ border: "2px solid #8064A2", color: "#8064A2" }}
              className="btn mt-auto w-50 fw-bolder"
            >
              Meet Up
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="h-100 d-flex flex-column border rounded overflow-hidden shadow-sm">
          <div className="col p-4 d-flex flex-column flex-grow-1 position-static border border-2 rounded-3">
            <strong className="d-inline-block mb-2 d-flex justify-content-md-start align-items-center justify-content-center text-dark">
              <img
                className="me-md-4 me-2"
                width={"20px"}
                height={"20px"}
                src={product}
                alt="product"
              />
              People
            </strong>
            <p className="mb-3">
              Find equipment or supplies required for your hobby. Buy, rent or
              borrow from shops, online stores or from community members.
            </p>
            <button
              style={{ border: "2px solid #8064A2", color: "#8064A2" }}
              className="btn mt-auto w-50 fw-bolder"
            >
              Get In
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="h-100 d-flex flex-column border rounded overflow-hidden shadow-sm">
          <div className="col p-4 d-flex flex-column flex-grow-1 position-static border border-2 rounded-3">
            <strong className="d-inline-block mb-2 d-flex justify-content-md-start align-items-center justify-content-center text-dark">
              <img
                className="me-md-4 me-2"
                width={"20px"}
                height={"20px"}
                src={event}
                alt="event"
              />
              People
            </strong>
            <p className="mb-3">
              Find events, meetups and workshops related to your hobby. Register
              or buy tickets online.
            </p>
            <button
              style={{ border: "2px solid #8064A2", color: "#8064A2" }}
              className="btn mt-auto w-50 fw-bolder"
            >
              Attend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
