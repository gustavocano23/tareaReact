import { useContext } from 'react'
import { Button } from '../Button'
import { Container, Image, ProductName, Price } from './styles'
import { UseProduct } from '../Context/useProduct'

export const Articulo = ({prod}) => {

    let {agregarAlCarro} = useContext(UseProduct)

    return (
        <Container nombre={prod.nombre}>
            <Image imagen={prod.imagen} />
            <ProductName>{prod.nombre}</ProductName>
            <Price>${prod.precio.toLocaleString()}</Price>
            <Button prod={prod} agregarAlCarro={agregarAlCarro}>Add To Cart</Button>
        </Container>
    )
}