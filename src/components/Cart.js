import { useContext } from "react";
import { CartContext } from "./CartContext";
import "./styles/cart.css"



const Cart = ()=>{

    const context = useContext(CartContext);
    //console.log(context.cartlist); prueba

    return (
        <section className="cartSection">
            <h2>Tu carrito</h2>
            {
                context.cartlist.map(item => (
                <article key={item.id} className="cartCountainer">
                    <div className="cartImageCountainer">
                        <img className="cartImage" src={item.name} alt="asdas" />
                    </div>
                    <div className="nameCountainer">
                        <span className="name">{item.itemName}</span>
                    </div>
                    <div className="amountCountainer">
                        <span className="amountName">Cantidad</span>
                        <span className="amount">{item.quantity} unidades</span>
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
                        <button onClick={context.removeItem}>borrar elemento</button>
                    </div>
                </article>
                ))
            }
            
        </section>
    );
};

export default Cart;
