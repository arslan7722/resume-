import React from "react";
import "./skills.css";
import { createStyles } from "@mantine/core";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiReact } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { SiAdobephotoshop, SiVisualstudiocode } from "react-icons/si";

const useStyles = createStyles((theme) => ({
  general: {
    backgroundColor: "#111",
    height: "125vh",
    color: "#fff",
  },

  infoProgres: {
    display: "flex",
    alignItems: "center",
  },

  main: {
    width: "100%",
    height: "35vh",
    display: "flex",
    alignItems: "center",
  },

  main2: {
    marginTop: "12vh",
    height: "25vh",
    display: "flex",
    alignItems: "center",
  },

  array: {
    marginLeft: "10vw",
  },

  array2: { 
    width: "35vw",
    marginLeft: "10vw"
  },

  progressStyle: {
    marginRight: "10vw",
    marginTop: "5vh",
  },

  progressStyle2: {
    marginLeft: "10vw",
    marginTop: "12vh",
  },

  progStyle: {
    width: "35vw",
    height: "0.7vh",
    borderRadius: "0",
    color: "#fff",
  },
}));


export function Skills() {
  const { classes } = useStyles();

  return (
    <div id="skills">
      <div className={classes.general}>
        <div data-aos="fade-down" className="main-skills">
          <h2 className="theme">My skills</h2>
        </div>
        <div className={classes.infoProgres}>
          <div className={classes.main}>
            <div data-aos="fade-right" className={classes.array}>
              <h2>My creative skills & experiences.</h2>
              <span>
                I use HTML, CSS, and JavaScript to produce responsive websites
                and web apps that provide users the best and most appropriate
                experience suited to their device and browser.I write standards
                based code that is semantic, accessible, search-engine friendly,
                easy to maintain, cross browser compatible, and performant.
              </span>
            </div>
          </div>
          <div data-aos="fade-left" className={classes.progressStyle}>
            <div className="general-progStle">
              <div className="thm-text-name">
                <h2 className="thm-coef">HTML</h2>
                <AiFillHtml5 size={25} />
                <h3 className="h3-procent">90%</h3>
              </div>
              <progress
                value="90"
                max="100"
                className={classes.progStyle}
              ></progress>
            </div>
            <div className="general-progStle">
              <div className="thm-text-name">
                <h2 className="thm-coef">CSS</h2>
                <DiCss3 size={25} />
                <h3 className="h3-procent">70%</h3>
              </div>
              <progress
                value="70"
                max="100"
                className={classes.progStyle}
              ></progress>
            </div>
            <div className="general-progStle">
              <div className="thm-text-name">
                <h2 className="thm-coef">Bootstarp</h2>
                <FaBootstrap size={25} />
                <h3 className="h3-procent">80%</h3>
              </div>
              <progress
                value="80"
                max="100"
                className={classes.progStyle}
              ></progress>
            </div>
            <div className="general-progStle">
              <div className="thm-text-name">
                <h2 className="thm-coef">JavaScript</h2>
                <TbBrandJavascript size={25} />
                <h3 className="h3-procent">60%</h3>
              </div>
              <progress
                value="60"
                max="100"
                className={classes.progStyle}
              ></progress>
            </div>
            <div className="general-progStle">
              <div className="thm-text-name">
                <h2 className="thm-coef">React</h2>
                <DiReact size={25} />
                <h3 className="h3-procent">40%</h3>
              </div>
              <progress
                value="40"
                max="100"
                className={classes.progStyle}
              ></progress>
            </div>
          </div>
        </div>

        {/* ============================= 2 Information ============================= */}
        <div data-aos="fade-right" className={classes.infoProgres}>
          <div className={classes.progressStyle2}>
            <div className="general-progStle">
              <div className="thm-text-name">
                <h2 className="thm-coef">Adobe Photoshop</h2>
                <SiAdobephotoshop size={25} />
                <h3 className="h3-procent2">50%</h3>
              </div>
              <progress
                value="50"
                max="100"
                className={classes.progStyle}
              ></progress>
            </div>
            <div className="general-progStle">
              <div className="thm-text-name">
                <h2 className="thm-coef">Git / Github</h2>
                <AiFillGithub size={25} />
                <h3 className="h3-procent2">60%</h3>
              </div>
              <progress
                value="60"
                max="100"
                className={classes.progStyle}
              ></progress>
            </div>
            <div className="general-progStle">
              <div className="thm-text-name">
                <h2 className="thm-coef">Visual Studio Code</h2>
                <SiVisualstudiocode size={25} />
                <h3 className="h3-procent2">50%</h3>
              </div>
              <progress
                value="50"
                max="100"
                className={classes.progStyle}
              ></progress>
            </div>
          </div>
          <div data-aos="fade-left" className={classes.main2}>
            <div className={classes.array2}>
              <h2>My creative skills & experiences.</h2>
              <span>
                I am also experienced in building systems that implement
                business logic and interact with server-side technology via APIs
                and tools such as React and Redux, as well as testing code using
                tools such as Jasmine. I have a special interest in use of
                animation on the web. I particularly like working on websites
                that have seamless transitions and require high-level
                performance to maintain a smooth and appealing website.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
