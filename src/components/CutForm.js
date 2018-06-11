import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

const options = [
    {
        text: 'one word',
        value: '1'
    },
    {
        text: 'two words',
        value: '2'
    },
    {
        text: 'three words',
        value: '3'
    }
];

class CutForm extends Component {
    render(){
        return (
            <Form onSubmit={this.props.handleSubmit}>
                <Form.TextArea 
                    placeholder="write your text here" 
                    name="text"
                    onChange={this.props.handleChange}
                    cols="30" 
                    rows="10" 
                    style={{ background: '#f8f8f9'}}/>
                <Form.Group widths='equal'>
                    <Form.Group inline>
                        <Form.Checkbox 
                            toggle
                            fluid
                            checked={this.props.shuffle}
                            onChange={this.props.handleChange}
                            name="shuffle"
                            label="Shuffle"/>
                        <Form.Checkbox 
                            toggle
                            fluid
                            checked={this.props.reverse}
                            onChange={this.props.handleChange} 
                            name="reverse"
                            label="Reverse"/> 
                    </Form.Group>
                    <Form.Dropdown
                        label="Chunk Size"
                        defaultValue="2"
                        selection
                        compact
                        id="chunkDropdown"
                        options={options}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Button 
                        fluid 
                        inverted
                        size="big"
                        type="button" 
                        color="red">Undo</Form.Button>
                    <Form.Button 
                        fluid 
                        primary
                        size="big"
                        type="submit">Submit</Form.Button>
                </Form.Group>
            </Form>
        )
    }
}

export default CutForm;