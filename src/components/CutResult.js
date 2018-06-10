import React, { Component } from "react";

class CutResult extends Component {
    render(){
        return (
            <div className="cutResult">{this.props.text}</div>
        )
    }
}

export default CutResult;