import React, { Component } from "react";
import { Message } from 'semantic-ui-react';

class CutResult extends Component {
    render(){
        return (
            <Message>
                <Message.Header>Your Results</Message.Header>
                <p>{this.props.text}</p>
            </Message>
        )
    }
}

export default CutResult;