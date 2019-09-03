import React from "react";
import calories from "../calories/calories";

function CaloriesResult(props) {
    return (
        <p>Ваша норма калорий : {calories.result} ккал</p>
    );
}

export default CaloriesResult;