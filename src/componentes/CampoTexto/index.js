import './CampoTexto.css'
import { useState } from 'react'

const CampoTexto = (props) => {
    //Usado para concatenar 
    const placeholderModificada  = `${props.placeholder}... `

    // let valor = ''

    const [valor, setValor] = useState()

    const aoDigitado = (evento) => {
        valor = evento.target.value
        console.log(valor)
    }


    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>

        </div>
    ) 
};

export default CampoTexto;