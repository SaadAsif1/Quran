import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Typography } from "antd";
import parcer from "html-react-parser";
import { SearchOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import HomeSearchImg from "../../../assets/homeSearch.png";

const { Text } = Typography;

const HomeSearch = ({ history }) => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const searchData = (event) => {
    setDisplay(true);

    axios
      .get(
        `https://quran.com/api/api/v3/suggest?q=${event.target.value}&l=en&language=en`
      )
      .then((response) => {
        setOptions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setSearch(event.target.value);
  };

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const updateSuggestion = (ayat) => {
    setSearch(ayat.text.replace(/(<([^>]+)>)/gi, ""));
    setDisplay(false);
    history.push(ayat.href);
  };

  return (
    <div className='home-search-container'>
      <div className='home-container'>
        <a href='#'>
          <img src={HomeSearchImg} alt='HomeSearchImg' className='home-search-img ' />
        </a>
        <div className='home-search-title align-center'>THE NOBLE QURAN</div>
        <form ref={wrapperRef} className='align-center home-search-form  pos-rel'>
          <input
            id='auto'
            onClick={() => setDisplay(!display)}
            placeholder='Type to search'
            value={search}
            className='home-search-input'
            onChange={searchData}
          />
          {display && (
            <div className='autoContainer'>
              {options.length > 0 &&
                options.map((value, i) => {
                  return (
                    <div
                      onClick={() => updateSuggestion(value)}
                      className='option'
                      key={i}
                      tabIndex='0'
                    >
                      <div className='search-ayat-text'>{parcer(value.text)}</div>
                      <div className='search-ayat-num'>
                        <Text keyboard>{value.ayah}</Text>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
          <button className='home-search-btn'>
            <SearchOutlined />
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(HomeSearch);
