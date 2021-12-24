import React from "react";

const Loader = (props) => {

    return (
        <div className="ui active dimmer">
            <div className="ui text loader">{props.loadMessage}</div>
        </div>
    );
}

Loader.defaultProps = {
    loadMessage: "Loading..."
}

export default Loader;