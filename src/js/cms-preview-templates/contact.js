import React from "react";

import Nav from "./components/nav";
import Jumbotron from "./components/jumbotron";
import Footer from "./components/footer";

const ContactEntry = ({ heading, text }) => (
  <div>
    <h4 className="f4 b lh-title mb2 primary">{heading}</h4>
    <p className="colg4">{text}</p>
  </div>
);

const ContactEntries = ({ data }) =>
  data && data.length > 0 ? (
    <div className="flex-column-ns mb3">
      {data.map(({ heading, text }) => (
        <ContactEntry heading={heading} text={text} />
      ))}
    </div>
  ) : (
    ""
  );

export default class ContactPreview extends React.Component {
  render() {
    const { entry, getAsset, widgetFor } = this.props;
    const entryContactEntries = entry.getIn(["data", "contact_entries"]);
    const contactEntries = entryContactEntries
      ? entryContactEntries.toJS()
      : [];
    return (
      <div>
        <Nav />

        <div className="ph3 bg-grey-1">
        <div class="center mw6 pv3">
          <img
            src={getAsset(entry.getIn(["data", "logo"]))}
            alt="Training in the 21st Century Logo"
            className="db w4 center pv4"
          />
          <div className="center mw6 pv3">
            {widgetFor("body")}
            <ContactEntries data={contactEntries} />
          </div>
        </div>
        </div>

        <Jumbotron image={getAsset(entry.getIn(["data", "image"]))}/>
      <Footer/>
      </div>
    );
  }
}
