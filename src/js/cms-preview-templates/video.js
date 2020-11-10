import React from "react";
import Nav from "./components/nav";
import Footer from "./components/footer";

export default class VideoPreview extends React.Component {
  render() {
    const { entry, widgetFor, getAsset } = this.props;
    return (
      <div>
        <Nav />
        <div class="bg-grey-1">
          <div class="mw7 center ph3 pv4">
            <h1 class="f2 lh-title b mb3 colp">
              {entry.getIn(["data", "title"])}
            </h1>
            {widgetFor("body")}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
