import React from "react";

export default class ImageLeftOrRight extends React.Component {
  render() {
    const { colors, image, alt, heading, description, direction } = this.props;
    return (
      <div className={`${colors["bg"]} pv4`}>
        <div className="ph3 center mw7">
          <h3 className={`${colors["h"]} f2 b lh-title mb1`}>{heading}</h3>

          <div className={`f${direction} w-50-l ph2-1 pr3`}>
            <img src={image} alt={alt} className="mb3" />
          </div>

          {description.map((desc, index) => (
            <p className={`${colors["text"]} center mw7 ph3-l`} key={`ilr${index}`}>{desc.text}</p>
          ))}
        </div>
      </div>
    );
  }
}
