import React from "react";

export default class LargeImage extends React.Component {
  render() {
    const { colors, image, alt, heading, description } = this.props;
    const middle = Math.floor(description.length / 2);

    return (
      <div className={`${colors["bg"]} pv4`}>
        <div className="flex-ns flex-wrap mhn2-ns mb3 mw7 center">
          <div className="ph2-ns w-100-ns">
            <h3 className={`${colors["h"]} f2 b lh-title mb1 center"`}>
              {heading}
            </h3>
            {description.map((desc, index) =>
              index === middle ? (
                <div>
                  <img src={image} alt={alt} className="center db mb3" />
                  <p className={`${colors["text"]} center mw7 ph3-l`}>
                    {desc.text}
                  </p>
                </div>
              ) : (
                <p className={`${colors["text"]} center mw7 ph3-l`}>
                  {desc.text}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}
