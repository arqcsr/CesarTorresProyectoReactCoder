import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from "./CartContext";
import "./styles/cart.css"
import { Link } from "react-router-dom";



const Cart = ()=>{

    const context = useContext(CartContext);
    console.log(context.cartlist.length)

    return (
        <section className="cartSection">
            <h2 className="cartSectionTitle">Tu carrito</h2>
            {context.cartlist.length > 0 ?
                context.cartlist.map((item) => (
                <article key={item.id} className="cartCountainer">
                    <div className="cartImageCountainer">
                        <img className="cartImage" src={item.image} alt="asdas" />
                    </div>
                    <div className="nameCountainer">
                        <span className="name">{item.name}</span>
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
                :<div className="noProductsCountainer">
                    <span className="noProducts">Tu carrito esta vacío 😢</span>
                    <Link to="/"><button className="noProductsButton">Ir a la tienda</button></Link>
                </div>
            }
            {
                context.cartlist.length > 0 &&
                <div className="totalPurchaseCountainer">
                    <h2 className="totalPurchaseTitle">TOTAL DE TU COMPRA</h2>
                    <div>
                        <span className="totalPurchaseItems">SUB TOTAL: {context.cartlist.map(items => items.subtotal).reduce((a,b)=> a+b,0)} USD</span>
                    </div>
                    <div>
                        <span className="totalPurchaseItems">IVA 16%: {context.cartlist.map(items => items.subtotal).reduce((a,b)=> a+b,0)*.16} USD</span>
                    </div>
                    <div className="totalPurchaseItemsTotalCountainer">
                        <span className="totalPurchaseItemsTotal">TOTAL: {context.cartlist.map(items => items.subtotal).reduce((a,b)=> a+b,0) + context.cartlist.map(items => items.subtotal).reduce((a,b)=> a+b,0)*.16} USD</span>
                    </div>
                    <button className="purchase">FINALIZAR COMPRA</button>
                    <Link to="/"><button className="keepOnBuying">SEGUIR COMPRANDO</button></Link>
                </div>
            }
            {
                context.cartlist.length > 0 &&
                <button className="clearCartButton" onClick={context.clear}>Eliminar carrito</button>
            }
        </section>
    );
};

export default Cart;
