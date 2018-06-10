import React, { Component } from 'react';

class CutForm extends Component {
    render(){
        return (
            <div>
                <textarea 
                    defaultValue="I am the textarea" 
                    onChange={this.props.handleTextareaChange}
                    cols="30" 
                    rows="10"></textarea>
                <p>I am the input panel</p>
            </div>
        )
    }
}

export default CutForm;