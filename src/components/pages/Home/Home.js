import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HomeSearch from "./HomeSearch";
import HomeNavbar from "./HomeNavbar";
import HomeFooter from "./HomeFooter";
import "./Home.css";

const Home = () => {
  const [meta, setMeta] = useState("");

  useEffect(() => {
    axios
      .get("https://quran.com/api/api/v3/chapters")
      .then((response) => {
        setMeta(splitArrayIntoChunksOfLen(response.data.chapters, 38));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function splitArrayIntoChunksOfLen(arr, len) {
    var chunks = [],
      i = 0,
      n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, (i += len)));
    }
    return chunks;
  }

  function removeSpaces(url) {
    return encodeURIComponent(decodeURIComponent(url).replace(/\s+/g, ""));
  }

  return (
    <div>
      <HomeNavbar />
      <HomeSearch />

      <div className='home-container home-links-container'>
        <span className='home-links-span'>Quick links</span>
        <a className='home-links-link' href='#'>
          Surah Yasin (Yaseen)
        </a>
        <a className='home-links-link' href='#'>
          Surah Ar-Rahman
        </a>
        <a className='home-links-link' href='#'>
          Surah Al Mulk
        </a>
        <a className='home-links-link' style={{ borderRight: "none" }} href='#'>
          Ayatul Kursi
        </a>
      </div>

      <div className='home-sub-title home-container'>SURAHS (CHAPTERS)</div>
      {meta ? (
        <div className='home-surah-container home-container'>
          <div className='home-surah-column'>
            {meta[0].map((cur) => (
              <Link to={`/${cur.chapter_number}`} key={cur.chapter_number}>
                <div className='home-surah'>
                  <div className='home-surah-number'>{cur.chapter_number}</div>
                  <div className='home-surah-dec'>
                    <div className='home-surah-name-en'>{cur.name_simple}</div>
                    <div className='home-surah-name-en-trans'>
                      {cur.translated_name.name}
                    </div>
                  </div>
                  <div className='home-surah-name'>{cur.name_arabic}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className='home-surah-column'>
            {meta[1].map((cur) => (
              <Link to={`/${cur.chapter_number}`} key={cur.chapter_number}>
                <div className='home-surah'>
                  <div className='home-surah-number'>{cur.chapter_number}</div>
                  <div className='home-surah-dec'>
                    <div className='home-surah-name-en'>{cur.name_simple}</div>
                    <div className='home-surah-name-en-trans'>
                      {cur.translated_name.name}
                    </div>
                  </div>
                  <div className='home-surah-name'>{cur.name_arabic}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className='home-surah-column'>
            {meta[2].map((cur) => (
              <Link to={`/${cur.chapter_number}`} key={cur.chapter_number}>
                <div className='home-surah'>
                  <div className='home-surah-number'>{cur.chapter_number}</div>
                  <div className='home-surah-dec'>
                    <div className='home-surah-name-en'>{cur.name_simple}</div>
                    <div className='home-surah-name-en-trans'>
                      {cur.translated_name.name}
                    </div>
                  </div>
                  <div className='home-surah-name'>{cur.name_arabic}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className='home-surah-container home-container'>
          {Array.from(Array(38).keys()).map((cur) => (
            <div className='home-surah-loading' key={cur}></div>
          ))}
          {Array.from(Array(38).keys()).map((cur) => (
            <div className='home-surah-loading' key={cur}></div>
          ))}
          {Array.from(Array(38).keys()).map((cur) => (
            <div className='home-surah-loading' key={cur}></div>
          ))}
        </div>
      )}

      <HomeFooter />
    </div>
  );
};

export default Home;
