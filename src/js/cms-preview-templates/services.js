import React from "react";
import format from "date-fns/format";

import Nav from "./components/nav";
import Jumbotron from "./components/jumbotron";
import ImageLorR from "./components/image-l-or-r";
import LargeImage from "./components/large-image";
import TwoImage from "./components/two-image";
import Footer from "./components/footer.js";

// import ShortText from "./components/short-text"

export default class ServicesPreview extends React.Component {
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

    const entryServices = entry.getIn(["data", "services_list"]);
    console.log('entryServices', entryServices)
    const services = entryServices ? entryServices.toJS() : []
    // console.log('servicesObject', servicesObject)
    // const services = (entryServices ? entryServices.toJS() : []).map(
    //   (service) => Object.values(service)
    // );
    // console.log('services', services)
    return (
      <div>
        <Nav />
        <Jumbotron image={image} />
        {/* NOTE: This will be added once blog post, "What is Blended Learning" is added  */}
        {/* <ShortText heading={entry.getIn(["data", "intro", "heading"])} text={entry.getIn(["data", "intro", "text"])} blog_link={entry.getIn(["data", "intro", "blog_link"])} blog_text={entry.getIn(["data", "intro", "blog_text"])} /> */}

        {services.map((service, index) => (
          <LayoutService
            service={service}
            index={index}
            key={`Layout${index}`}
          />
        ))}

        <div className="bg-off-white pv4 mw7 center">
          <h3 className="f2 b lh-title mb1 cols center">Testimonials</h3>
          {(entry.getIn(["data", "testimonials"]) || []).map(
            (testimonial, index) => (
              <div className="center mb3 ph3" key={index}>
                <blockquote className="bg-grey-1 primary pa3 mb3 br1 b mw6 center">
                  <p className="f6 mb0">“{testimonial.get("quote")}”</p>
                  <cite className="tr db grey-3 f6">
                    {testimonial.get("author")}, {testimonial.get("title")},
                    <a href="#"> {testimonial.get("company")}</a>
                  </cite>
                </blockquote>
              </div>
            )
          )}
        </div>

        <Footer />
      </div>
    );
  }
}

const LayoutService = ({ service, index }) => {
  const primary = { bg: "bg-grey-1", h: "colp", text: "colg4" };
  const secondary = { bg: "bg-off-white", h: "cols", text: "colg3" };
  const colors = index % 2 === 0 ? primary : secondary;
  switch (service.layout) {
    case "large-image":
      return <LargeImage colors={colors} {...service} />;
    case "two-image":
      return <TwoImage colors={colors} {...service} />;
    case "image-left" || "image-right":
      const direction = service.layout === "image-left" ? "l" : "r";
      return <ImageLorR colors={colors} {...service} direction={direction} />;
    default:
      return <p>Default LayoutService case</p>
  }
};
