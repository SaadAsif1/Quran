import React from "react";
import { Tooltip } from "antd";
import persianJs from "persianjs";

const Ayat = ({ ayat }) => {
  // Handles Audio for Ayat word click
  const ayatWordClick = (url) => {
    let audio = new Audio(`http:${url}`);
    audio.play();
  };

  return (
    <div
      style={{
        border: "solid 1px black",
        padding: "1rem",
        margin: "1rem",
        direction: "rtl",
      }}
    >
      {console.log(ayat)}
      <h1>
        {ayat.words.map((word, index) =>
          word.translation ? (
            <Tooltip
              title={<div className='tooltip-ayat'>{word.translation.text}</div>}
              color='#03a87c'
              key={index}
              placement='topLeft'
            >
              <span
                onClick={() => ayatWordClick(word.audio.url)}
                className='quran-ayat-text'
              >
                {word.text_madani}{" "}
              </span>
            </Tooltip>
          ) : null
        )}

        <Tooltip
          title={<div className='tooltip-ayat'>Verse {ayat.verse_number}</div>}
          color='#03a87c'
          placement='topLeft'
        >
          <span className='ayat-end-num'>
            {persianJs(ayat.verse_number).englishNumber().toString()}
          </span>
        </Tooltip>
      </h1>
    </div>
  );
};

export default Ayat;
