import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="center">
      <div className="hello">{"<Hello>!</Hello>"}</div>
      <div>
        <div className="intro">
          I'm <b>Milind Vishnoi</b>,
        </div>
        <div className="desc">
          a software engineer, recently graduated from UofT. I build software
          for web and mobile to automate/simplify life
        </div>
      </div>
      <div className="reach-out">
        Get in touch 👉{" "}
        <a href="mailto:milindvishnoi@gmail.com">milindvishnoi@gmail.com</a>
      </div>
    </div>
  );
}
