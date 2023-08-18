import React from "react";
import "./SaimaZaki_Style3.css";
import piano from "../../assets/piano.webp";
import guitar from "../../assets/guitar.jpg";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import SaimaZaki_Button from "../0button/SaimaZaki_Button";

const SaimaZaki_progress = () => {
  return (
    // parent container
    <div className="parentt_container">
      <p>My Progress</p>

      <div className="container2">
        {/* child Container 1*/}
        <div className="child_container">
          {/* img div */}
          <div className="img_div">
            <img src={piano} className="piano" />
          </div>

          <div className="text_div_2">
            {/*1st text div */}

            <div className="text">
              {/* heading and icon div */}
              <div className="text_div">
                <div id="child_text" className="child_text" >Learning Piano Basics</div>

                <div className="name">John Smith</div>
              </div>

              <div className="icon_div">
                <h3 className="bookmark">
                  <BookmarkRoundedIcon />
                </h3>
              </div>
            </div>

            {/* 2nd text Div */}
            <div className="text_div3">
              {/* empty div */}
              <div className="empty"></div>
              <div className="name">62% Complete</div>
            </div>
          </div>
        </div>

        {/* child Container 2*/}
        <div className="child_container">
          {/* img div */}
          <div className="img_div">
            <img src={piano} className="piano" />
          </div>

          <div className="text_div_2">
            {/*1st text div */}

            <div className="text">
              {/* heading and icon div */}
              <div className="text_div">
                <div className="child_text">Advance Guitar Technology</div>

                <div className="name">Emily Devis</div>
              </div>

              <div className="icon_div">
                <h3 className="bookmark">
                  <BookmarkRoundedIcon />
                </h3>
              </div>
            </div>

            {/* 2nd text Div */}
            <div className="text_div3">
              {/* empty div */}
              <div className="empty"></div>
              <div className="name">62% Complete</div>
            </div>
          </div>
        </div>
      </div>
      <div className="view_button" >
        <SaimaZaki_Button text="View All" />
      </div>
    </div>
  );
};

export default SaimaZaki_progress;
