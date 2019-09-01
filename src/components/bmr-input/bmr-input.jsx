import React from 'react';

export default class BmrInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label id={this.props.for}>
                    {this.props.label} 
                    <input 
                        for={this.props.for}
                        type={this.props.type}
                        name={this.props.name} 
                        onChange={this.props.handleChange} 
                        value={this.props.value}
                    />
                </label>
            </div>
        );
    }
}