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