import Item from "./Item";
import { useState, useEffect } from "react";
import './styles/itemList.css'
import { useParams } from "react-router-dom";

/* array con datos de productos */

const itemsData = [
    {
        id:"01",
        category:"bandoleras",
        description:
            <ul>
                <li>Pieza elaborada en cuero sintético</li>
                <li>Asas en cuero sintético</li>
                <li>Tapa rígida con broche imantado</li>
                <li>Asas regulables de 140 cms</li>
                <li>Forro en sintético impermeable</li>
                <li>Bolsillo interno</li>
                <li>Medidas: 19 cms de alto x 24 cms de ancho x 8 cms de profundidad</li>
            </ul>,
        image:"/images/001.JPG",
        name:"Bandolera Borla Azul",
        price:"35 USD",
        stock:"3"
    },
    {
        id:"02",
        category:"bandoleras",
        description:
        <ul>
            <li>Pieza elaborada en cuero sintético</li>
            <li>Asas en cuero sintético</li>
            <li>Tapa rígida con broche imantado</li>
            <li>Asas regulables de 140 cms</li>
            <li>Forro en sintético impermeable</li>
            <li>Bolsillo interno</li>
            <li>Medidas: 19 cms de alto x 24 cms de ancho x 8 cms de profundidad</li>
        </ul>,
        image:"/images/002.JPG",
        name:"Bandolera Jardin Mostaza",
        price:"33 USD",
        stock:"8"
    },
    {
        id:"03",
        category:"bandoleras",
        description:
        <ul>
            <li>Pieza elaborada en cuero sintético</li>
            <li>Asas en cuero sintético</li>
            <li>Tapa rígida con broche imantado</li>
            <li>Asas regulables de 140 cms</li>
            <li>Forro en sintético impermeable</li>
            <li>Bolsillo interno</li>
            <li>Medidas: 19 cms de alto x 24 cms de ancho x 8 cms de profundidad</li>
        </ul>,
        image:"/images/003.JPG",
        name:"Bandolera Organic Rosa",
        price:"36 USD",
        stock:"7"
    },
    {
        id:"04",
        category:"carteras",
        description:
        <ul>
            <li>Pieza elaborada en cuero sintético</li>
            <li>Asas en cuero sintético</li>
            <li>Tapa rígida con broche imantado</li>
            <li>Asas regulables de 140 cms</li>
            <li>Forro en sintético impermeable</li>
            <li>Bolsillo interno</li>
            <li>Medidas: 19 cms de alto x 24 cms de ancho x 8 cms de profundidad</li>
        </ul>,
        image:"/images/004.JPG",
        name:"Marinera Borla Negra",
        price:"45 USD",
        stock:"6"
    },
    {
        id:"05",
        category:"carteras",
        description:
        <ul>
            <li>Pieza elaborada en cuero sintético</li>
            <li>Asas en cuero sintético</li>
            <li>Tapa rígida con broche imantado</li>
            <li>Asas regulables de 140 cms</li>
            <li>Forro en sintético impermeable</li>
            <li>Bolsillo interno</li>
            <li>Medidas: 19 cms de alto x 24 cms de ancho x 8 cms de profundidad</li>
        </ul>,
        image:"/images/005.JPG",
        name:"Cartera Tote Suela",
        price:"48 USD",
        stock:"2"
    },
    {
        id:"06",
        category:"carteras",
        description:
        <ul>
            <li>Pieza elaborada en cuero sintético</li>
            <li>Asas en cuero sintético</li>
            <li>Tapa rígida con broche imantado</li>
            <li>Asas regulables de 140 cms</li>
            <li>Forro en sintético impermeable</li>
            <li>Bolsillo interno</li>
            <li>Medidas: 19 cms de alto x 24 cms de ancho x 8 cms de profundidad</li>
        </ul>,
        image:"/images/006.JPG",
        name:"Cartera Jardin Beige",
        price:"45 USD",
        stock:"4"
    },
    {
        id:"07",
        category:"mochilas",
        description:
        <ul>
            <li>Pieza elaborada en cuero sintético</li>
            <li>Asas en cuero sintético</li>
            <li>Tapa rígida con broche imantado</li>
            <li>Asas regulables de 140 cms</li>
            <li>Forro en sintético impermeable</li>
            <li>Bolsillo interno</li>
            <li>Medidas: 19 cms de alto x 24 cms de ancho x 8 cms de profundidad</li>
        </ul>,
        image:"/images/007.JPG",
        name:"Mochila Jardin Negra",
        price:"45 USD",
        stock:"10"
    },
    {
        id:"08",
        category:"mochilas",
        description:
        <ul>
            <li>Pieza elaborada en cuero sintético</li>
            <li>Asas en cuero sintético</li>
            <li>Tapa rígida con broche imantado</li>
            <li>Asas regulables de 140 cms</li>
            <li>Forro en sintético impermeable</li>
            <li>Bolsillo interno</li>
            <li>Medidas: 19 cms de alto x 24 cms de ancho x 8 cms de profundidad</li>
        </ul>,
        image:"/images/008.JPG",
        name:"Mochila Borla Azul",
        price:"42 USD",
        stock:"12"
    },
    {
        id:"09",
        category: "mochilas",
        description:
        <ul>
            <li>Pieza elaborada en cuero sintético</li>
            <li>Asas en cuero sintético</li>
            <li>Tapa rígida con broche imantado</li>
            <li>Asas regulables de 140 cms</li>
            <li>Forro en sintético impermeable</li>
            <li>Bolsillo interno</li>
            <li>Medidas: 19 cms de alto x 24 cms de ancho x 8 cms de profundidad</li>
        </ul>,
        image:"/images/009.JPG",
        name:"Mochila Organic Suela",
        price:"45 USD",
        stock:"8"
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
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    stock={item.stock}
                    />
                    )
            }
        </div>
    );
};

export default ItemList;
