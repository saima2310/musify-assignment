import React from "react";
import "./SaimaZaki_Style.css";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PianoIcon from '@mui/icons-material/Piano';
import AirlinesIcon from '@mui/icons-material/Airlines';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HeadsetIcon from '@mui/icons-material/Headset';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const SaimaZaki_news = () => {
  return (
    <div className="parent_container">
      <p>Latest News</p>
      <div className="container">
        <div className="icon">
          <div className="color">
            <ShowChartIcon
              color="black"
              className="icon_size"
              fontSize="30px"
            />
          </div>
          Musicians
        </div>

        {/* 2 */}
        <div className="icon">
          <div className="color">
            <PianoIcon
              color="black"
              className="icon_size"
              fontSize="30px"
            />
          </div>
          Instruments
        </div>


        {/* 3 */}
        <div className="icon">
          <div className="color">
            <AirlinesIcon
              color="black"
              className="icon_size"
              fontSize="30px"
            />
          </div>
          Journey
        </div>


        {/* 4 */}
        <div className="icon">
          <div className="color">
            <MusicNoteIcon
              color="black"
              className="icon_size"
              fontSize="30px"
            />
          </div>
          Music Notes
        </div>


        {/* 5 */}
        <div className="icon">
          <div className="color">
            <HeadsetIcon
              color="black"
              className="icon_size"
              fontSize="30px"
            />
          </div>
          Practices
        </div>


        {/* 6 */}
        <div className="icon">
          <div className="color">
            <LightbulbIcon
              color="black"
              className="icon_size"
              fontSize="30px"
            />
          </div>
          Tips
        </div>


        {/* 7 */}
        <div className="icon">
          <div className="color">
            <NewspaperIcon
              color="black"
              className="icon_size"
              fontSize="30px"
            />
          </div>
          Updates
        </div>

      </div>
    </div>
  );
};

export default SaimaZaki_news;
