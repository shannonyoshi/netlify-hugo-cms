import React from "react";

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="overflow-x-scroll overflow-x-visible-ns flex justify-between items-center center bg-white divider-grey relative">
        {/* <!-- Logo --> */}
        <a href="/" className="pa1 db mr4 h-100 w4 flex-none">
          <img
            src="/img/logo.svg"
            alt="Training in the 21st Century logo"
            className="br0 db mb0 w-100"
          />
        </a>

        {/* <!-- Primary Nav --> */}
        <ul className="flex-ns b grey-3" id="nav">
          <li>
            <a href="/" className="pa3 no-underline db colp raise">
              Home
            </a>
          </li>

          <li>
            <a href="/services" className="pa3 no-underline db colp raise">
              Services
            </a>
          </li>

          <li>
            <a href="/values" className="pa3 no-underline db colp raise">
              About Us
            </a>
          </li>

          {/* <!-- <li><a href="/post" className="pa3 no-underline db colp raise">Blog</a></li> --> */}

          <li>
            <a href="/contact" className="pa3 no-underline db colp raise">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
