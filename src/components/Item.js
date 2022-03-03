import './styles/item.css';
import { Link } from 'react-router-dom';

const Item = (props)=>{
    return(
        <div className="eachItem">
            <Link to={`/item/${props.id}`}> <img src={props.image} alt={props.name}/></Link>
            <hr />
            <h2>{props.name}</h2>
            <span className='spanItemPrice'>Precio: {props.price}</span>
            <span className='spanItemStock'>Cantidad disponible: {props.stock}</span>
        </div>
    )
};

export default Item;