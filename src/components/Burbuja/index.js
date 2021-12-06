import {BurbujaNumero} from './styles'




export const Burbuja = ({ cantidad }) => {
    return (
        <BurbujaNumero>{cantidad > 9 ? '9+' : cantidad}</BurbujaNumero>
    )   
}