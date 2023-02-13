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