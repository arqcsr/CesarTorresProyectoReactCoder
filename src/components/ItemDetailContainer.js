import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dataBase from '../utils/FirebaseConfig';
import { collection, getDocs } from "firebase/firestore";

///OLD ARRAY WITH DATABASE
/* const itemDetailData = [
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
]; */


///OLD PROMISE
/* let isOk = true;
let data2 = itemDetailData;
const customFetch = (timeout, data2)=> {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if (isOk){
                resolve(data2);
            }else {
                reject('KO')
            }
        },timeout)
    })
}; */

/// OLD FUNTION WITH A CUSTOMFETCH
/*      customFetch(500, data2.filter(itemDetail=>itemDetail.id === idDetail))
        .then(data2=> setProduct(data2))
        .catch(error=>alert('Hubo un error. Ver los detalles aqui', error)) */

const ItemDetailContainer = ()=>{

    const[product,setProduct]=useState([]);

    const{idDetail} = useParams();


    useEffect(()=>{
        const getProduct= async () =>{
            const querySnapshot = await getDocs(collection(dataBase, "productsFch"));
            return querySnapshot.docs.map(document =>({
                id:document.id,
                ...document.data()
            })).filter(itemDetail=>itemDetail.id === idDetail)
        }
        getProduct()
        .then(result => setProduct(result))
        .catch(error => alert(error, ': Hubo un error inesperado. Por favor intente más tarde'))
    },[idDetail]);


    return(
        <section>
            {
                product.map(itemDetail=>
                    <ItemDetail 
                        className="itemDetailProduct"
                        id={itemDetail.id}
                        key={itemDetail.id}
                        image={itemDetail.image}
                        name={itemDetail.name}
                        description={itemDetail.description}
                        price={itemDetail.price}
                        stock={itemDetail.stock}
                    />
                )
            }
        </section>
    )
};

export default ItemDetailContainer;
