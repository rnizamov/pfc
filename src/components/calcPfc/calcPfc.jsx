import React from "react";
import Input from "../input/input.jsx";
import Title from "../title/title.jsx";

export default class CalcPfc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calories: 0,
            protein: 0,
            fat: 0,
            carbohydrate: 0,
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let name = e.target.name,
            value = +e.target.value;

        this.setState((state) => ({
            ...state, [name]: value
        }));
    }

    calcNutrient(target) {
        let calories = this.state.calories,
            nutrient = this.state[target],
            resultKkal = null,
            resultGramm = null;
        
        if (typeof calories === 'number' && typeof nutrient === 'number' && calories !== 0) {
            resultKkal = nutrient * calories / 100;
            resultGramm = target === 'fat' ? resultKkal / 9.29 : resultKkal / 4.1;
            return resultGramm;
        }
    }
    
    render() {
        let protein = this.calcNutrient('protein'), 
            fat = this.calcNutrient('fat'),
            carbohydrate =  this.calcNutrient('carbohydrate');       
           
        return (
                <div>
                    <Title>
                        Расчет нутриентов в граммах 
                    </Title>
                    <Input 
                        type="text"
                        for='calories'
                        name='calories'
                        label='ккал' 
                        value={this.state.calories} 
                        handleChange={this.handleChange}
                    />   
                    <Input 
                        type="text"
                        for='protein'
                        name='protein'
                        label='Содержание белков в %' 
                        value={this.state.protein} 
                        handleChange={this.handleChange}
                    />   
                    <Input 
                        type="text"
                        for='fat'
                        name='fat'
                        label='Содержание жиров в %' 
                        value={this.state.fat} 
                        handleChange={this.handleChange}
                    /> 
                    <Input 
                        type="text"
                        for='carbohydrate'
                        name='carbohydrate'
                        label='Содержание углеводов в %' 
                        value={this.state.carbohydrate} 
                        handleChange={this.handleChange}
                    />  
                    <Title>
                        Ваше БЖУ: 
                    </Title>
                    <ul>
                        <li>Белки {protein} грамм</li>
                        <li>Жиры {fat} грамм</li>
                        <li>Углеводы {carbohydrate} грамм</li>
                    </ul>
                </div>    
        );
    }
}