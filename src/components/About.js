import React from "react";
import Links from "./links";

function About() {

  const githubLink = "https://github.com/liza";
  const linkedInLink = "https://www.linkedin.com/in/liza/";

  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links githubLink={githubLink} linkedInLink={linkedInLink} />
    </div>
  );
}

export default About;
