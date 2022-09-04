import React, { useState } from "react";
import "./aboutMe.css";
// import mePhoto from "./image/";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Tooltip } from "@mantine/core";

const AboutMe = () => {
  const [size] = useState("large");
  return (
    <div id="about">
      <div className="all-array">
        <div className="main-about">
          <h2 className="title">About me</h2>
        </div>
      </div>
      <div className="general-info">
        <div className="info-main">
          {/* <Tooltip label="Bekjan Amantur Arslan">
            <img
              data-aos="zoom-in"
              src={mePhoto}
              alt="me"
              className="meImage"
            />
          </Tooltip> */}
          <div className="text-info">
            <h2 className="title-hi">Hi</h2>
            <div className="type-text-all">
              <span className="text first-text">I'm Aslan and I'm a </span>
              <span className="text sec-text">Front end Developer</span>
            </div>
            <h3 className="theme-me-about">Front-end development</h3>
            <div>
              I work to make a better web; one that is fast, easy to use,
              beautiful, accessible to all, and frustration-free. I create
              successful websites that are fast, easy to use, and built with
              best practices.My main experience is in front-end development but
              I also have a passion for design. I believe having experience in
              both design and development allows for making the most optimal
              user experiences.
            </div>
            {/* <Button
              className="button-download"
              shape="round"
              icon={<DownloadOutlined />}
              size={size}
              href={mePhoto}
              download
            >
              Download CV
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
