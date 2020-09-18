import React from "react";
import format from "date-fns/format";

import Nav from "./components/nav";
import Jumbotron from "./components/jumbotron";
import LargeImage from "./components/large-image";
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

    // const printMap = (service) => {
    //   const someServiceInfo = service.map((serv) => {
    //     let serviceInfo = {};

    //     serviceInfo["layout"] = serv.get("layout");
    //     serviceInfo["heading"] = serv.get("heading");
    //     serviceInfo["description"] = (
    //       serv.get("description") || []
    //       ).map((desc) => desc.get("text"));
    //       if (serviceInfo["layout"] === "two-image") {
    //         const image1Obj = serv.get("image1");
    //         serviceInfo["image1"] = getAsset(image1Obj.get("image"));
    //         serviceInfo["alt1"] = image1Obj.get("alt");
    //       serviceInfo["text1"] = image1Obj.get("text");
    //       const image2Obj = serv.get("image2");
    //       serviceInfo["image2"] = getAsset(image2Obj.get("image"));
    //       serviceInfo["alt2"] = image2Obj.get("alt");
    //       serviceInfo["text2"] = image2Obj.get("text");
    //     } else {
    //       serviceInfo["image"] = getAsset(serv.get("image"));
    //       serviceInfo["alt"] = serv.get("alt");
    //     }
    //     return serviceInfo;
    //   });
    //   return someServiceInfo
    //   // console.log("someServiceInfo", someServiceInfo);
    // };

    const entryServices = entry.getIn(["data", "services_list"])
    // const services = entryServices ? entryServices.toJS() : [];
    // console.log("SERVICES", entryServices);
    const services = (entryServices? entryServices.toJS():[]).map((service)=>Object.values(service)[0])
  console.log('services', services)
    return (
      <div>
        <Nav />
        <Jumbotron image={image} />
        {/* <ShortText heading={entry.getIn(["data", "intro", "heading"])} text={entry.getIn(["data", "intro", "text"])} blog_link={entry.getIn(["data", "intro", "blog_link"])} blog_text={entry.getIn(["data", "intro", "blog_text"])} /> */}

        <div className="flex-ns flex-wrap mhn2-ns mb3">
        </div>

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

// const Service = (service, i) => {
//   const primary = { bg: "bg-grey-1", h: "colp", text: "colg4" };
//   const secondary = { bg: "bg-off-white", h: "cols", text: "colg3" };
//   console.log('service', service)
//   return <p>Service {i}</p>;
// };

// const ImageLR = ([colors], lr, heading, image, alt, description) => {
//   return (
//     <div className={`${colors[0]} pv4`}>
//       <div className="ph3 center mw7">
//         <h3 className={`${colors[1]} f2 b lh-title mb1`}>{heading}</h3>

//         <div className={`f${lr} w-50-l ph2-1 pr3`}>
//           <img src={image} alt={alt} className="mb3" />
//         </div>
//         {description ||
//           [].map((text) => <p className={`${colors[2]} ph2-l mw9`}>{text}</p>)}
//       </div>
//     </div>
//   );
// };
