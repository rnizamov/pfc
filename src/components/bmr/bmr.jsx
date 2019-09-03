import React from 'react';
import Input from '../input/input.jsx';
import Select from '../select/select.jsx';
import calories from "../calories/calories.js";

export default class Bmr extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const kfMan = {
            kfGender: 88.362, 
            kfWeight: 13.397,
            kfHeight: 4.799,
            kfAge: 5.677
        };

        const kfWoman = {
            kfGender: 447.593, 
            kfWeight: 9.247,
            kfHeight: 3.098,
            kfAge: 4.330
        };

        const {gender, weight, height, age} = this.props.data;
        const kf = gender === 'female' ? kfWoman : kfMan;
        let result = kf.kfGender + (kf.kfWeight*weight) + (kf.kfHeight*height) - (kf.kfAge*age);
        calories.set('bmr', result);
  
        return (
            <div>
                <Select 
                    for='gender'
                    name='gender'
                    label='Ваш пол'
                    value={gender} 
                    handleChange={this.props.handleChange}
                >
                    <option value='male'>Мужчина</option>
                    <option value='female'>Женщина</option>
                </Select>
               <Input 
                    type="number"
                    for='weight'
                    name='weight'
                    label='Ваш вес в кг' 
                    value={weight} 
                    handleChange={this.props.handleChange}
                />
               <Input 
                    type="number"
                    for='height'
                    name='height'
                    label='Ваш рост в см' 
                    value={height} 
                    handleChange={this.props.handleChange}
                />
               <Input 
                    type="number"
                    for='age'
                    name='age'
                    label='Ваш возраст в годах'
                    value={age} 
                    handleChange={this.props.handleChange}
                />
                <div>
                    Ваш BMR = {kf.kfGender} + ({kf.kfWeight} * {weight}) + ({kf.kfHeight} * {height}) 0 ({kf.kfAge} * {age}) = 
                          {result}
                </div>
            </div>
        );
    }
}


//для женщин: BMR = 447,593 + (9,247 * вес в кг) + (3,098 * рост в см) — (4,330 * возраст в годах);
//для мужчин: BMR = 88,362 + (13,397 * вес в кг) + (4,799 * рост в см) — (5,677 * возраст в годах).