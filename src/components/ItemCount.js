import './styles/itemCount.css'

const ItemCount = ({stock, onAdd, quantity, setQuantity})=>{

    const increase = ()=>{
        if(quantity<stock){
            setQuantity(quantity + 1);
            /* console.log (quantity); */
        }
    };

    const decrease = ()=>{
        if (quantity>1){
            setQuantity(quantity-1);
        }
    };

    return(
        <div className="counterCountainer">
            <div className="quantityCountainer">
                <button className="plusMinusButtton" onClick={increase}>+</button>
                <p>{quantity}</p>
                <button className="plusMinusButtton"  onClick={decrease}>-</button>
            </div>
            <button className="addCartButton" onClick= {onAdd}>Agragar al carrito</button>
        </div>
    )

};

export default ItemCount;
