import React from 'react';
import BmrSelect from '../bmr-select/bmr-select.jsx';



export default class Amr extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data;
         return (
                <BmrSelect 
                    for='amr'
                    name='amr'
                    label='Ваш AMR'
                    value={data.amr} 
                    handleChange={this.props.handleChange}
                >
                     <option value={1.2}>если вы ведёте сидячий образ жизни, умножаете на 1,2;</option>
                     <option value={1.375}>при умеренной активности (лёгкие физические нагрузки либо занятия 1—3 раз в неделю) — на 1,375;</option>
                     <option value={1.55}>средняя активность (занятия 3—5 раз в неделю) — 1,55;</option>
                     <option value={1.725}>активный образ жизни (интенсивные нагрузки, занятия 6-7 раз в неделю) — 1,725;</option>
                     <option value={1.9}> если вы спортсмен или выполняете похожие нагрузки (6-7 раз в неделю) — 1,9.</option>               
                </BmrSelect>
        );
    }
}