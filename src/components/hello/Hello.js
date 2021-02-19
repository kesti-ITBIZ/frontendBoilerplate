import React, { Component } from "react";

export default class Hello extends Component {
    componentDidMount() {
        this.props.onSetHello("Hello");
    }

    render() {
        return (
            <div>{this.props.hello}</div>
        );
    }
}
