import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from "./CartContext";
import "./styles/cart.css"
import { Link } from "react-router-dom";
import {collection, serverTimestamp, setDoc, doc, updateDoc, increment} from "firebase/firestore";
import dataBase from '../utils/FirebaseConfig';
import swal from 'sweetalert';

const Cart = ()=>{

    const context = useContext(CartContext);

    const createOrder=()=>{
        let order={
            buyer:{
                name: "Sharon Stone",
                phone: "123456789",
                email: "sharonStone69@gmail.com",
                adress:"Nowhere St.123, LA California, USA"
            },
            items:context.cartlist.map((cartItems)=>{
                return{title:cartItems.itemName, id:cartItems.id, price:cartItems.price, quantity:cartItems.quantity}
            }),
            total:(context.cartlist.map(items => items.subtotal).reduce((a,b)=> a+b,0) + context.cartlist.map(items => items.subtotal).reduce((a,b)=> a+b,0)*.16).toFixed(2),
            date:serverTimestamp()
        };

        //JUST FOR EDUCATIONAL PURPOSES
        console.log(order);

        const createOrderInFirestore= async ()=>{
            const NewOrderRef = doc(collection(dataBase, "orders"))
            await setDoc(NewOrderRef, order);
            return NewOrderRef;
        };

        createOrderInFirestore()
        .then(result => {
            swal("Tu orden ha sido creada exitosamente","Nro de Orden: " + result.id, "success");
            context.cartlist.map( async (item)=>{
                const itemRef = doc(dataBase, "productsFch", item.id);
                await updateDoc(itemRef, {stock: increment(-item.quantity)});
            });
            context.clear();
        })
        .catch(error=>swal(error + ": Ha ocurrido un error, por favor intente más tarde"));
    };

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
                        <span className="totalPurchaseItems">SUB TOTAL: {(context.cartlist.map(items => items.subtotal).reduce((a,b)=> a+b,0)).toFixed(2)} USD</span>
                    </div>
                    <div>
                        <span className="totalPurchaseItems">IVA 16%: {(context.cartlist.map(items => items.subtotal).reduce((a,b)=> a+b,0)*.16).toFixed(2)} USD</span>
                    </div>
                    <div className="totalPurchaseItemsTotalCountainer">
                        <span className="totalPurchaseItemsTotal">TOTAL: {(context.cartlist.map(items => items.subtotal).reduce((a,b)=> a+b,0) + context.cartlist.map(items => items.subtotal).reduce((a,b)=> a+b,0)*.16).toFixed(2)} USD</span>
                    </div>
                    <button className="purchase" onClick={createOrder}>FINALIZAR COMPRA</button>
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
