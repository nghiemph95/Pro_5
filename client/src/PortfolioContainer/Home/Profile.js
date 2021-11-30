import React from "react";
import Typical from "react-typical";
import Button from "react-bootstrap/Button";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.facebook.com/nghiempham47/">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://www.instagram.com/nghiemilo/?hl=en">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Nghiem Pham</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Web Developer 💥",
                    2000,
                    "Full Stack Developer 🎯",
                    2000,
                    "NodeJS Dev 😎",
                    2000,
                    "AWS DevOps 🧑‍🚀",
                    2000,
                    "ReactJS Dev ⚛️",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>

          <div className="profile-option">
            <button className="btn primary-bth"> Hire Me </button>
            <a href="NG95.pdf" download="Nghiem_Pham NG95.pdf">
              <Button className="btn highlighted-btn">Get Resume</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
