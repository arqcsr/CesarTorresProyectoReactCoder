import { useState } from "react";
import CheckOutButton from "./CheckOutButton";
import ItemCount from "./ItemCount";
import './styles/itemDetail.css'


const Itemdetail = (props)=>{

    let[buttonCount, setButtonCount]=useState(true);

    //console.log(buttonCount); prueba del buttonCount

    const onAdd = ()=>{
        alert("Has agragado este producto a tu carrito");
        setButtonCount(false);

        //console.log(buttonCount); prueba del setButtonCount
    };

    return(
        <article className="itemDetailCountainer">
            <div className="itemdetailImageCountainer">
                <img src={props.itemDetailImage} className="itemDetailImage" alt=""></img>
            </div>
            <div className="itemDetailDescriptionCountainer">
                <h2 className="itemDetailName">{props.itemDetailName}</h2>
                <div className="itemDetailDescription">{props.itemDetaildescription}</div>
                <span className="itemDetailPrice">Precio: {props.itemDetailPrice}</span>
                {buttonCount === true
                    ? <ItemCount stock={props.itemDetailStock} initial={1} onAdd={onAdd} />
                    : <CheckOutButton />
                }
            </div>
        </article>
    )
};

export default Itemdetail;
