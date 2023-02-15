import './CampoTexto.css'


const CampoTexto = (props) => {
    //Usado para concatenar 
    //const placeholderModificada  = `${props.placeholder}... versão teste`

    let valor = 'Pedro';
    const aoDigitado = (evento) => {
        valor=evento.target.value
        console.log(valor)
    }


    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value = {valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
              

        </div>
    ) 
};

export default CampoTexto;