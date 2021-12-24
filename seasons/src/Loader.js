import React from "react";

const Loader = (props) => {

    return (
        <div class="ui active dimmer">
            <div class="ui text loader">{props.loadMessage}</div>
        </div>
    );
}

Loader.defaultProps = {
    loadMessage: "Loading..."
}

export default Loader;