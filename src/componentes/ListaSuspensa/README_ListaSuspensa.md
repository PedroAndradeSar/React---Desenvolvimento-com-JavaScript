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
**************

***aba Campo Texto***

***Aula Controlando o Estado***

Nesta aula ira tratar referente a **hook useState** conhecido como hook do estado.

Para usar o useState, temos que fazer o import dele, import { useState } from 'react', ficando desta forma:

import './CampoTexto.css'
import { useState } from 'react'

O useState fornece um array de 2 valores, no array da posição 0 [**0**, 1] ira ser o valor original (valor real do estado), equanto o array na posição 1 [0, **1**] ira ter a palavra **set** na frente da vareravel, ficando da seguinte forma [0, **set1**], o array da posição *set1* tem a função de atualizar esse valor e renderiza-lo. exemplo utilizando o nome da vareavel chamada "valor", sua sintaxe ficará assim:

const [valor, setValor] = useState()

Após isso, o valor da const aoDigitado deverá ser atualizado, ficando da seguinte forma:

    const [valor, setValor] = useState()

    const aoDigitado = (evento) => {
        setValor(evento.target.value)
        console.log(valor)
    }

Deixando o codigo completo da seguinte forma:

import './CampoTexto.css'
import { useState } from 'react'

const CampoTexto = (props) => {
    //Usado para concatenar 
    const placeholderModificada  = `${props.placeholder}... `

    // let valor = ''

    const [valor, setValor] = useState()

    const aoDigitado = (evento) => {
        setValor(evento.target.value)
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

Feito isso, o correto é fazer uma elevação de estado do *useStates()*, ou seja, cada campo de texto tem que ter o seu campo individual, como por exemplo: um campo para nome, um para cargo e imagem, ou seja, ele não pode ficar do lado com componente campo de texto, neste caso ele precisaria de vim de um lugar mais alto, o **Formulario**, e para fazer isso devemos apagar o estado local, e receber a vareavel **aoDigitado** via *props* fazendo com que o codigo fique dessa forma:

import './CampoTexto.css'
import { useState } from 'react'

const CampoTexto = (props) => {
    //Usado para concatenar 
    const placeholderModificada  = `${props.placeholder}... `
    
    const aoDigitado = (evento) => {
        props.aoAlterado(evebto.target.value)
    }


   return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>

        </div>
    ) 
};

export default CampoTexto;

***Aba Formulario***
Feito isso agora tem que passar os parametros para o *FORMULARIO*

Na aba *Formulario* será criada uma **const[] = useState()** ela ira se repetir 3x, cada uma passando o parametro necessario, como por exemplo os parametros *nome* *setNome*, *cargo* *setCargo*, *imagem* *setImagem*, ficando da seguinte forma

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')

Feito isso, agora precisaremos setar os campos para serem manipulados. No caso as vareaveis dentro dos *arrays* dos *useStates()* adicionando dentro do *<CampoTexto valor={nome} aoAlterado={valor => setNome(valor)}>*  fazendo isso para todos os campos, ficando desta forma:

import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = () => {

    const times = [
        'Programação', 'Front-End', 'Data Science', 'Devops', 'UX e Desing', 'Mobile', 'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const aoSalvar = (evento) =>{
        evento.preventDefault()
        console.log("evento de submit", nome, cargo, imagem, time)
    }
        

   return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha as informações abaixo:</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite o seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Insira oudigite o caminho da sua imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />  
                <ListaSuspensa
                    obrigatorio={true}
                    label="Times"
                    itens={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario


***Aba ListaSuspensa***

Feito isso agora tem que passar os parametros para o *ListaSuspensa*

Para isto terá que ser realizada a passagem dos mesmos parametros que fui passado no input da Aba CampoTexto, na aba ListaSuspensa dentro do campo <select> iremos passar value={props.valor} onChange={evento => props.aoDigitado(evento.target.value)} , ficando desta forma:

import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    //console.log(props.itens)

   return (
        <div className="lista_suspensa">
            <label>
                {props.label}
            </label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor} >
                {props.itens.map(item => {
                    return <option key={item}> {item} </option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa;

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