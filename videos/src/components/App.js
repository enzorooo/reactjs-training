import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onSearchSubmit("react js");
    }

    onSearchSubmit = async (term) => {
        var endpoint = '/search'; 
        var response = await youtube.get(endpoint, {
            params: {q: term}
        });

        this.setState({
            videos: response.data.items,

            // set the first video as the default selected video
            selectedVideo: response.data.items[0]
        });

    };

    onVideoSelect = (video) => {
        console.log('[APP] video selected: ', video);
        this.setState({selectedVideo: video});
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                onVideoSelect={this.onVideoSelect} 
                                videos={this.state.videos} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default App;