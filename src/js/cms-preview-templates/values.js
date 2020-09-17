import React from "react";
import { List } from "immutable";

import Jumbotron from "./components/jumbotron";

const MediaBlock = ({ key, heading, subtext, text, image, alt, reverse }) => {
  const imageContainerClassName = reverse
    ? "ph3-m w-50-m pt4"
    : "ph3-m w-50-m pt4 order-last-m";
  const bgCol = reverse ? "bg-grey-1" : "bg-off-white";
  const hCol = reverse ? "colp" : "cols";
  const txtCol = reverse ? "colg4" : "colg3";
  console.log("image in Media Block Comp", image);
  return (
    <div className={bgCol} id={`Value${key}`}>
      <div className="flex-m mhn3-m mb4 ph3 pt4 mw7 center">
        <div className={imageContainerClassName}>
          {image ? <img src={image} alt={alt} className="db mb2" /> : null}
        </div>
        <div className="ph3-m w-50-m">
          <h3 className={`f2 b lh-title mb2 ${hCol}`}>{heading}</h3>
          <p className={txtCol}>{text}</p>
          <p className={txtCol}>{subtext}</p>
        </div>
      </div>
    </div>
  );
};

const Bio = ({ image, name, position, description }) => {
  return (
    <div className="ph3 flex-m mb4 w-100-m justify-center-m flex-column-m">
      <div className="flex-m ph3-m center space-around-m">
        <img src={image} alt={`${name} head shot`} className="db mb2" />

        <div className="ph3-m w-100-m">
          <h3 className="f3 b lh-title mb1 mt3 colp">{name}</h3>
          <h3 className="f3 b lh-title mb1 mt3 colp">{position}</h3>
        </div>
      </div>
      {(description || []).map((text) => (
        <p className="ph3-m center colg3">{text}</p>
      ))}
    </div>
  );
};

export default class ValuesPreview extends React.Component {
  render() {
    const { entry, getAsset } = this.props;

    let image = getAsset(entry.getIn(["data", "image"]));
    // NOTE: This hack is breaking the preview.
    // Bit of a nasty hack to make relative paths work as expected as a background image here
    // if (image && !image.fileObj) {

    //   image =
    //     window.parent.location.protocol +
    //     "//" +
    //     window.parent.location.host +
    //     image;
    // }

    const entryValues = entry.getIn(["data", "values"]);
    const values = entryValues ? entryValues.toJS() : [];
    console.log('values', values)

    const heading = entry.getIn(["data", "bio_heading"])
    console.log('heading', heading)

    return (
      <div>
        <Jumbotron image={image} />
        <div className="center">

          {values.map((value, i) => (
            <MediaBlock
              key={i}
              subtext={value.subtext}
              text={value.text}
              heading={value.heading}
              // TODO: THIS WILL NEED TO BE UPDATED TO JUST "value.image" once live site is updated with new config.yml
              image={value.image}
              alt={value.alt}
              reverse={i % 2 === 0}
            />
          ))}
        </div>
        {/* TODO: check if bio heading shows up after config.yml updates */}
        <h3 class="f2 b lh-title mb3 mt3 cols ph4-l mw7 center">
          {entry.getIn(["data", "bio_heading"])}
        </h3>
        {(entry.getIn(["data", "bios"]) || []).map((bio) => (
          <Bio
            name={bio.get("name")}
            position={bio.get("position")}
            description={(bio.get("description")||[]).map(desc=>desc.get("text"))}
            image={getAsset(bio.get("image"))}
          />
        ))}
      </div>
    );
  }
}
