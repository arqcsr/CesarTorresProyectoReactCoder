import './styles/itemListContainer.css'
import ItemCount from './ItemCount';


const ItemListContainer = ({contentmessage})=>{
    return(
        <div className="itemContainer">
            {contentmessage}
            <ItemCount stock="5" initial={Number(1)} />
        </div>
    );
}

export default ItemListContainer;