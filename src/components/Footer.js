import React from "react";

import { rhythm } from "../utils/typography";

class Footer extends React.Component {
  render() {
    let { lang } = this.props;

    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1)
        }}
      >
        <div style={{ float: "right" }}>
          <a href="mailto:leonardolp@gmail.com" rel="noopener noreferrer">
            {lang === "pt-br" ? "contato" : "contact"}
          </a>
        </div>
        <a
          href="https://github.com/leoeek"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{" "}
        &bull;{" "}
        <a
          href="https://www.linkedin.com/in/leonardo-proc%C3%B3pio-9b991936/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>{" "}
        &bull;{" "}
        <a
          href="https://www.twitter.com/eek_"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>
      </footer>
    );
  }
}

export default Footer;
