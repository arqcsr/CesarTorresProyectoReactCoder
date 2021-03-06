import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider=({children})=>{

    const[cartlist,setCartlist] = useState([]);
    
    const addToCart = (props, quantity)=>{
        let productDuplicated = cartlist.find((duplicated) => duplicated.id === props.id)
            if(productDuplicated)
            {
                productDuplicated.quantity += quantity;
                productDuplicated.subtotal = ((parseInt(productDuplicated.quantity)*parseInt(productDuplicated.price)))
            }else{
                setCartlist(
                    [
                        ...cartlist,
                        {
                            id:props.id,
                            image: props.image,
                            itemName: props.name,
                            quantity: quantity,
                            price: props.price,
                            subtotal: ((parseInt(quantity)*parseInt(props.price))),
                        }
                    ]
                )
            }
    };

    const removeItem =(element)=>{
        setCartlist(cartlist.filter(item=>item.id!==element));
    };

    const clear = ()=>{
        setCartlist([]);
    };
    
    return(
        <CartContext.Provider value={{cartlist, addToCart, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;
