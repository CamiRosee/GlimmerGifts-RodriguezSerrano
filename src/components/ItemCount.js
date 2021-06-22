import React from 'react';



const ItemCount = ({stock, onAdd, cantidad}) => {

    state = {
        cantidad: 0,
    }


    const sumarCarrito = () => {
        if (stock > 1 && cantidad < stock){
            this.setState({cantidad: this.state.cantidad + 1}) 
        }
    }

    const restarCarrito = () => {
        this.setState({cantidad: Math.max(this.state.cantidad - 1, 0)})
    }
    
        return (
            <div className="Contador">
                <button onClick={this.sumarCarrito}>+</button>
                <p>{this.state.cantidad}</p>
                <button onClick={this.restarCarrito}>-</button>
                <button onClick={onAdd} >Agregar al carrito</button>
            </div>
        )
    }



export default ItemCount;