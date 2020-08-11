import React, { useState } from 'react';
import './Home.scss';
const sitePreviewImage = require('../images/image.jpg');
function Home() {
  const [showPrview, setPreview] = useState(false); // '' is the initial state value
  const changeInput = (value) => {
      if(value === "Check out www.airbnb.com. It's awesome!") {
          setPreview(true);
      }
      if(value === "Check out . It's awesome!" || value === "Check out. It's awesome!" || value === "") {
          setPreview(false);
      }
  };

  return (
    <div className="homeContainer">
    <input onChange={e => changeInput(e.target.value)} className="inputStyle" placeholder="Hint text : Check out www.airbnb.com. It's awesome!"/>
    {showPrview &&
     <div className="previewBox">
       <img src={sitePreviewImage} />
     </div>
    }
    </div>
  );
}
export default Home;