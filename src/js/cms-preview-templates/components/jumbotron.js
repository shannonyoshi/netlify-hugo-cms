import React from "react";

export default class Jumbotron extends React.Component {
  render() {
    const { image } = this.props;
    return (
      <div>
        <div
          className="pv6 pv6-l ph3 bg-center cover"
          style={{
            backgroundImage: image && `url(${image})`,
          }}>
        </div>
      </div>
    );
  }
}
