import './styles/item.css';
import { Link } from 'react-router-dom';

const Item = (props)=>{
    return(
        <div className="eachItem">
            <Link to={`./item/${props.id}`}> <img src={props.itemImage} alt={props.itemName}/></Link>
            <hr />
            <h2>{props.itemName}</h2>
            <span className='spanItemPrice'>Precio: {props.itemPrice}</span>
            <span className='spanItemStock'>Cantidad disponible: {props.itemStock}</span>
        </div>
    )
};

export default Item;