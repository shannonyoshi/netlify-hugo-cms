import React from "react";

export default class LargeImage extends React.Component {
  render() {
    const { colors, image, alt, heading, description, direction } = this.props;
    return (
      <div class={`${colors["bg"]} pv4`}>
        <div class="ph3 center mw7">
          <h3 class={`${colors["h"]} f2 b lh-title mb1`}>{heading}</h3>

          <div class={`f${direction} w-50-l ph2-1 pr3`}>
            <img src={image} alt={alt} class="mb3" />
          </div>

          {description.map((desc, index) => (
            <p class={`${colors["text"]} center mw7 ph3-l`}>{desc.text}</p>
          ))}
        </div>
      </div>
    );
  }
}
