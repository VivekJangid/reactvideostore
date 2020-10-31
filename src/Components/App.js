import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../Apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends Component {
  state = { videos: [], selectVideo: null };

  componentDidMount() {
    this.onTermSubmit("ReactJS");
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", { params: { q: term } });

    this.setState({
      videos: response.data.items,
      selectVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoClick={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
