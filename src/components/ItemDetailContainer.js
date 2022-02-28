import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

/* array con detalle de producto */

const itemDetailData = [
    {
        id:"01",
        itemDetailImage:"/images/001.JPG",
        itemDetailName:"Bandolera Borla Azul",
        itemDetaildescription:
            <ul>
                <li>Pieza elaborada en cuero sintético</li>
                <li>Asas en cuero sintético</li>
                <li>Tapa rígida con broche imantado</li>
                <li>Asas regulables de 140 cms</li>
                <li>Forro en sintético impermeable</li>
                <li>Bolsillo interno</li>
                <li>Medidas: 19 cms de alto x 24 cms de ancho x 8 cms de profundidad</li>
            </ul>,
        itemDetailPrice:"35 USD",
        itemDetailStock:"3",
    },
    {
        id:"02",
        itemDetailImage:"/images/002.JPG",
        itemDetailName:"Bandolera Jardin Mostaza",
        itemDetaildescription:
            <ul>
                <li>Pieza elaborada en cuero sintético</li>
                <li>Asas en cuero sintético</li>
                <li>Tapa rígida con broche imantado</li>
                <li>Asas regulables de 140 cms</li>
                <li>Forro en sintético impermeable</li>
                <li>Bolsillo interno</li>
                <li>Medidas: 19 cms de alto x 24 cms de ancho x 8 cms de profundidad</li>
            </ul>,
        itemDetailPrice:"33 USD",
        itemDetailStock:"8",
    },
    {
        id:"03",
        itemDetailImage:"/images/003.JPG",
        itemDetailName:"Bandolera Organic Rosa",
        itemDetaildescription:
            <ul>
                <li>Pieza elaborada en cuero sintético</li>
                <li>Asas en cuero sintético</li>
                <li>Tapa rígida con broche imantado</li>
                <li>Asas regulables de 140 cms</li>
                <li>Forro en sintético impermeable</li>
                <li>Bolsillo interno</li>
                <li>Medidas: 19 cms de alto x 24 cms de ancho x 8 cms de profundidad</li>
            </ul>,
        itemDetailPrice:"36 USD",
        itemDetailStock:"7",
    },
    {
        id:"04",
        itemDetailImage:"/images/004.JPG",
        itemDetailName:"Marinera Borla Negra",
        itemDetaildescription:
            <ul>
                <li>Pieza elaborada en cuero sintético</li>
                <li>Asas en cuero sintético</li>
                <li>Tapa rígida con broche imantado</li>
                <li>Asas regulables de 140 cms</li>
                <li>Forro en sintético impermeable</li>
                <li>Bolsillo interno</li>
                <li>Medidas: 19 cms de alto x 24 cms de ancho x 8 cms de profundidad</li>
            </ul>,
        itemDetailPrice:"45 USD",
        itemDetailStock:"6",
    },
    {
        id:"05",
        itemDetailImage:"/images/005.JPG",
        itemDetailName:"Cartera Tote Suela",
        itemDetaildescription:
            <ul>
                <li>Pieza elaborada en cuero sintético</li>
                <li>Asas en cuero sintético</li>
                <li>Tapa rígida con broche imantado</li>
                <li>Asas regulables de 140 cms</li>
                <li>Forro en sintético impermeable</li>
                <li>Bolsillo interno</li>
                <li>Medidas: 19 cms de alto x 24 cms de ancho x 8 cms de profundidad</li>
            </ul>,
        itemDetailPrice:"48 USD",
        itemDetailStock:"2",
    },
    {
        id:"06",
        itemDetailImage:"/images/006.JPG",
        itemDetailName:"Cartera Jardin Beige",
        itemDetaildescription:
            <ul>
                <li>Pieza elaborada en cuero sintético</li>
                <li>Asas en cuero sintético</li>
                <li>Tapa rígida con broche imantado</li>
                <li>Asas regulables de 140 cms</li>
                <li>Forro en sintético impermeable</li>
                <li>Bolsillo interno</li>
                <li>Medidas: 19 cms de alto x 24 cms de ancho x 8 cms de profundidad</li>
            </ul>,
        itemDetailPrice:"45 USD",
        itemDetailStock:"4",
    },
    {
        id:"07",
        itemDetailImage:"/images/007.JPG",
        itemDetailName:"Mochila Jardin Negra",
        itemDetaildescription:
            <ul>
                <li>Pieza elaborada en cuero sintético</li>
                <li>Asas en cuero sintético</li>
                <li>Tapa rígida con broche imantado</li>
                <li>Asas regulables de 140 cms</li>
                <li>Forro en sintético impermeable</li>
                <li>Bolsillo interno</li>
                <li>Medidas: 19 cms de alto x 24 cms de ancho x 8 cms de profundidad</li>
            </ul>,
        itemDetailPrice:"45 USD",
        itemDetailStock:"10",
    },
    {
        id:"08",
        itemDetailImage:"/images/008.JPG",
        itemDetailName:"Mochila Borla Azul",
        itemDetaildescription:
            <ul>
                <li>Pieza elaborada en cuero sintético</li>
                <li>Asas en cuero sintético</li>
                <li>Tapa rígida con broche imantado</li>
                <li>Asas regulables de 140 cms</li>
                <li>Forro en sintético impermeable</li>
                <li>Bolsillo interno</li>
                <li>Medidas: 19 cms de alto x 24 cms de ancho x 8 cms de profundidad</li>
            </ul>,
        itemDetailPrice:"42 USD",
        itemDetailStock:"12",
    },
    {
        id:"09",
        itemDetailImage:"/images/009.JPG",
        itemDetailName:"Mochila Organic Suela",
        itemDetaildescription:
            <ul>
                <li>Pieza elaborada en cuero sintético</li>
                <li>Asas en cuero sintético</li>
                <li>Tapa rígida con broche imantado</li>
                <li>Asas regulables de 140 cms</li>
                <li>Forro en sintético impermeable</li>
                <li>Bolsillo interno</li>
                <li>Medidas: 19 cms de alto x 24 cms de ancho x 8 cms de profundidad</li>
            </ul>,
        itemDetailPrice:"45 USD",
        itemDetailStock:"8",
    }
];


/* promesa */
let isOk = true;
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
};


const ItemDetailContainer = ()=>{

    const[product,setProduct]=useState([]);

    const{idDetail} = useParams();
    //console.log(idDetail); prueba del useParams

    function getProduct(){
        customFetch(500, data2.filter(itemDetail=>itemDetail.id === idDetail))
        .then(data2=> setProduct(data2))
        .catch(error=>alert('Hubo un error. Ver los detalles aqui', error))
    };

    useEffect(getProduct,[idDetail]);


    return(
        <section>
            {
                product.map(itemDetail=>
                    <ItemDetail 
                        className="itemDetailProduct"
                        id={itemDetail.id}
                        key={itemDetail.id}
                        itemDetailImage={itemDetail.itemDetailImage}
                        itemDetailName={itemDetail.itemDetailName}
                        itemDetaildescription={itemDetail.itemDetaildescription}
                        itemDetailPrice={itemDetail.itemDetailPrice}
                        itemDetailStock={itemDetail.itemDetailStock}
                    />
                )
            }
        </section>
    )
};

export default ItemDetailContainer;
