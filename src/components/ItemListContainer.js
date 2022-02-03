import './styles/itemListContainer.css'

const ItemListContainer = ({contentmessage})=>{
    return(
        <div className="itemContainer">
            {contentmessage}
        </div>
    );
}

export default ItemListContainer;