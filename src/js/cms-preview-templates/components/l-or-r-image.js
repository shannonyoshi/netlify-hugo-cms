import React from "react";

export default class LargeImage extends React.Component {
  render() {
    const { colors, image, alt, heading, description } = this.props;
    return (
      <div class={`${colors[bg]} pv4`}>
        <div class="flex-ns flex-wrap mhn2-ns mb3 mw7 center">
          <div class="ph2-ns w-100-ns">
            <h3 class={`${colors[h]} f2 b lh-title mb1 center"`}>{heading}</h3>
            {description.map((text, index) => {
              {
                index === Math.floor(description.length / 2) ? (
                  <img src={image} alt={alt} class="center db mb3" />
                ) : null;
              }

              <p class={`${colors[text]} center mw7 ph3-l`}>{text}</p>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
