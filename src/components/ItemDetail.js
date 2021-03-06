import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import CheckOutButton from "./CheckOutButton";
import ItemCount from "./ItemCount";
import './styles/itemDetail.css';
import swal from 'sweetalert';


const Itemdetail = (props)=>{

    let[buttonCount, setButtonCount]=useState(true);
    const [quantity, setQuantity] = useState (1);
    const context = useContext(CartContext);

    const onAdd = ()=>{
        swal("Genial", "Has agragado " + quantity + " unidades a tu carrito", "success");
        setButtonCount(false);
        context.addToCart(props, quantity);
    };

    return(
        <article className="itemDetailCountainer">
            <div className="itemdetailImageCountainer">
                <img src={props.image} className="itemDetailImage" alt=""></img>
            </div>
            <div className="itemDetailDescriptionCountainer">
                <h2 className="itemDetailName">{props.name}</h2>
                <div className="itemDetailDescription">{props.description}</div>
                <span className="itemDetailPrice">Precio: {props.price}</span>
                {buttonCount === true
                    ? <ItemCount stock={props.stock} initial={1} onAdd={onAdd} quantity={quantity} setQuantity={setQuantity} />
                    : <CheckOutButton />
                }
            </div>
        </article>
    )
};

export default Itemdetail;
