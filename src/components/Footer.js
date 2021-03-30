import React from "react";
import githubIcon from "../assets/github.png";
import twitterIcon from "../assets/twitter.png";
import linkedinIcon from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";

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
          <a
            href="mailto:leonardolp@gmail.com"
            rel="noopener noreferrer"
            title="Entre em contato!"
          >
            <img src={emailIcon} />
          </a>
        </div>
        <a
          href="https://github.com/leoeek"
          target="_blank"
          title="Veja o que estou fazendo no Github"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} />
        </a>{" "}
        &nbsp;&nbsp;{" "}
        <a
          href="https://www.linkedin.com/in/leonardo-proc%C3%B3pio-9b991936/"
          target="_blank"
          title="Vai poder ver minha foto de terno! É aqui no Linkedin!"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} />
        </a>{" "}
        &nbsp;&nbsp;{" "}
        <a
          href="https://www.twitter.com/eek_"
          target="_blank"
          title="No twitter twittando! (péssima essa)"
          rel="noopener noreferrer"
        >
          <img src={twitterIcon} />
        </a>
      </footer>
    );
  }
}

export default Footer;
