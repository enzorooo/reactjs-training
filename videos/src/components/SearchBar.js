import React from "react";

class SearchBar extends React.Component {
    state = { term: ''};

    onInputChange(e) {
        this.setState({ term: e.target.value });
    };

    onSearchSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term);
        // TODO: call callback from parent component
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onSearchSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text"
                            value={this.state.term}
                            placeholder="Search..." 
                            onChange={(e) => this.onInputChange(e)}
                        />
                    </div>
                </form>    
            </div>
        );
    };
};

export default SearchBar;