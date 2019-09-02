import React from 'react';
import Title from '../title/title.jsx'
import BmrEnter from '../bmr-enter/bmr-enter.jsx';
import BmrResult from '../bmr-result/bmr-result.jsx';
import Amr from "../amr/amr.jsx";
import CaloriesResult from "../calories/calories-result.jsx";
import InfoCalcPfc from "../infoCalcPfc/infoCalcPfc.jsx";

export default class Pfc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: "male",
            weight: "", 
            height: "",
            age: "",
            amr: 1.2,
         }

        this.handleChange = this.handleChange.bind(this);
     }
 
    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({...this.state, [name]:value});
    }

    render() {
        return (
            <>
                <Title>Расчет БЖУ</Title>  
                <BmrEnter 
                    data={this.state} 
                    handleChange={this.handleChange}
                />
                <BmrResult 
                    data={this.state}
                    setCalories={this.setCalories}
                />
                <Amr 
                    handleChange={this.handleChange}
                />
                <CaloriesResult />
                <InfoCalcPfc />
            </>
        );
    }
}