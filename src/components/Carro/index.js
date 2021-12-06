import {useContext, useEffect} from 'react'
import { UseProduct } from '../Context/useProduct'
import { useState } from 'react'
import { Burbuja } from '../Burbuja'
import {CarroContenedor, BtnCarro, ListaArticulos, Ul, Li, BtnDelete} from './styles'

export const Carro = () => {

    const [mostrarCarro, setMostrarCarro] = useState(false)
    const [update, setUpdate] = useState(false)
    let {carrito} = useContext(UseProduct)

    useEffect(()=>{},[update])
    
    
    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)
    
    let cantidad = carrito.reduce((acum, actual) => acum + actual.cantidad, 0)
    let subTotal = carrito.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto

    const handleDeleteProduct = (prod) => {
        let positionById = carrito.indexOf(prod)  
        let confirmDelete = window.confirm(`Esta seguro que desea borrar el carrito`)
        if(confirmDelete) carrito.splice(positionById, 1)  
        setUpdate(!update)

    }


    

    return (
        <CarroContenedor>
            {cantidad > 0 && <Burbuja cantidad={cantidad}/>}
            <BtnCarro onClick={handleMostrarCarro}>Carro</BtnCarro>
            {
                (cantidad > 0 && mostrarCarro) && 
                    <ListaArticulos >
                        <Ul>
                            {
                                carrito.map(x => {
                                    return (
                                        <Li key={x.id}>
                                            <img height={25} alt={x.nombre} src={x.imagen} />
                                            <span><BtnDelete onClick={()=>{handleDeleteProduct(x)}}> X </BtnDelete> {x.nombre}</span>
                                            <span>({x.cantidad} x {x.precio.toLocaleString()}) = <strong>{(x.cantidad * x.precio).toLocaleString()}</strong></span>
                                        </Li>
                                    )
                                })
                            }
                            <Li>
                                <strong>Sub total</strong>
                                <strong>{subTotal.toLocaleString()}</strong>
                            </Li>
                            <Li>
                                <strong>Impuesto</strong>
                                <strong>{impto.toLocaleString()}</strong>
                            </Li>
                            <Li>
                                <strong>Total a pagar</strong>
                                <strong>{totalPagar.toLocaleString()}</strong>
                            </Li>
                        </Ul>
                    </ListaArticulos>
            }
        </CarroContenedor>

    )
}