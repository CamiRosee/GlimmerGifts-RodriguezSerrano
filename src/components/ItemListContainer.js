import React from 'react';
import ItemCount from './ItemCount'


function ItemListContainer({mensaje}){

    

    return(   
        <div>
            <h3>{mensaje}</h3>

            <ItemCount stock={7} cantidad={1} onAdd={() => alert("Sus items fueron agregados con éxito al carrito!")} />
        </div>
    );
};


export default ItemListContainer;