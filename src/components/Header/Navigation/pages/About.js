import React, { Component } from "react";
//import bioPic from "../../../../../assets/cover/bio-pic.png";
import bioPic from "../../../../assets/images/bio-pic.png";

class About extends Component {
  render() {
    return (
      <section className="my-5">
        <h1 id="about">About Me</h1>
        <img
          src={bioPic}
          className="my-2"
          style={{ width: "15%" }}
          alt="pic of author"
        />
        <p>
          I am a former project manager, recently turned full-stack web
          developer. I love working on strong, collaborative teams toward a
          common goal. Learning new web technologies is my latest passion, and I
          get great satisfaction completing unique projects.
        </p>
        <p>
          Though I grew up in the Midwest, I currently live in Southern Utah.
          When I am not in front of a computer, I enjoy spending time with my
          family, especially watching my kids perform their talents in singing,
          soccer, and gymnastics. Staying fit and serving in my church are also
          important to me.
        </p>
      </section>
    );
  }
}

export default About;
