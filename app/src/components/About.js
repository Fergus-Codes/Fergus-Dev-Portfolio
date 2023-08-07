import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">
        Tech nerd and something of a Full-stack developer.
      </p>
      <hr />
      <img
        className="my-pic"
        src={process.env.PUBLIC_URL + "/img/Profile.jpg"}
        alt="Fergus Illman"
      />
      <p className="content is-italic mt-4">
        Hello, I'm Fergus. I love all things tech and am a bit of a nerd.
      </p>
      <p className="content">
        I have a strong foundation in people management, full-stack development,
        a passion for technology, and with the imminent completion of my coding
        bootcamp at the end of August, I am eager to showcase my skills and
        dedication.
      </p>
    </div>
  );
}

export default About;
