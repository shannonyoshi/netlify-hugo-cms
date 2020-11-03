import React from "react";

export default class ShortText extends React.Component {
  render() {
    const { heading, text, blog_title, blog_link } = this.props;
    return (
      <div class="bg-grey-1 pv4">
        <div class="flex-l mhn1-l ph3 center mw7">
          <h2 class="f2 b lh-title mb2 w-40-l colp">{heading}</h2>
          <p class="w-60-l mb0 colg4">
            {text} {blog_link && blog_title? <a href={`${blog_link}`}>{blog_title}</a>: null}
          </p>
        </div>
      </div>
    );
  }
}
