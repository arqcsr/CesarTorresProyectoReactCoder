import { Link } from "react-router-dom";
import "./styles/checkOutButton.css";

const CheckOutButton =()=>{
    return(
        <Link to="/cart"><button className="checkOutButton">Terminar la compra</button></Link> 
    )

};

export default CheckOutButton

