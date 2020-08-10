import React from "react";

const HomeFooter = () => {
  return (
    <div className='home-footer'>
      <div className='home-container home-footer-container'>
        <div className='home-footer-section'>
          <div className='home-footer-title'>USEFUL SITES</div>
          <a href='#' className='home-footer-links'>
            SUNNAH.COM
          </a>
          <a href='#' className='home-footer-links'>
            SALAH.COM
          </a>
          <a href='#' className='home-footer-links'>
            QURANICAUDIO.COM
          </a>
          <a href='#' className='home-footer-links'>
            CORPUS: WORD BY WORD
          </a>
        </div>
        <div className='home-footer-section'>
          <div className='home-footer-title'>OTHER LINKS</div>

          <a href='#' className='home-footer-links'>
            SURAH YASIN, YASEEN (يس)
          </a>
          <a href='#' className='home-footer-links'>
            AYAT AL-KURSI (آية الكرسي)
          </a>
        </div>
        <div className='home-footer-section'>
          <div className='home-footer-dec'>
            QURAN.COM (ALSO KNOWN AS THE NOBLE QURAN, AL QURAN, HOLY QURAN, KORAN) IS A
            PRO BONO PROJECT..
            <div className='home-footer-dec-br' />© 2016 QURAN.COM. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
