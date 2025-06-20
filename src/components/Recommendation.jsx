import React from "react";
import style from "../css/Recommendation.module.css";
import img1 from '../images/680_540x.jpg'
import img2 from '../images/screenshot-20240223-175054_540x.png'
import img3 from "../images/Honeyview___20230710113914_540x.jpg";

const Recommendation = () => {
  return (
    <div className={style.container}>
      <h4 className="text-center py-4 fs-2">Recommended By</h4>
      <div className={style.imgFlex}>
        <div>
          <img src={img1} alt="" className={style.imgs} />
          <h5 className="fs-5 pt-1">Unbox Therapy</h5>
          <p>Oraimo OpenCirclets</p>
        </div>
        <div>
          <img src={img2} alt="" className={style.imgs} />
          <h5 className="fs-5 pt-1">cleaningwithgabie</h5>
          <p>Oraimo Stick Cordless Vacuum Cleaner</p>
        </div>
        <div>
          <img src={img3} alt="" className={style.imgs} />
          <h5 className="fs-5 pt-1">911Studios</h5>
          <p>Oraimo Stick Cordless Vacuum Cleaner</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
