import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from "./CartContext";
import "./styles/cart.css"



const Cart = ()=>{

    const context = useContext(CartContext);

    return (
        <section className="cartSection">
            <h2>Tu carrito</h2>
            {
                context.cartlist.map((item) => (
                <article key={item.id} className="cartCountainer">
                    <div className="cartImageCountainer">
                        <img className="cartImage" src={item.image} alt="asdas" />
                    </div>
                    <div className="nameCountainer">
                        <span className="name">{item.itemName}</span>
                    </div>
                    <div className="amountCountainer">
                        <span className="amountName">Cantidad</span>
                        <span className="amount">{item.quantity} pzas</span>
                    </div>
                    <div className="priceCountainer">
                        <span className="priceName">Precio</span>
                        <span className="price">{item.price}</span>
                    </div>
                    <div className="subtotalCountainer">
                        <span className="subtotalName">Subtotal</span>
                        <span className="subtotal">{item.subtotal} USD</span>
                    </div>
                    <div>
                        <button className="deleteItemButton" onClick={()=>{context.removeItem(item.id)}} ><FontAwesomeIcon icon={faTrashAlt} className="iconTrash"/></button>
                    </div>
                </article>
                ))
            }
            <button className="clearCartButton" onClick={context.clear}>Eliminar carrito</button>
        </section>
    );
};

export default Cart;
