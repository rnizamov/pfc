import React from 'react';
import Title from '../title/title.jsx'
import BmrEnter from '../bmr-enter/bmr-enter.jsx';

export default class Pfc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weight: {
                name: 
            }
        }
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