import React from "react";
import "./SaimaZaki_Style.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

const SaimaZaki_courses = () => {
  return (
    <div className="parentt_container">
      <p>Featured Courses</p>
      {/* container */}
      <div className="container">
        {/* image1 div */}
        <div className="image">
          <img src={image1} />
        </div>

        {/* image2 div */}
        <div className="image">
          <img src={image2} />
        </div>

        {/* image3 div */}
        <div className="image">
          <img src={image3} />
        </div>

        {/* image4 div */}
        <div className="image">
          <img src={image4} />
        </div>
      </div>
    </div>
  );
};

export default SaimaZaki_courses;
