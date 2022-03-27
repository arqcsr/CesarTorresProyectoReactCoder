import './styles/itemListContainer.css'
import ItemList from './ItemList';


const ItemListContainer = ({contentmessage})=>{
    return(
        <div className="itemContainer">
            {contentmessage}
            <ItemList />
        </div>
    );
}

export default ItemListContainer;