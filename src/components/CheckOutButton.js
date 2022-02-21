import { Link } from "react-router-dom";
import "./styles/checkOutButton.css";

const CheckOutButton =()=>{
    return(
        <Link to="/cart"><button className="checkOutButton">Ir al carrito</button></Link> 
    )

};

export default CheckOutButton

