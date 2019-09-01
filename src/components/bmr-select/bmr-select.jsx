import React from 'react';

export default class BmrSelect extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.handleChange(e);
    }

    render() {  
        return (
            <div>
                <label htmlFor={this.props.for}>
                    {this.props.label} 
                    <select 
                        id={this.props.for}
                        name={this.props.name} 
                        onChange={this.handleChange} 
                        value={this.props.value}
                    >
                        {this.props.children}
                    </select>
                </label>
            </div>
        );
    }
}