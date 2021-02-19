import React, { Component } from "react";

export default class World extends Component {
    componentDidMount() {
        this.props.onSetWorld("World");
    }

    render() {
        return (
            <div>{this.props.world}</div>
        );
    }
}
