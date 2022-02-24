import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import CheckOutButton from "./CheckOutButton";
import ItemCount from "./ItemCount";
import './styles/itemDetail.css'


const Itemdetail = (props)=>{

    let[buttonCount, setButtonCount]=useState(true);
    const [quantity, setQuantity] = useState (1);
    const context = useContext(CartContext);

    //console.log(buttonCount); prueba del buttonCount

    const onAdd = ()=>{
        alert("Has agragado " + quantity + " unidades a tu carrito");
        //console.log(quantity); prueba
        setButtonCount(false);
        context.addToCart(props, quantity);

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
                    ? <ItemCount stock={props.itemDetailStock} initial={1} onAdd={onAdd} quantity={quantity} setQuantity={setQuantity} />
                    : <CheckOutButton />
                }
            </div>
        </article>
    )
};

export default Itemdetail;
