

import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Résumé</p>
        <hr />

        <a
          className="button is-primary"
          href={process.env.PUBLIC_URL + "/Fergus__Illman - Resume 2023.pdf"}
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">Skills</p>
        <hr />
        <ul>
          <li>HTML, CSS, Javascript</li>
          <li>OpenAPI, LangChain, JSON</li>
          <li>React, Next.js</li>
          <li>Markdown</li>
          <li>Git</li>
          <li>Github Repo Management</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
