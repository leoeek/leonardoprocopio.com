import React from "react";
import profilePic from "../assets/profile-pic.jpg";
import { rhythm } from "../utils/typography";

class Bio extends React.Component {
  render() {
    const { lang } = this.props;

    const bioPTBr =
      "Apaixonado por códigos e todos os processos de criação! No momento estudando NodeJS e TDD para encarar os novos desafios.";
    const bioEn = "";

    const people = "Leonardo Procópio";

    return (
      <div
        style={{
          display: "flex",
          marginBottom: rhythm(2)
        }}
      >
        <img
          src={profilePic}
          alt={people}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: "50%"
          }}
        />
        <span style={{ maxWidth: 500 }}>
          <a href="https://github.com/leoeek">{people}</a>{" "}
          <p>{lang === "pt-br" ? bioPTBr : bioEn}</p>{" "}
        </span>
      </div>
    );
  }
}

export default Bio;
