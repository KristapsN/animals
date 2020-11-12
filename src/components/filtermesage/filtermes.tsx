import React from 'react';
import './filtermes.css';


type Props = {
    mesage: string;
    mesageHandler: () => void;
    status: boolean


}


const FilterMesage = ({ mesage, mesageHandler, status}: Props) => {
    return (
        <div className="filterdone__wrapper">
        <div className="filterdone">
        <h4>{mesage}</h4>
        <button
        onClick={()=>mesageHandler()}
        >X</button>
        </div>
      </div>
    )


}
export default FilterMesage