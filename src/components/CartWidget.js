import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './styles/cartWidget.css'

const CartWidget = ()=>{
    return(
        <div className='cart'>
            <FontAwesomeIcon icon={faCartPlus} className='iconCart'/>
            <div className='cartConter'>
                <span>4</span>
            </div>
        </div>
    )
};

export default CartWidget
