import React from 'react';

export default class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.for}>
                    {this.props.label} 
                    <input 
                        id={this.props.for}
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