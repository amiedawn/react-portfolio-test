import React from "react";
import bioPic from "../assets/images/bio-pic.png";

const About = () => (
  <div
    className="text-center"
    style={{
      backgroundColor: "#122240",
      color: "#c0a98e",
      padding: "35px",
    }}
  >
    <h1 id="about">About Me</h1>
    <img
      src={bioPic}
      style={{ width: "50%", padding: "35px" }}
      alt="pic of author"
    />
    <p
      style={{
        fontSize: "20px",
      }}
    >
      I am a former project manager, recently turned full-stack web developer. I
      love working on strong, collaborative teams toward a common goal. Learning
      new web technologies is my latest passion, and I get great satisfaction
      completing unique projects.
    </p>
    <p
      style={{
        fontSize: "20px",
      }}
    >
      Though I grew up in the Midwest, I currently live in Southern Utah. When I
      am not in front of a computer, I enjoy spending time with my family,
      especially watching my kids perform their talents in singing, soccer, and
      gymnastics. Staying fit and serving in my church are also important to me.
    </p>
  </div>
);

export default About;
