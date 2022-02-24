import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider=({children})=>{

    const[cartlist,setCartlist] = useState([]);
    
    const addToCart = (props, quantity)=>{
        setCartlist([
            ...cartlist,
            {
            id:props.id,
            image: props.itemDetailImage,
            itemName: props.itemDetailName,
            quantity: quantity,
            price: props.itemDetailPrice,
            subtotal: ((parseInt(quantity)*parseInt(props.itemDetailPrice))),
        }]);
    };

    const removeItem =()=>{
        cartlist.filter((item)=>item !== item.id);
        console.log("prueba borrar");
    };

    return(
        <CartContext.Provider value={{cartlist, addToCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;
