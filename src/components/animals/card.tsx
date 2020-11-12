import React from 'react';
import './card.css';


type Props = {
    id: number
    name: string;
    title: string;
    description: string;
    active: boolean;
    picture: string;
    clickHandler: () => void;
    picstatus: boolean


}


const AnimalCard = ({ id, name, title, description, active, picture, clickHandler, picstatus }: Props) => {
    return (
        <div className="col-md-4">

            {!picstatus ? (
                <div className="animal animal__pic" >
                   
                    <img  src={picture} alt={title}
                        onClick={() => clickHandler()}
                    />

                </div>
            ) : (
                    <div className="animal">
                        <button className="animal--button__close" onClick={() => clickHandler()}>x</button>
                        <span>{name}</span>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <span>{active}</span>
                    </div>
                )}
        </div>
    )


}
export default AnimalCard