import React from "react";
import style from "../css/Collection.module.css";
import img1 from "../images/20221012-110821_180x.jpg";
import img2 from "../images/screenshot-20220610-181831_180x.png";
import img3 from "../images/20221020-175742_180x.jpg";
import img4 from "../images/OHV-102_180x.jpg";

const Collection = () => {
  return (
    <div className={style.container}>
      <h4 className="text-center py-4 fs-2">Collection list</h4>
      <div className={style.imgFlex}>
        <div>
          <img src={img1} alt="" className={style.imgs}/>
          <h5 className="fs-5 pt-1">Stick Vacuum Cleaner</h5>
          <p>1 products</p>
        </div>
        <div>
          <img src={img2} alt="" className={style.imgs}/>
          <h5 className="fs-5 pt-1">Spin Scrubber</h5>
          <p>0 products</p>
        </div>
        <div>
          <img src={img3} alt="" className={style.imgs}/>
          <h5 className="fs-5 pt-1">Humidifiers</h5>
          <p>0 products</p>
        </div>
        <div>
          <img src={img4} alt="" className={style.imgs}/>
          <h5 className="fs-5 pt-1">Accessories</h5>
          <p>6 products</p>
        </div>
      </div>
    </div>
  );
};

export default Collection;
