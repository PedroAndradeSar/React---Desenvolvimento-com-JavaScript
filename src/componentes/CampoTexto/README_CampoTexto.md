***Criada uma nova pasta chamada "CampoTexto" na aula Campo de Texto***

Dentro desta pasta ira ter o arquivo index.js e o CampoTexto.css

**Aba index.js (CampoTexto.js)**

Por **padrão da convensão** usa-se o nome da pasta de **index.js** ao inves de usar o nome **CampoTexto.js**. 
Normalmente a nivel empresarial e por conta da ornagização a estrutura utilizada é a criação de uma constante e dentro desta constante é criada uma função (arrow function) na aba *index.js* e fica da seguinte forma:

    const CampoTexto = () => {
        return(

        )
    }

    export default CampoTexto;

Criada a aba index.js na pasta CampoTexto, nos podemos chamar a nossa **const CampoTexto** no arquivo ***App.js***, e fazer o importe da mesma, ficando desta forma:

   import Banner from './componentes/Banner';
   import CampoTexto from './componentes/CampoTexto';

   function App() {
        return (
            <div className="App">
                <Banner />
                <CampoTexto />
            </div>
        );
    }       

    export default App;

Realiazado o importe para o *App.js* pode-se fazer o incremento dos campos na aba 
Para poder criar o campo de texto, pode-se usar a tag html, como <div>, dentro da div já podemos criar o className <div className=" "> <label>, <input> ficando desta forma:

   const CampoTexto = () => {
        return(
            <div className="campo-texto">
                <label>
                    Nome
                </label>
                <input>
            <div>
        )
    }

    export default CampoTexto;

Dentro do campo *<input>* podemos adicionar o **placeholder=''** que ira permitir adicionar um texto dentro do input, como por exemplo, "Digite seu nome"
Desta forma ficará assim 

const CampoTexto = () => {
        return(
            <div className="campo-texto">
                <label>
                    Nome
                </label>
                <input placeholder='Digite o seu nome'>
            <div>
        )
    }

    export default CampoTexto;

Como a intenção é reaproveitar o codigo, iremos utilizar o paramentro de ***props***, que nada mais é que as propriedades que ela recebe, no caso uma propriedade do *campotexto* do elemento *label*, essa propriedade deve ser declarada da seguinte forma ***{props.label}*** dentro do componente *<label>*
A declaração do CampoTexto que recebera a props ficara da seguinte forma <CampoTexto label="Nome" placeholder="Digite o seu nome" /> e na função CampoTexto ficará da seguinte forma.

const CampoTexto = (props) => {
    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input placeholder={props.placeholder}/>
              

        </div>
    ) 
};
export default CampoTexto;

O mesmo eu consigo fazer com o placeholder conforme demonstrado acima.


**Aula Manipulando o input do usuario**

Orientada a eventos

No React.js disponibiliza uma função que faz com que possamos ficar "ouvindo" o <input> para que toda vez que ele sofra alguma alteração, ele possa executar algo.
Para isto, temos a função **onChange={}**, que fica dentro do <input>, da seguinte forma: <input onChange={}>. Feito isso, terá que ser construido a função que ira escutar o *evento* do <input>, neste caso irei chamar de const aoDigitado = () =>{  }, ficando da seguinte forma:

import './CampoTexto.css'


const CampoTexto = (props) => {
    //Usado para concatenar 
    const placeholderModificada  = `${props.placeholder}... `

    const aoDigitado = (evento) => {            //Adicionado o parametro de evento na função
        console.log(evento.target.value)        //Realizado um console.log para receber a leitura do evento e mostrar seu valor, conforme esta sendo digitado.
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

Caso eu queira armazenar um valor de uma vareavel eu posso criar uma **let** *valor*='', no caso eu criaria uma vareavel com uma string vazia, ficando let valor=' ';
Deste modo podendo chamar ela dentro da função *aoDigitado* atribuindo-a ao *valor=evento.target.value* transformando a função da seguinte maneira: 

   let valor = '';

   const aoDigitado = (evento) => {
        valor = evento.target.value
        console.log(valor)
    }

Feito isso tendo uma visão do codigo geral irá ficar da seguinte maneira:

import './CampoTexto.css'


const CampoTexto = (props) => {
    //Usado para concatenar 
   const placeholderModificada  = `${props.placeholder}... `

   let valor = ''

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

Feito isso ja conseguimos armazenar em uma vareavel os dados fornecidos pelo input.


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














***CSS***
A *div className="campo-texto"* irá ser usada para o **CampoTexto.css**

    .campo-texto {
        margin: 24px 0;         //para criar uma margem

    }
    .campo-texto label{         //dentro do campo texto iremos selecionar o elemento label
        display: block;         //usado para quebrar a linha
        margin-bottom: 8px;     //margem para baixo
        font-size: 24px;        //tamanho da fonte
    }
    .campo-texto input {
        background-color:#fff;  //cor do fundo do texto
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0) ;   //adiciona o sombreado
        width: 100%;            //pegar 100% da tela
        border: none;           //para retirar a borda
        font-size: 24px;        //tamanho da fonte
        padding: 24px;          //tamanho interno do elemento
        box-sizing: border-box;     //para ficar do tamanho da tela 
    }