import React from "react";
import {
  SaimaZaki_courses,
  SaimaZaki_form,
  SaimaZaki_news,
  SaimaZaki_progress,
} from "./components/SaimaZaki_index";

const App = () => {
  return (
    <div>
      <div>
        <SaimaZaki_courses />
      </div>

      <div>
        <SaimaZaki_news />
      </div>

      <div>
        <SaimaZaki_progress />
      </div>

      <div>
        <SaimaZaki_form />
      </div>
    </div>
  );
};

export default App;
