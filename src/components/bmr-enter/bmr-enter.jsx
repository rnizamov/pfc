import React from 'react';
import BmrInput from '../bmr-input/bmr-input.jsx'

export default class BmrEnter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
               <BmrInput name='вес в кг' inputValue={this.props.inputValue} onClick={this.props.onChange}/>
               <BmrInput name='рост в см' inputValue={this.props.inputValue} onClick={this.props.onChange}/>
               <BmrInput name='возраст в годах' inputValue={this.props.inputValue} onClick={this.props.onChange}/>
            </div>
        );
    }
}


//для женщин: BMR = 447,593 + (9,247 * вес в кг) + (3,098 * рост в см) — (4,330 * возраст в годах);
//для мужчин: BMR = 88,362 + (13,397 * вес в кг) + (4,799 * рост в см) — (5,677 * возраст в годах).