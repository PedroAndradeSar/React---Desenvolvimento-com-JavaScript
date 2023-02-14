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