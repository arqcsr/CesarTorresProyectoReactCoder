import './styles/itemListContainer.css'
import ItemCount from './ItemCount';
import ItemList from './ItemList';


const ItemListContainer = ({contentmessage})=>{
    return(
        <div className="itemContainer">
            {contentmessage}
            <ItemList />
            <ItemCount stock={5} initial={1} />
        </div>
    );
}

export default ItemListContainer;