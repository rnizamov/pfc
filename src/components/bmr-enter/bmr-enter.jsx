import React from 'react';
import BmrInput from '../bmr-input/bmr-input.jsx';
import BmrSelect from '../bmr-select/bmr-select.jsx';

export default class BmrEnter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props.data;

        return (
            <div>
                <BmrSelect 
                    for='gender'
                    name='gender'
                    label='Ваш пол'
                    value={data.gender} 
                    onChange={this.props.handleChange}
                >
                    <option value='male'>Мужчина</option>
                    <option value='female'>Женщина</option>
                </BmrSelect>
               <BmrInput 
                    for='weight'
                    name='weight'
                    label='Ваш вес в кг' 
                    value={data.weght} 
                    onChange={this.props.handleChange}
                />
               <BmrInput 
                    for='height'
                    name='height'
                    label='Ваш рост в см' 
                    value={data.height} 
                    onChange={this.props.handleChange}
                />
               <BmrInput 
                    for='age'
                    name='age'
                    label='Ваш возраст в годах'
                    value={data.age} 
                    onChange={this.props.handleChange}
                />
            </div>
        );
    }
}


//для женщин: BMR = 447,593 + (9,247 * вес в кг) + (3,098 * рост в см) — (4,330 * возраст в годах);
//для мужчин: BMR = 88,362 + (13,397 * вес в кг) + (4,799 * рост в см) — (5,677 * возраст в годах).