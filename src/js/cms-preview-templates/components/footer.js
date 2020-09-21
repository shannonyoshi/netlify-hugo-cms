import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-black ph3 pv4 white">
        <div className="mw7 center pt3">
          <div className="measure-narrow center mb4">
            <img
              src="/img/logo-alt.png"
              alt="Training in the 21st Century logo"
              className="db w4 center mb4 br0"
            />
          </div>

          <div className="flex-ns justify-around">
            <div>
              <h3 className="f4 b lh-title mb1 primary">Menu</h3>
              <ul className="mb3">
                <li>
                  <a href="/" className="link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/services" className="link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/values" className="link">
                    About Us
                  </a>
                </li>
                {/* <!-- <li><a href="/blog" className="link">Blog</a></li> --> */}
                <li>
                  <a href="/contact" className="link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="f4 b lh-title mb2 primary">Contact Information</h3>
              <p className="ma0">info@traininginthe21stcentury.com</p>
              <p className="ma0">(415)215-3634</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
