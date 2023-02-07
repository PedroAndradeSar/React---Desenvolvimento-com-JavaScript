import './CampoTexto.css'


const CampoTexto = (props) => {
    //Usado para concatenar 
    const placeholderModificada  = `${props.placeholder}... versão teste`


    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input placeholder={placeholderModificada}/>
              

        </div>
    ) 
};

export default CampoTexto;