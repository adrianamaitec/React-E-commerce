import React from "react";

function Nav() {
  return (
    <>
      {/* <!-- Navbar --> */}
      <div className="nav w-100 fixed-top bg-white shadow-sm">
        <nav className="navbar navbar-expand-lg py-3 align-items-center w-100 nav-wrapper">
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <!-- Mobile Logo --> */}
          <a href="#" className="navbar-brand mx-auto order-0 d-lg-none d-flex justify-content-center">
            <h2 className="m-0 fw-bold " style={{ letterSpacing: "2px" }}>
              React E-commerce
            </h2>
          </a>
          <ul className="d-lg-none d-flex align-items-center gap-3 ms-auto">
            <li className="nav-item">
              <a href="#">
                <i className="bi bi-search fs-5 text-dark"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" data-bs-toggle="modal" data-bs-target="#signupModal">
                <i className="bi bi-person fs-5 text-dark"></i>
              </a>
            </li>
            <li className="nav-item position-relative">
              <a href="#">
                <i className="bi bi-heart fs-5 text-dark"></i>
                <span className="position-absolute top-0 start-100 translate-middle cart-qount rounded-pill">
                  0
                </span>
              </a>
            </li>
            <li className="nav-item position-relative">
              <a href="#">
                <i className="bi bi-bag fs-5 text-dark"></i>
                <span className="position-absolute top-0 start-100 translate-middle cart-qount rounded-pill">
                  0
                </span>
              </a>
            </li>
          </ul>
          {/* <!-- Menu --> */}
          <div
            className="collapse navbar-collapse justify-content-center align-items-center"
            id="navbarNav"
          >
            <ul className="navbar-nav nav-menu align-items-center gap-2">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Store
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            {/* <!-- Logo --> */}
            <a href="#" className="navbar-brand order-0 d-none d-lg-flex mx-auto">
              <h2 className="m-0 fw-bold " style={{ letterSpacing: "2px" }}>
                React E-commerce
              </h2>
            </a>

            <ul className="navbar-nav d-none d-lg-flex align-items-center gap-4 ms-auto">
              <li className="nav-item">
                <a href="#">
                  <i className="bi bi-search fs-5 text-dark"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#signupModal"
                  href="#"
                >
                  <i className="bi bi-person fs-5 text-dark"></i>
                </a>
              </li>
              <li className="nav-item position-relative">
                <a href="#">
                  <i className="bi bi-heart fs-5 text-dark"></i>
                  <span className="position-absolute top-0 start-100 translate-middle cart-qount rounded-pill">
                    0
                  </span>
                </a>
              </li>
              <li className="nav-item position-relative">
                <a href="#">
                  <i className="bi bi-bag fs-5 text-dark"></i>
                  <span className="position-absolute top-0 start-100 translate-middle cart-qount rounded-pill">
                    0
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* <!-- Sign Up Modal --> */}
      <div
        className="modal fade"
        id="signupModal"
        tabIndex="-1"
        aria-labelledby="signupModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <div className="modal-header border-0">
              <h5 className="modal-title fw-bold" id="signupModalLabel">
                Sign Up
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>
                <p>
                  {" "}
                  By signing up, you agree to our
                  <a href="#" className="text-success text-decoration-none">
                     Terms
                  </a>{" "}
                  &{" "}
                  <a href="#" className="text-success text-decoration-none">
                    Privacy Policy
                  </a>
                  .
                </p>
                <button type="button" className="btn btn-dark w-100">
                  Sign Up
                </button>
              </form>
              <div className="text-center mt-3">
                <p>
                  Already have an account?{" "}
                  <a href="#" className="text-success fw-bold">
                    Sign In
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
