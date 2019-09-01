import React from 'react';

export default class BmrSelect extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label id={this.props.for}>
                    {this.props.label} 
                    <select 
                        for={this.props.for}
                        name={this.props.name} 
                        onChange={this.props.onChange} 
                        value={this.props.value}
                    >
                        {this.props.children}
                    </select>
                </label>
            </div>
        );
    }
}