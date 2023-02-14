import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className="lista_suspensa">
            <label>
                {props.label}
            </label>
            <select required={props.obrigatorio}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>

        </div>
    )
}

export default ListaSuspensa;