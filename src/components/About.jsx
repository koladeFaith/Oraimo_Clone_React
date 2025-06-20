import React from 'react'
import style from '../css/About.module.css'
import img from '../images/1_e6083ed4-1da4-4727-8b5f-d321f15992b7_1728x (1).jpg'

const About = () => {
  return (
    <div className={style.about}>
      <img src={img} alt="" />
      <div className={style.position}>
        <button>About us</button>
      </div>
    </div>
  );
}

export default About