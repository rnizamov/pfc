import React from 'react';
import Title from '../title/title.jsx'
import Bmr from "../bmr/bmr.jsx";
import Amr from "../amr/amr.jsx";
import CaloriesResult from "../calories/calories-result.jsx";
import InfoCalcPfc from "../infoCalcPfc/infoCalcPfc.jsx";
import CalcPfc from "../calcPfc/calcPfc.jsx";
import {ThemeContext, themes} from "../context/themecontext.js";

export default class Pfc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: "male",
            weight: "", 
            height: "",
            age: "",
            amr: 1.2,
            context: {
                theme : themes.light,
                toggleTheme: this.toggleTheme
            }
        }
        
        this.handleChange = this.handleChange.bind(this);
    }
 
    toggleTheme = () => {
        this.setState(state => {
            let theme = state.context.theme === themes.light ? 
                themes.dark 
                : themes.light;
            let context = {
                theme,
                toggleTheme: state.context.toggleTheme
            };

            return {context};
        });
    }

    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({...this.state, [name]:value});
    }

    render() { 
        console.log(this.state.context)
     
        return (
            <>
                <ThemeContext.Provider value={this.state.context}>
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
                </ThemeContext.Provider>
            </>
        );
    }
}