import ItemDetail from './ItemDetail';
import image1 from'./images/001.JPG'
import { useEffect, useState } from 'react';

/* array con detalle de producto */

const itemDetailData = [
    {
        id:"01",
        itemDetailImage:image1,
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
    }
];


/* promesa */
let isOk = true;

const customFetch = (timeout, data)=> {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if (isOk){
                resolve(itemDetailData);
            }else {
                reject('KO')
            }
        },timeout)
    })
};


const ItemDetailContainer = ()=>{

    const[product,setProduct]=useState([]);

    function getProduct(){
        customFetch(3000, itemDetailData)
        .then(data=> setProduct(itemDetailData))
        .catch(error=>alert('Hubo un error. Ver los detalles aqui', error))
    };

    useEffect(getProduct,[]);

    return(
        <section>
            {
                product.map(itemDetail=>
                    <ItemDetail 
                        className="itemDetailProduct"
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
