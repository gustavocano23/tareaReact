import { useContext, useRef, useState, useEffect } from "react";
import { Articulo } from "../Articulo";
import { Container, TxtSearch, BtnSearch } from "./styles";
import {UseProduct} from '../Context/useProduct'

export const Articulos = () => {
    
    
    let {articulos} = useContext(UseProduct)
    const [productos, setProductos] = useState(articulos)
    const [update, setUpdate] = useState(false)
    const [showButton, setShowButton] = useState(true)
    
    
    //Variable del input para capturar el valor usando el Hook useRef
    let buscarProducto = useRef(null)

    //Hook useEffect para renderizar todos los productos una vez que haya buscado
    useEffect(()=>{setShowButton(true)}, [update])

    const handleSearch = () =>{
        let productBySearch = buscarProducto.current.value
        let findProduct =  productos.find((prod) => prod.nombre === productBySearch)
        if (!productBySearch || !findProduct){setUpdate(!update); return}
        setShowButton(false)
        setProductos([findProduct])
    }
   
    return (
        <>
            {(showButton) ? (
                <>
                    <TxtSearch ref={buscarProducto} type="text" placeholder="Nombre del producto a buscar"  />
                    <BtnSearch onClick={handleSearch}>Buscar producto</BtnSearch>
                </>
            ): <BtnSearch style={{marginTop:100}} onClick={()=>{setUpdate(!update)}}>Mostrar Todos los productos</BtnSearch>}
            <Container>{productos.map(prod => <Articulo key={prod.id} prod={prod}/>)}</Container>
        </>
    )
}