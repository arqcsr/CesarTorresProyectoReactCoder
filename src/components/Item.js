import './styles/item.css'

const Item = (props)=>{
    return(
        <div className="eachItem">
            <img src={props.itemImage}/>
            <hr />
            <h2>{props.itemName}</h2>
            <span className='spanItemPrice'>Precio: {props.itemPrice}</span>
            <span className='spanItemStock'>Cantidad disponible: {props.itemStock}</span>
        </div>
    )
};

export default Item;