import React from 'react';
import {ThemeContext} from "../context/themecontext.js";

const Title = function (props) {
    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => {                
                return (               
                    <p 
                        style={{backgroundColor: theme.background, color: theme.foreground}}
                        onClick={toggleTheme}   
                    >
                        {props.children}
                    </p> 
            )}} 
         </ThemeContext.Consumer>
    );
};

export default Title;