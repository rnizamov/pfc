import React from 'react';
import Title from '../title/title.jsx'
import BmrEnter from '../bmr-enter/bmr-enter.jsx';

export default class Pfc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: null,
            weight: null,
            height: null,
            age: null
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;

        this.setState({[name]:value});
    }

    render() {
        return (
            <>
                <Title>Расчет БЖУ</Title>  
                <BmrEnter inputValue={this.props.inputValue} onClick={this.props.onClick}/>
            </>
        );
    }
}