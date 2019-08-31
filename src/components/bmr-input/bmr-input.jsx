import React from 'react';

export default class BmrInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label>
                    {this.props.name} 
                    <input name={this.props.name} onChange={this.props.onChange} value={this.props.inputValue}/>
                </label>
            </div>
        );
    }
}