import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      This project is coded by
      <a
        href="https://esthers-portfolio-project.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Esther Omouwho{" "}
      </a>{" "}
      it is open-sourced on{" "}
      <a
        href="https://github.com/Omouwho/weather-app-react2"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://omouwhos-react-weather-app.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Netlify
      </a>
    </div>
  );
}
