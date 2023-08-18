import React from "react";
import "./SaimaZaki_Style.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SaimaZaki_Button from "../0button/SaimaZaki_Button";
import SaimaZaki_black from "../0button/SaimaZaki_black";

const SaimaZaki_form = () => {
  return (
    <div>
      {/* wrapper div */}
      <div className="bg_image">
        {/* container form div */}
        <div className="my_container">
          {/* line div */}
          <div className="line">
            <div className="thin_line" />
            <div className="thin_line" />
            <div className="thin_line" />
            <div className="thin_line" />
          </div>
          <p className="para">Skip</p>
          <h1>Welcome To Musify!</h1>
          <div className="my_icon">
            <div id="my_icon">
              <MusicNoteIcon fontSize="3000px" />
            </div>
            <div className="absolute">+</div>
          </div>

          {/* form input fields */}
          <div className="form_div">
            <form>
              <label>
                Full Name
                <br />
                <input type="text" placeholder="Enter Your Full Name"/>
              </label>
              <br />
              <label>
                Username: <br />
                <input type="text" placeholder="Enter Your Username" />
              </label>
              <br />
              <label>
                Location: <br />
                <input type="text" placeholder="Choose Your Location"/>
              </label>
              <br />
              <div className="button_div">
                <div>
                  <SaimaZaki_black text={"Back"} type="submit" />
                </div>

                <div>
                  <SaimaZaki_Button text={"Next"} type="reset" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaimaZaki_form;
