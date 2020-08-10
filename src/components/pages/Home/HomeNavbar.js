import React from "react";
import HomeSearchImg from "../../../assets/2020399.svg";

const HomeNavbar = () => {
  return (
    <div className='home-navbar'>
      <img src={HomeSearchImg} alt='HomeSearchImg' className='home-navbar-title' />
      <div>
        <a
          href='https://quranicaudio.com/'
          rel='noopener noreferrer'
          target='_blank'
          className='home-navbar-link'
        >
          Audio
        </a>
        <a
          href='https://salah.com/'
          rel='noopener noreferrer'
          target='_blank'
          className='home-navbar-link'
        >
          Salah
        </a>
        <a
          href='https://sunnah.com/'
          rel='noopener noreferrer'
          target='_blank'
          className='home-navbar-link'
        >
          Sunnah
        </a>
      </div>
    </div>
  );
};

export default HomeNavbar;
