import React from "react";

function Links({ githubLink, linkedInLink }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={githubLink} >
      https://github.com/liza
      </a>
      <a href={linkedInLink} >
      https://www.linkedin.com/in/liza/
      </a>
    </div>
  );
}

export default Links;