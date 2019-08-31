import React from 'react';

export default class BmrResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render () {

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

        const {gender, weight, height, age} = this.props;
        const kf = gender === 'female' ? kfWoman : kfMan;
        
        return (
            <div>
                Ваш BMR = {kf.kfGender} + ({kf.kfWeight} * {weight}) + ({kf.kfHeight} * {height}) 0 ({kf.kfAge} * {age}) = 
                          {kf.kfGender + (kf.kfWeight*weight) + (kf.kfHeight*height) - (kf.kfAge*age)}
            </div>
        );
    }
    
}

//для женщин: BMR = 447,593 + (9,247 * вес в кг) + (3,098 * рост в см) — (4,330 * возраст в годах);
//для мужчин: BMR = 88,362 + (13,397 * вес в кг) + (4,799 * рост в см) — (5,677 * возраст в годах).