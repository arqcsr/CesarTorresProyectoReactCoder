import ItemCount from "./ItemCount";
import './styles/itemDetail.css'

const Itemdetail = (props)=>{
    return(
        <article className="itemDetailCountainer">
            <div className="itemdetailImageCountainer">
                <img src={props.itemDetailImage} className="itemDetailImage"></img>
            </div>
            <div className="itemDetailDescriptionCountainer">
                <h2 className="itemDetailName">{props.itemDetailName}</h2>
                <div className="itemDetailDescription">{props.itemDetaildescription}</div>
                <span className="itemDetailPrice">Precio: {props.itemDetailPrice}</span>
                <ItemCount stock={props.itemDetailStock} initial={1} />
            </div>
        </article>
    )
};

export default Itemdetail;
