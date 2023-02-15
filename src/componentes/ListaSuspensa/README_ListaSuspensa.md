***Criada uma nova pasta chamada "ListaSuspensa" na aula ListaSuspensa***

Dentro desta pasta ira ter o arquivo index.js e o ListaSuspensa.css

**Aba index.js (ListaSuspensa.js)**

Realizar a estrutura basica, já importando o .css 

import './ListaSuspensa.css'

const ListaSuspensa = () => {
    return(
        
    )
}

export default ListaSuspensa;

Após isto já podemos chamar a props e criar uma label, ficando da seguinte forma:
import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

   return (
        <div>
            <label>
                {props.label}
            </label>
        </div>
    )
}

export default ListaSuspensa;

Após isso poderemos chamar o <select> que no meio dele iremos adicionar as iremos utilizar o metodo *.map*


***.map*** ele vai para cada item da lista ele ira retornar um array novo manipulado, ou seja ele ira criar um novo array, neste caso alem dele percorrer a lista e retornará com uma lista de opctions, ou sejá, ele percorre e devolve uma lista transformada (o .map ele lé um array e transforma o array em alguma coisa, em uma lista diferente)
Sintaxe do **.map**:

   props.itens.map(item => {                    //aqui dentro eu passo meu elemento e crio uma arrow function para passar o parametro dele
        return <options>*{item}*</options>      //o {item} é oq eu quero imprimir ele tem que ser entre **{ }**
    })

Desse modo o *.map* ira me retornar um novalista de array, no caso uma lista de <options> com meu novo array.
Sintaxe completa utilizando o **.map**

import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

   return (
        <div className="lista_suspensa">
            <label>
                {props.label}
            </label>
            <select required={props.required}>
            {props.itens.map(item => {
                    return <option> {item} </option>
                })}
            </select>

        </div>
    )
}

export default ListaSuspensa;

No consele do navegador o ele ira pedir um *key* que seria como se fosse uma chave unica, ela pode ser realizada por nome ou pelo numero do array atravez do index, por numero do array não é recomendado a se fazer pois se for necessario realizar remover um item da lista e remapear os itens, ele não ira reendenizar novamente pois teoricamente o item que pertence ao array estaria apagado, neste caso, esse *key* pode ser o nome do item por exemplo, ficando desta forma:

import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    console.log(props.itens)

   return (
        <div className="lista_suspensa">
            <label>
                {props.label}
            </label>
            <select required={props.required}>
                {props.itens.map(item => {
                    return <option key={item}> {item} </option>
               })}
            </select>
        </div>
    )
}

export default ListaSuspensa;

Essa parte:
                    return <option key={item}> {item} </option>

Estamos utilizando o nome que pertence ao item como *key* deste modo fica mais simplificado e não utilizaremos o id do array.

***css***

.lista_suspensa label{
    display: block;
    margin-bottom: 8px;
    font-size: 24px;
}

.lista_suspensa select {
    background-color: #fff;
    box-shadow: 10px 10px 30px rgba(0,0,0,0.06);
    width: 100%;
    border: none;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
}