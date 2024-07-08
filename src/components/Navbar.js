import React from "react";
import hobbyLogo from "../assets/HobbyCue Logo.png";
import compass from "../assets/compass.png";
import notification from "../assets/notification.png";
import cart from "../assets/cart.png";
import bookmark from "../assets/bookmark.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <img
          className="mx-xl-5 mx-1 custom-logo"
          src={hobbyLogo}
          alt="hobbyLogo"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse mx-xl-4 mx-lg-2 mt-4 mt-lg-0 d-xl-flex justify-content-between align-items-center"
          id="navbarSupportedContent"
        >
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          <div className="d-flex mt-3 mt-lg-0 flex-column flex-sm-row justify-content-sm-between align-items-sm-center justify-content-center align-items-center">
            <div className="dropdown ms-xl-4 mt-sm-0 mt-2">
              <button
                className="btn btn-outline-secondary dropdown-toggle border border-0 custom-btn d-flex justify-content-center align-items-center"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img className="me-3" src={compass} alt="compass" />
                <span>Explore</span>
              </button>
              <ul
                className="dropdown-menu mt-3"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <span className="dropdown-item border-bottom">
                    People - Community
                  </span>
                </li>
                <li>
                  <span className="dropdown-item border-bottom">
                    Places - Venue
                  </span>
                </li>
                <li>
                  <span className="dropdown-item border-bottom">
                    Programs - Events
                  </span>
                </li>
                <li>
                  <span className="dropdown-item border-bottom">
                    Products - Store
                  </span>
                </li>
                <li>
                  <span className="dropdown-item">Blogs</span>
                </li>
              </ul>
            </div>

            <div className="dropdown ms-xl-4 ms-lg-1 mt-sm-0 mt-2">
              <button
                className="btn btn-outline-secondary dropdown-toggle border border-0 custom-btn d-flex justify-content-center align-items-center"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img className="me-3" src={compass} alt="compass" />
                <span>Hobbies</span>
              </button>
              <ul
                className="dropdown-menu mt-3"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <span className="dropdown-item border-bottom">
                    People - Community
                  </span>
                </li>
                <li>
                  <span className="dropdown-item border-bottom">
                    Places - Venue
                  </span>
                </li>
                <li>
                  <span className="dropdown-item border-bottom">
                    Programs - Events
                  </span>
                </li>
                <li>
                  <span className="dropdown-item border-bottom">
                    Products - Store
                  </span>
                </li>
                <li>
                  <span className="dropdown-item">Blogs</span>
                </li>
              </ul>
            </div>

            <div className="mx-xl-3 d-flex mt-sm-0 mt-2">
              <img
                width={"20px"}
                height={"20px"}
                className="ms-3"
                src={bookmark}
                alt="bookmark"
              />
              <img
                width={"20px"}
                height={"20px"}
                className="ms-3"
                src={notification}
                alt="notification"
              />
              <img
                width={"20px"}
                height={"20px"}
                className="ms-3"
                src={cart}
                alt="cart"
              />
            </div>

            <button
            //   style={{ width: "30%" }}
              className="btn btn-outline-primary mx-xl-4 mx-lg-1 mt-sm-0 mt-4"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
