import React, { useEffect, useState } from "react";
import axios from "axios";
import queryString from "query-string";
import { withRouter } from "react-router-dom";
import Ayat from "./Ayat";

const SingalAyat = ({ match, history }) => {
  const [ayat, setAyat] = useState("");

  useEffect(() => {
    const transliation = queryString.parse(history.location.search);
    const chapter = match.params.chapter;
    const ayat = match.params.ayat - 1;

    axios
      .get(
        `https://quran.com/api/api/v3/chapters/${chapter}/verses?offset=${ayat}&limit=1&&translations=${transliation.translations}&language=en`
      )
      .then((response) => {
        setAyat(response.data.verses);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return ayat && ayat.map((ayats, index) => <Ayat key={index} ayat={ayats} />);
};

export default withRouter(SingalAyat);
