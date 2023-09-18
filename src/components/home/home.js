import React from "react";
import "./home.css";
import TypeWritter from "../typewritter/TypeWritter";

export default function Home() {
  return (
    <div className="center">
      <div className="intro">
        <TypeWritter word="<Hello>!</Hello>" />
        <div>
          <div className="intro-name">
            I'm <b>Milind Vishnoi</b>,
          </div>
          <div className="intro-desc">
            a software engineer, recently graduated from UofT. I build software
            for web and mobile to automate/simplify life 👨‍💻
          </div>
        </div>
        <div className="intro-reachout">
          Get in touch 👉{" "}
          <a href="mailto:milindvishnoi@gmail.com">milindvishnoi@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
