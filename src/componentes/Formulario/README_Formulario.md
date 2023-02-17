***Criada uma nova pasta chamada "Formulario" na aula Criando o formulario***

Dentro desta pasta ira ter o arquivo index.js e o Formulario.css

**Aba index.js (Formulario.js)**

Inicializar com uma constante nomeada com a função, segunda com a arrow function 

const Formulario = () => {
    return{

    }
}

export default Formulario;

Dentro do return, ira ser aberto uma <section>, esse elemento HTML representa uma seção autonoma generica de um documento. Após abrir a <section> será aberta uma <form> que tambem é um campo HTML que remete ao formulario. Feito isso iremos fazer o *import do CampoTexto* e trazer todas as informações do *App.js* como <CampoTexto label="Nome" placeholder="Digite o seu nome" /> . Ficando desta forma:


import './Formulario.css';
import CampoTexto from '../CampoTexto';

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha as informações abaixo:</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo" />
                <CampoTexto label="Imagem" placeholder="Insira ou digite o caminho da sua imagem" />
            </form>
        </section>
    )
}

export default Formulario


Após isto terá que retirar o inport da função <CampoTexto /> da Aba *App.js*  e realizar o import da aba *Formulario* com a função *Formulario* na *App.js*

Dentro da function formulario iremos criar um array de *const times* e após isto será chamada a aba da função <ListaSuspensa> juntamente com a minha props. ficando desta forma

import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';

const Formulario = () => {

   const times = [
        'Programação', 'Front-End', 'Data Science', 'Devops', 'UX e Desing', 'Mobile', 'Inovação e Gestão'
    ]   //<= inserção
    
   return (
        <section className="formulario">
            <form>
                <h2>Preencha as informações abaixo:</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo" />
                <CampoTexto label="Imagem" placeholder="Insira ou digite o caminho da sua imagem" />
                <ListaSuspensa label="Times" itens={times} />   //<= inserção

            </form>
        </section>
    )
}

export default Formulario

Realizada a inserção da função <Botão> abaixo da <ListaSuspensa> ficando desta forma:

import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = () => {

   const times = [
        'Programação', 'Front-End', 'Data Science', 'Devops', 'UX e Desing', 'Mobile', 'Inovação e Gestão'
    ]   //<= inserção
    
   return (
        <section className="formulario">
            <form>
                <h2>Preencha as informações abaixo:</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo" />
                <CampoTexto label="Imagem" placeholder="Insira ou digite o caminho da sua imagem" />
                <ListaSuspensa label="Times" itens={times} />   
                <Botao texto="Criar Card" />//<= inserção

            </form>
        </section>
    )
}

export default Formulario

Pensando no modo que ao criar o botão possa ter a necessidade de chamar uma imagem ou um icone, podemos alterar a propriedade botão utilizando a propriedade React chamada ***children*** que tem como função "pegar" tudo que estiver entre a abertura e o chegamento do botao na aba onde esta sendo chamado, no caso o formulario. No caso a aba botão ficará assim:

**ABA BOTAO**

import './Botao.css';

const Botao = (props) => {
    return (
        <button className="botao">
            {props.children}
        </button>
    )
}

export default Botao;

**ABA FORMULARIO**

Já na aba *index.js FORMULARIO* ficará da seguinte forma: 

   <Botao>
    Criar Card
   </Botao>

Deste modo posso colocar uma imagem ou um icone ou texto entre da seguinte forma <Botao> img... || icon... || text... </Botao> . No escopo geral ficará da seguinte forma a aba *index.js | Formulario*

import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = () => {

    const times = [
        'Programação', 'Front-End', 'Data Science', 'Devops', 'UX e Desing', 'Mobile', 'Inovação e Gestão'
    ]
        

   return (
        <section className="formulario">
            <form>
                <h2>Preencha as informações abaixo:</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo" />
                <CampoTexto label="Imagem" placeholder="Insira ou digite o caminho da sua imagem" />
                <ListaSuspensa label="Times" itens={times} />
                <Botao>
                    Criar Card
                </Botao>

            </form>
        </section>
    )
}

export default Formulario

**Aula Escutando Evento**

Para receber os eventos ao clicar podemos usar dentro da tag <form> o **onSubmit={}**, ficando da seguinte forma <form onSubmit={}>

Feito isso irei criar uma função que será executada através do <form onSubmit={}>. A função criada poderei chamar de *aoSalvar*, ela sera uma arrow function, e ficará da seguinte forma:


 const aoSalvar = () =>{
        console.log("evento de submit")
    }
        

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha as informações abaixo:</h2>
 
No entanto ocorre quando isso acontece eu precisaria interceptar o evento de click, para isso dentro da minha função *aoSalvar* irei passar um parametro chamado *evento*, e para evitar que a pagina seja recarregada ao clicar irei chamar o metodo **.preventDefault()**, que tem como função pausar, assim possibilitando a verificação do teste. Ficando da seguinte forma: 

   const aoSalvar = (evento) =>{
        evento.preventDefault()
        console.log("evento de submit")
    }
        

   return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha as informações abaixo:</h2>

                <CampoTexto label="Nome" placeholder="Digite o seu nome" />

O codigo completo ficaria assim:

import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = () => {

    const times = [
        'Programação', 'Front-End', 'Data Science', 'Devops', 'UX e Desing', 'Mobile', 'Inovação e Gestão'
    ]

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        console.log("evento de submit")
    }
        

   return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha as informações abaixo:</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo" />
                <CampoTexto label="Imagem" placeholder="Insira ou digite o caminho da sua imagem" />
                <ListaSuspensa label="Times" itens={times} />
                <Botao>
                    Criar Card
                </Botao>

            </form>
        </section>
    )
}

export default Formulario

Feito isso podemos criar as validações  para dos campos de formulario, para isto iremos usar um parametro que podemos chamar por exemplo de *"obrigatorio"* onde iremos atribuir o valor *"true"*, essa validação é nativa do HTML ficando com a sintaxe da seguinte forma: 

<CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />

O codigo completo ficaria assim:

import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = () => {

    const times = [
        'Programação', 'Front-End', 'Data Science', 'Devops', 'UX e Desing', 'Mobile', 'Inovação e Gestão'
    ]

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        console.log("evento de submit")
    }
        

   return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha as informações abaixo:</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" />
                <CampoTexto label="Imagem" placeholder="Insira ou digite o caminho da sua imagem" />
                <ListaSuspensa obrigatorio={true} label="Times" itens={times} />
                <Botao>
                    Criar Card
                </Botao>

            </form>
        </section>
    )
}

export default Formulario

**Aba CampoTexto**
Feito isso na aba CampoTexto iremos fazer outra validação, essa nativa do React.js no campo <input> iremos utilizar o **required={}** e dentro das { } iremos passar a props.obrigatorio, deste modo se o input for true o campo será obrigatorio o preenchimento do campo.

   <input required={props.obrigatorio} placeholder={props.placeholder}/>

O codico completo: 
import './CampoTexto.css'


const CampoTexto = (props) => {
    //Usado para concatenar 
    const placeholderModificada  = `${props.placeholder}... versão teste`


    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input required={props.obrigatorio} placeholder={props.placeholder}/>
              

        </div>
    ) 
};

export default CampoTexto;
***************************

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

**CSS**

.formulario {   //para chamar a função formulario e fazer o css universal
    display: flex;      //
    justify-content: center;   justificar  e alinhar no centro
    margin: 80px 0;     //margin de 80px para cima e para baixo e 0px para direita e esquerda

}
.formulario form {      //usado para chamar a classe form 
    max-width: 80%;     //o tamanho maior é de 80 porcento
    background-color: #f2f2f2;  //colocar a cor de fundo
    border-radius: 20px;    //para fazer a borda redonda
    padding: 36px 64px;     //para fazer a altura de 36px e 64px para os lados
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1);    //usado para fazer o sombreamento em volta
}