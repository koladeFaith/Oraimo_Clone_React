import React from "react";
import style from "../css/Collection.module.css";
import img1 from "../images/20221012-110821_180x.jpg";
import img2 from "../images/screenshot-20220610-181831_180x.png";
import img3 from "../images/20221020-175742_180x.jpg";
import img4 from "../images/OHV-102_180x.jpg";
import img5 from "../images/01-2_720x (1).jpg";
import img6 from "../images/L101A_6795dcd9-ff79-4876-ae62-fda7b4c90f39_720x.jpg";

const Collection = () => {
  return (
    <div className={style.container}>
      <h4 className="text-center py-4 fs-2">Collection list</h4>
      <div className={style.imgFlex}>
        <div>
          <img src={img1} alt="" className={style.imgs} />
          <h5 className="fs-5 pt-1">Stick Vacuum Cleaner</h5>
          <p>1 products</p>
        </div>
        <div>
          <img src={img2} alt="" className={style.imgs} />
          <h5 className="fs-5 pt-1">Spin Scrubber</h5>
          <p>0 products</p>
        </div>
        <div>
          <img src={img3} alt="" className={style.imgs} />
          <h5 className="fs-5 pt-1">Humidifiers</h5>
          <p>0 products</p>
        </div>
        <div>
          <img src={img4} alt="" className={style.imgs} />
          <h5 className="fs-5 pt-1">Accessories</h5>
          <p>6 products</p>
        </div>
      </div>
      <div>
        <div className={style.imgFlex2}>
          <div className={style.oriamo}>
            {" "}
            <h5 className="fw-300 pb-3">
              Oraimo Cordless 24KPA Vacuum Cleaner
            </h5>
            <li>Up to 24kpa Suction</li>
            <li>Larger LED Display</li>
            <li>Longer Runtime& Faster Charging</li>
            <li>Tangle Defender Brush</li>
            <li>Thoughtful Design</li>
            <button>Learn more</button>
          </div>
          <div>
            <img src={img5} alt="" className="w-100 mt-3 mt-md-0" />
          </div>
        </div>
        <div className={style.imgFlex2}>
          <div>
            <img src={img6} alt="" className="w-100 mt-3 mt-md-0" />
          </div>
          <div className={style.oriamo}>
            {" "}
            <h5 className="fw-300 pb-3">
              Oraimo Electric Spin Scrubber with 3 Attachments Brush
            </h5>
            <li>2 Adjustable Speeds</li>
            <li>One-Click Release Button</li>
            <li>Retractable Tube, All-round Cleaning</li>
            <li>Long Working Time & Low NoiseTangle Defender Brush</li>
            <li>Multifunctional Brushes</li>
            <li>Quality Gift & Service</li>
            <button>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
