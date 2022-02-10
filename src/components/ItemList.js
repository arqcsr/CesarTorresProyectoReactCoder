import Item from "./Item";
import { useState, useEffect } from "react";
import image1 from "./images/001.JPG";
import image2 from "./images/002.JPG";
import image3 from "./images/003.JPG";
import image4 from "./images/004.JPG";
import image5 from "./images/005.JPG";
import image6 from "./images/006.JPG";
import image7 from "./images/007.JPG";
import image8 from "./images/008.JPG";
import image9 from "./images/009.JPG";
import './styles/itemList.css'

/* array con datos de productos */

const itemsData = [
    {
        id:"01",
        itemImage:image1,
        itemName:"Bandolera Borla Azul",
        itemPrice:"35 USD",
        itemStock:"3"
    },
    {
        id:"02",
        itemImage:image2,
        itemName:"Bandolera Jardin Mostaza",
        itemPrice:"33 USD",
        itemStock:"8"
    },
    {
        id:"03",
        itemImage:image3,
        itemName:"Bandolera Organic Rosa",
        itemPrice:"36 USD",
        itemStock:"7"
    },
    {
        id:"04",
        itemImage:image4,
        itemName:"Marinera Borla Negra",
        itemPrice:"45 USD",
        itemStock:"6"
    },
    {
        id:"05",
        itemImage:image5,
        itemName:"Cartera Tote Suela",
        itemPrice:"48 USD",
        itemStock:"2"
    },
    {
        id:"06",
        itemImage:image6,
        itemName:"Cartera Jardin Beige",
        itemPrice:"45 USD",
        itemStock:"4"
    },
    {
        id:"07",
        itemImage:image7,
        itemName:"Mochila Jardin Negra",
        itemPrice:"45 USD",
        itemStock:"10"
    },
    {
        id:"08",
        itemImage:image8,
        itemName:"Mochila Borla Azul",
        itemPrice:"42 USD",
        itemStock:"12"
    },
    {
        id:"09",
        itemImage:image9,
        itemName:"Mochila Organic Suela",
        itemPrice:"45 USD",
        itemStock:"8"
    }

];

/* promesa con datos */

let isOk = true;
let data = itemsData;

const customFetch = (timeout, data)=> {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if (isOk){
                resolve(data);
            }else {
                reject('KO')
            }
        },timeout)
    })
};




const ItemList = ()=> {

const [products, setProducts] = useState ([]);

    function getProducts(){
        customFetch(2000, data)
        .then(data=> setProducts(data))
        .catch(error=>alert('Hubo un error. Ver los detalles aqui', error))
    }
    
    /* prueba de useEffect con setTimeout */
/*     useEffect(()=>{
        setTimeout(()=>{
            getProducts()
        },5000)
    }, []); */

    useEffect(getProducts,[]);


    return(
        <div className="itemCountainer">
            {
                products.map(item=>
                    <Item 
                    className="itemProduct"
                    key={item.id}
                    itemImage={item.itemImage}
                    itemName={item.itemName}
                    itemPrice={item.itemPrice}
                    itemStock={item.itemStock}
                    />
                    )
            }
        </div>
    );
};

export default ItemList;
