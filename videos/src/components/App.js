import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
    state = { videos: [] };

    onSearchSubmit = async (term) => {
        var endpoint = '/search'; 
        var response = await youtube.get(endpoint, {
            params: {q: term}
        });

        this.setState({videos: response.data.items});

    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                I have {this.state.videos.length} videos.
            </div>
        );
    };
};

export default App;