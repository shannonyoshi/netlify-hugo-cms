import React from "react";

export default class TwoImage extends React.Component {
  render() {
    const {
      colors,
      heading,
      description,
      image1,
      alt1,
      text1,
      image2,
      alt2,
      text2,
    } = this.props;
    return (
      <div className={`${colors[bg]} pv4`}>
        <div className="ph3 center mw7">
          <h3 className={`${colors[h]} f2 b lh-title mb1`}>{heading}</h3>

          {/* map description */}
          {(description || []).map((text, index) => (
            <p
              className={`${colors[text]} ph3-l mw7 center`}
              key={`TwoImage${index}`}>
              {text}
            </p>
          ))}

          <div className="flex-ns mhn2-ns mb3">
            <div className="w-50-ns ph2-ns">
              <img src={image1} alt={alt1} className="center db mb3 h5" />
              <p className={colors[text]}>{text1}</p>
            </div>

            <div className="w-50-ns ph2-ns">
              <img src={image2} alt={alt2} className="center db mb3 h5" />
              <p className={colors[text]}>{text2}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
