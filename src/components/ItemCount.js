import { useState } from "react";
import './styles/itemCount.css'

let quantity

const ItemCount = ({stock, initial})=>{

    const [quantity, setQuantity] = useState (initial);

    const increase = ()=>{
        if(quantity<stock){
            setQuantity(quantity + 2);
            console.log (quantity);
        }
    };

    const decrease = ()=>{
        if (quantity>1){
            setQuantity(quantity-1);
        }
    };

    const onAdd = ()=>{
        alert("Has agragado al carrito " + quantity + " unidades")
    };

    return(
        <div className="counterCountainer">
            <div className="quantityCountainer">
                <button className="plusMinusButtton" onClick={increase}>+</button>
                <p>{quantity}</p>
                <button className="plusMinusButtton"  onClick={decrease}>-</button>
            </div>
            <button className="addCartButton" onClick= {onAdd}>Agragar al carrito</button>
        </div>
    )

};

export default ItemCount;
