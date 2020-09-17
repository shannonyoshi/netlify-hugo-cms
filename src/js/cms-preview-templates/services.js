import React from "react";
import format from "date-fns/format";

import Nav from "./components/nav";
import Jumbotron from "./components/jumbotron";
import Footer from "./components/footer.js";

// import ShortText from "./components/short-text"

export default class PostPreview extends React.Component {
  render() {
    const { entry, getAsset } = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));
    
    // Bit of a nasty hack to make relative paths work as expected as a background image here
    // if (image && !image.fileObj) {
    //   image =
    //   window.parent.location.protocol +
    //   "//" +
    //   window.parent.location.host +
    //   image;
    // }
    const primary = { bg: "bg-grey-1", h: "colp", text: "colg4" };
    const secondary = { bg: "bg-off-white", h: "cols", text: "colg3" };

    return (
      <div>
        <Nav/>
        <Jumbotron image={image} />
        {/* <ShortText heading={entry.getIn(["data", "intro", "heading"])} text={entry.getIn(["data", "intro", "text"])} blog_link={entry.getIn(["data", "intro", "blog_link"])} blog_text={entry.getIn(["data", "intro", "blog_text"])} /> */}

        <div className="flex-ns flex-wrap mhn2-ns mb3">
          {(entry.getIn(["data", "services_list"]) || []).map(
            (blurb, index) => (
              <div className="ph2-ns w-50-ns mb4" key={index}>
                <img
                  src={blurb.get("image") && getAsset(blurb.get("image"))}
                  alt={blurb.get("alt")}
                  className="center db mb3"
                  style={{ width: "240px" }}
                  />
               
                <p>{blurb.get("text")}</p>
              </div>
            )
          )}
        </div>
        {/* </div> */}
        {/* </div> */}

        <div className="mw7 center">
          <div className="mw6 ph3 mb3">
            <h3 className="f3 b lh-title mb2">
              {entry.getIn(["data", "main", "heading"])}
            </h3>
            <p>{entry.getIn(["data", "main", "description"])}</p>
          </div>
        </div>

        {/* <div className="mw7 center ph3 pv4">

        <div className="flex flex-wrap mhn1">
          <div className="w-100 w-50-ns ph1-ns">
            <img src={getAsset(entry.getIn(["data", "main", "image1", "image"]))}/>
          </div>

          <div className="w-100 w-50-ns ph1-ns">
            <img src={getAsset(entry.getIn(["data", "main", "image2", "image"]))}/>
          </div>

          <div className="w-100 ph1-ns">
            <img src={getAsset(entry.getIn(["data", "main", "image3", "image"]))}/>
          </div>
        </div>
      </div> */}

        <div className="pb4">
          {(entry.getIn(["data", "testimonials"]) || []).map(
            (testimonial, index) => (
              <div className="center mb3 ph3" key={index}>
                <blockquote className="bg-grey-1 primary pa3 mb3 br1 b mw6 center">
                  <p className="f4 mb0">“{testimonial.get("quote")}”</p>
                  <cite className="tr db grey-3">
                    {testimonial.get("author")}
                  </cite>
                </blockquote>
              </div>
            )
          )}
        </div>

      <Footer/>
      </div>
    );
  }
}
