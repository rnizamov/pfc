import React from 'react';
import Title from '../title/title.jsx'
import Bmr from "../bmr/bmr.jsx";
import Amr from "../amr/amr.jsx";
import CaloriesResult from "../calories/calories-result.jsx";
import InfoCalcPfc from "../infoCalcPfc/infoCalcPfc.jsx";
import CalcPfc from "../calcPfc/calcPfc.jsx";

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
                <Bmr
                    data={this.state} 
                    handleChange={this.handleChange}
                />
                <Amr 
                    handleChange={this.handleChange}
                />
                <CaloriesResult />
                <InfoCalcPfc />
                <CalcPfc />
            </>
        );
    }
}