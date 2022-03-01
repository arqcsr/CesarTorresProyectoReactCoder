import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './styles/cartWidget.css';
import { Link } from 'react-router-dom';
import { CartContext } from "./CartContext";
import { useContext } from "react";

const CartWidget = ()=>{
    const context = useContext(CartContext);
    /* console.log(context.cartlist.map(items => items.quantity).reduce((a,b)=> a+b,0)); prueba de la funcion para las cantidades*/

    return(
        <div className='cart'>
            <Link to="/cart"><FontAwesomeIcon icon={faCartPlus} className='iconCart'/></Link> 

            {context.cartlist.map(items => items.quantity).reduce((a,b)=> a+b,0) > 0 &&
                <div className='cartCounter'>
                    <span>{context.cartlist.map(items => items.quantity).reduce((a,b)=> a+b,0)}</span>
                </div>
            }
            
        </div>
    )
};

export default CartWidget
