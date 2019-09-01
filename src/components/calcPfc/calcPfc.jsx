import React from "react";
import BmrSelect from "../bmr-select/bmr-select.jsx";
import Title from "../title/title.jsx";
import { throwStatement } from "@babel/types";

export default class CalcPfc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            purpose: "losingWeight"
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({...this.state, purpose: e.target.value});
    }

    render() {
        const text = {
            losingWeight: [
                "белки — 40—50%;",
                "жиры — 20—25%.",
                "углеводы — 30%;"
                
            ],
            gainWeight: [
                "белки — 30%;",
                "жиры — 20—25%;",
                "углеводы — 50-60%."
            ],
            relief: [
                "белки — 40%;",
                "жиры — 20—25%;",
                "углеводы — 40%."
            ]
        };

        return (
            <div>
                <Title>Выберите вашу цель :</Title>
                <BmrSelect 
                    value={this.state.purpose}
                    for='calcPfc'
                    name='calcPfc'
                    label='Ваша цель :'
                    handleChange={this.handleChange}
                >
                     <option value="losingWeight">Снизить вес;</option>
                     <option value="gainWeight">Набрать массу;</option>
                     <option value="relief">Рельеф;</option>
                </BmrSelect>
                <ul>
                    {text[this.state.purpose].map((item)=> <li key={item}>{item}</li>)}
                </ul>

            </div>
        );
    }
}