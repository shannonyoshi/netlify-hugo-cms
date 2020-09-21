import React from "react";

export default class TwoImage extends React.Component {
  render() {
    const {
      colors,
      heading,
      description,
      image1,
      image2,
    } = this.props;
    return (
      <div className={`${colors["bg"]} pv4`}>
        <div className="ph3 center mw7">
          <h3 className={`${colors["h"]} f2 b lh-title mb1`}>{heading}</h3>

          {/* map description */}
          {(description || []).map((desc, index) => (
            <p
              className={`${colors["text"]} ph3-l mw7 center`}
              key={`TwoImage${index}`}>
              {desc.text}
            </p>
          ))}

          <div className="flex-ns mhn2-ns mb3">
            <div className="w-50-ns ph2-ns">
              <img src={image1.image} alt={image1.alt} className="center db mb3 h5" />
              <p className={colors["text"]}>{image1.text}</p>
            </div>

            <div className="w-50-ns ph2-ns">
              <img src={image2.image} alt={image2.alt} className="center db mb3 h5" />
              <p className={colors["text"]}>{image2.text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
