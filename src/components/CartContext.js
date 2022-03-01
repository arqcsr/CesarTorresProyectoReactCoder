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
                            image: props.itemDetailImage,
                            itemName: props.itemDetailName,
                            quantity: quantity,
                            price: props.itemDetailPrice,
                            subtotal: ((parseInt(quantity)*parseInt(props.itemDetailPrice))),
                        }
                    ]
                )
            }
    };

    const removeItem =(element)=>{
        setCartlist(cartlist.filter(item=>item.id!==element));
        console.log("prueba borrar");
        console.log(element);
        console.log(cartlist);
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
