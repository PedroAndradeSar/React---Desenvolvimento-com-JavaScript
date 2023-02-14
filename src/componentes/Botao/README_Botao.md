***Criada uma nova pasta chamada "Botao" na aula Criando o Botao***

Dentro desta pasta ira ter o arquivo index.js e o Botao.css

**Aba index.js (Botao.js)**

Iniciar a aba index.js com a estrutura basica:

import './Botao.css';

const Botao = () => {
    return(

    )
}

export default Botao;

Logo em seguida realizar a props dentro de uma tag HTML <button> e chamar a propriedade que eu irei criar de *texto*. Ficando com a sintaxe dessa forma {props.texto}. 

import './Botao.css';

const Botao = (props) => {
    return (
        <button>
            {props.texto}
        </button>
    )
}

export default Botao;

feito isso, irei chamar a função no index.js do meu Formulario, pois lá é que esta sendo construido o meu formulario.

Pensando no modo que ao criar o botão possa ter a necessidade de chamar uma imagem ou um icone, podemos alterar a propriedade botão utilizando a propriedade React chamada ***children*** que tem como função "pegar" tudo que estiver entre a abertura e o chegamento do botao na aba onde esta sendo chamado, no caso o formulario. No caso a aba botão ficará assim:

import './Botao.css';

const Botao = (props) => {
    return (
        <button className="botao">
            {props.children}
        </button>
    )
}

export default Botao;

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

*Criando validação no input CampoTexto*

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




***CSS***

.botao{
    background-color: #6278f7;
    border-radius:  10px;
    font-weight: 700; /*PARA DEIXAR A FONTE ESCURA*/
    font-size: 18px;
    padding: 32px;
    border: none;       /*para tirar a borda*/
    cursor: pointer;   /*Para deixar com o cursor do mause com a maozinha*/
    color: #fff;
    margin: 32px 0;
}
.botao:hover { /*Para fazer effeito quando passar em cima do botao*/
    color:#95ffd4

}