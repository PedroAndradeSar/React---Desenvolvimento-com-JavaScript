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