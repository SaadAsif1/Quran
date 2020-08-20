import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Routes
import Home from "./components/pages/Home/Home";
import Surah from "./components/pages/Surahs/Surah";
import SingalAyat from "./components/pages/Surahs/SingalAyat";

const Routes = () => {
  // const [values, setValues] = useState({
  //   data: "",
  // });;

  // const { data } = values;

  // useEffect(() => {
  //   axios
  //     .get("http://quran.com/api/api/v3/chapters/34/verses?translations=20&language=en")
  //     .then((response) => {
  //       console.log(response.data.verses);
  //       setValues({ data: response.data.verses });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/:id' exact component={Surah} />
        <Route path='/:chapter/:ayat' component={SingalAyat} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
