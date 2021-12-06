import {BtnAddCart} from './styles'

export const Button = ({children, agregarAlCarro, prod}) => {
    return (
        <BtnAddCart onClick={() => agregarAlCarro(prod)}>{children}</BtnAddCart>
    )
}
