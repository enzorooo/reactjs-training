import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

// Enable live reloading
if (module.hot) {
    module.hot.accept();
  }

class App extends React.Component {
    // initialize state
    state = {
        lat: null, 
        errorMessage: ''
    };

    // componentDidMount is a React lifecycle function
    componentDidMount () {
        // check for user geolocation
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}), // Success Callback
            err => this.setState({errorMessage: err.message})           // Error Callback
        );
    }

    renderContent () {
        // helper function to avoid conditional statement on render method.

        // if there is an error message, display it
        if (this.state.errorMessage && !this.state.lat) {
            return (
                <div>Error: {this.state.errorMessage}</div>
                );
        }

        // If the user has geolocation, show the latitude
        if (!this.state.errorMessage && this.state.lat) {
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat}/>
                </div>
            );
        }

        // If the user has not given geolocation, show a loading message
        return (
            <div>
                <Loader loadMessage="Let us know where you are!"/>
            </div>
        );
    }

    // render function is a required function in React
    render () {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    };
};

ReactDOM.render(<App />, document.querySelector('#root'));