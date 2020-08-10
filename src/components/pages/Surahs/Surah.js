import React, { Component } from "react";
import axios from "axios";
import Ayat from "./Ayat";
import InfiniteScroll from "react-infinite-scroll-component";
import { MediaPlayerControls } from "@cassette/player";
import { PlayerContextProvider } from "@cassette/core";
import Loading from "./Loading";
import "./Surah.css";
import "@cassette/player/dist/css/cassette-player.css";

class Surah extends Component {
  state = {
    ayats: [],
    count: 0,
    loading: false,
    ayat_total_count: [],
    cur_time: [Number((1030 / 1000).toFixed(2))],
  };

  // When the components Mounts
  componentDidMount() {
    const { count } = this.state;

    axios
      .get(
        `https://quran.com/api/api/v3/chapters/${this.props.match.params.id}/verses?offset=${count}&limit=10&language=en`
      )
      .then((response) => {
        // Sees total number of ayats and makes array so we can get every ayat audio
        const ayat_total_count = Array.from(
          Array(response.data.meta.total_count + 1).keys()
        );

        ayat_total_count.shift();

        if (response.data.verses.length > 9) {
          return this.setState({
            ayats: response.data.verses,
            loading: true,
            count: 10,
            ayat_total_count,
          });
        } else {
          this.setState({
            ayats: response.data.verses,
            ayat_total_count,
          });
        }
      });
  }

  // Fetch Ayats for infinate scrool
  fetchAyats = () => {
    const { count, ayats } = this.state;
    // Check for surach smaller than 10 ayats
    if (ayats.length < 10) {
      return this.setState({ loading: false });
    }
    this.setState({ count: this.state.count + 10 });
    axios
      .get(
        `https://quran.com/api/api/v3/chapters/${this.props.match.params.id}/verses?offset=${count}&limit=10&translations=85&language=en`
      )
      .then((res) => {
        if (res.data.verses.length === 0 || res.data.verses.length > 10) {
          return this.setState({ loading: false });
        } else {
          this.setState({
            ayats: this.state.ayats.concat(res.data.verses),
            loading: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  SurahAudio() {
    return [
      {
        url: "https://verses.quran.com/Sudais/mp3/001007.mp3",
        title: "lorem1",
      },
      {
        url: "https://mirrors.quranicaudio.com/everyayah/Husary_64kbps/001002.mp3",
        title: "lorem2",
      },
      {
        url: "https://mirrors.quranicaudio.com/everyayah/Husary_64kbps/001003.mp3",
        title: "lorem3",
      },
    ];
  }

  currentTime(e) {
    let joined = this.state.cur_time.concat(Math.round(100 * e.currentTime) / 100);
    this.setState({ cur_time: joined });

    console.log(this.state.cur_time.sort((a, b) => a - b));
  }

  render() {
    return (
      <div>
        {/* Infinate Scrool for Ayats */}
        <InfiniteScroll
          dataLength={this.state.ayats.length}
          next={this.fetchAyats}
          hasMore={this.state.loading}
          loader={<Loading />}
        >
          {this.state.ayats.map((ayat, index) => (
            <Ayat key={index} ayat={ayat} />
          ))}
        </InfiniteScroll>

        {/* Media Control */}
        <div className='media-controls'>
          <PlayerContextProvider
            onTimeUpdate={(e) => this.currentTime(e)}
            playlist={this.SurahAudio()}
          >
            <MediaPlayerControls
              controls={[
                "spacer",
                "backskip",
                "playpause",
                "forwardskip",
                "spacer",
                "progress",
                "volume",
                "repeat",
              ]}
            />
          </PlayerContextProvider>
        </div>
      </div>
    );
  }
}

export default Surah;

// https://quran.com/api/api/v3/chapters/32/info?language=en

// if((Number((1030 / 1000).toFixed(2))) ) {

// }

// https://quran.com/api/api/v3/chapters/67/verses?offset=16&limit=1&&translations=47language=en
