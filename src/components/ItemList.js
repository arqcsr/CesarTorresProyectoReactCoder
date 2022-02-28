import Item from "./Item";
import { useState, useEffect } from "react";
import './styles/itemList.css'
import { useParams } from "react-router-dom";

/* array con datos de productos */

const itemsData = [
    {
        id:"01",
        category:"bandoleras",
        itemImage:"/images/001.JPG",
        itemName:"Bandolera Borla Azul",
        itemPrice:"35 USD",
        itemStock:"3"
    },
    {
        id:"02",
        category:"bandoleras",
        itemImage:"/images/002.JPG",
        itemName:"Bandolera Jardin Mostaza",
        itemPrice:"33 USD",
        itemStock:"8"
    },
    {
        id:"03",
        category:"bandoleras",
        itemImage:"/images/003.JPG",
        itemName:"Bandolera Organic Rosa",
        itemPrice:"36 USD",
        itemStock:"7"
    },
    {
        id:"04",
        category:"carteras",
        itemImage:"/images/004.JPG",
        itemName:"Marinera Borla Negra",
        itemPrice:"45 USD",
        itemStock:"6"
    },
    {
        id:"05",
        category:"carteras",
        itemImage:"/images/005.JPG",
        itemName:"Cartera Tote Suela",
        itemPrice:"48 USD",
        itemStock:"2"
    },
    {
        id:"06",
        category:"carteras",
        itemImage:"/images/006.JPG",
        itemName:"Cartera Jardin Beige",
        itemPrice:"45 USD",
        itemStock:"4"
    },
    {
        id:"07",
        category:"mochilas",
        itemImage:"/images/007.JPG",
        itemName:"Mochila Jardin Negra",
        itemPrice:"45 USD",
        itemStock:"10"
    },
    {
        id:"08",
        category:"mochilas",
        itemImage:"/images/008.JPG",
        itemName:"Mochila Borla Azul",
        itemPrice:"42 USD",
        itemStock:"12"
    },
    {
        id:"09",
        category: "mochilas",
        itemImage:"/images/009.JPG",
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

const {idCategory}=useParams();

/* prueba del useParams
console.log(idCategory); */

    function getProducts(){
        if(idCategory === undefined){
            customFetch(2000, data)
            .then(data=> setProducts(data))
            .catch(error=>alert('Hubo un error. Ver los detalles aqui', error))
        }else{
            customFetch(2000, data.filter(item=>item.category === idCategory))
            .then(data=> setProducts(data))
            .catch(error=>alert('Hubo un error. Ver los detalles aqui', error))
        }
    }
    
    /* prueba de useEffect con setTimeout */
    /*useEffect(()=>{
        setTimeout(()=>{
            getProducts()
        },5000)
    }, []); */

    useEffect(getProducts,[idCategory]);


    return(
        <div className="itemCountainer">
            {
                products.map(item=>
                    <Item 
                    className="itemProduct"
                    id={item.id}
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
