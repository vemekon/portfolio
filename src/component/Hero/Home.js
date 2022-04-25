import React from "react";
import "./Home.css";
import hero from "../pic/hero.png";
import skill1 from "../pic/skill1.png";
import skill2 from "../pic/skill2.png";
import skill3 from "../pic/skill3.png";
import { Typewriter } from "react-simple-typewriter";
import { DiJavascript } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { GrNode } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO THE ENDLESS WEB-ECOSYSTEM</h3>
            <h1>
              Hi, I’m <span>Samuel</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[
                    " Professional Coder.",
                    " Developer.",
                    " UI Designer.",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              A front-end developer and general doodler with endless appetite to
              use today's software tools to solve humanity's hurdles.{" "}
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>MY TOOLS</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <i className="tools">
                      {" "}
                      <DiJavascript />
                    </i>
                  </button>
                  <button className="btn_shadow">
                    <i className="tools">
                      {" "}
                      <GrNode />
                    </i>
                  </button>
                  <button className="btn_shadow">
                    <i className="tools">
                      {" "}
                      <GrReactjs />
                    </i>
                  </button>
                </div>
              </div>
              <div className="col_1">
                <h4>BEST SKILL ON</h4>
                <button className="btn_shadow">
                  <i className="tools">
                    {" "}
                    <SiMongodb />
                  </i>
                </button>
                <button className="btn_shadow">
                  <i className="tools">
                    {" "}
                    <IoLogoCss3 />
                  </i>
                </button>
                <button className="btn_shadow">
                  <i className="tools">
                    {" "}
                    <FaHtml5 />
                  </i>
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
