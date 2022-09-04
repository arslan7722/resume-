import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div data-aos="fade-down" className="main-skills">
        <h2 className="theme-portfolio">Portfolio</h2>
      </div>
      <div className="general-portfolio">
        <div data-aos="fade-down-right" className="container">
          <div className="card-wrapper">
            <div className="user-pic">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <div className="name">
              <h3>Mersedes</h3>
              <p>Web sait</p>
            </div>
            <div className="social-details">
              <div className="post">
                <h3>
                  <img
                    src="https://mui.com/static/logo.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </h3>
                <p>Mui</p>
              </div>
              {/* <div className="followers">
                <h3>
                  <img
                    src="https://d2og9lpzrymesl.cloudfront.net/r/lv-tutorial/img/logo.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </h3>
                <p>Video JS player</p>
              </div> */}
              <div className="following">
                <h3>
                  <img
                    src="https://www.gstatic.com/devrel-devsite/prod/v17bab36d69ae03fcc913f41eaedd7c01378ceed3d66f27cd213f7054697e46ba/firebase/images/touchicon-180.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </h3>
                <p>Firebase</p>
              </div>
            </div>
            <div className="card-btn">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://github.com/arslan7722/mersedesproject";
                }}
              >
                GitHub
              </button>
            </div>
          </div>
        </div>

        {/* 2 portfolio */}

        <div data-aos="fade-down-left" className="container">
          <div className="card-wrapper">
            <div className="user-pic2">
              <img
                src="https://c.tenor.com/smiobvpel7IAAAAC/hertz-avis.gifhttps://c.tenor.com/smiobvpel7IAAAAC/hertz-avis.gif"
                alt=""
              />
            </div>
            <div className="name">
              <h3>Car rental</h3>
            </div>
            <div className="social-details">
              <div className="post">
                <h3>
                  <img
                    src="https://mui.com/static/logo.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </h3>
                <p>Mui</p>
              </div>
              <div className="following">
                <h3>
                  <img
                    src="https://www.pngall.com/wp-content/uploads/2/Credit-Card.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </h3>
                <p>Credit cards</p>
              </div>
            </div>
            <div className="card-btn">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://github.com/arslan7722/hakatonfinal";
                }}
              >
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
