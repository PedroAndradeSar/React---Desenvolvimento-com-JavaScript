***Criada a aba Banner na aula "Primeiro Componente: Banner"***

**Aba Banner.js**

Criar uma pasta com o nome do componente, nela será criada uma de js e uma de css.

A **estrutura basica do React**.js é a seguinte:

   function **NomeDaFunção**() {
    return (
        *codigo*
        );
    }

export default Banner;

Neste caso, irei adicionar uma imagem, então ela ficará assim:
Exemplo:

   function Banner() {
        return (
            <img src="/imagens/banner.png" alt="O banner principaç da pagina do organo"/>  
        )
   };

   export default Banner;

Após isto para funcionar tem que chamar uma tag no ***src/App.js***, a tag será criada dentro da **function App() { return ( <div className="App"> )}** onde será criada a tag <Banner /> e logo a pós isto terá que ser realizado o import do aba da tag criada, ficando da segunte forma **import Banner from './componentes/Banner/Banner';**, de forma completa ira ficar da segunda forma na aba do *App.js*

    import Banner from './componentes/Banner/Banner';
    
function App() {
   return (
        <div className="App">
            <Banner />
        </div>
    );
}

    export default App;

Após isso, a Aba Banner já ira aparecer no *App.js*, está aba será a resposavel por incluir todas as tag e reenderiza-las.

Após isso será refeita a aba do style.css, que ficará responsavel por adicionar a estilização de cada componente e a sua pasta. Para fazer a estilização podemos criar um elemento hmtl como a <header> no **Banner.js**, e dentro *header* iria será criado uma *class*, no elemento html entanto o a *class* é uma palavra reservada do JS, portanto será usada a palavra **className="banner"**, ficando da seguinte forma: 

   <header className="banner">
   
   </header>

Após isto terá que ser feito a importação do css, para dar inicio a estilização no css. Ficando completo da seguinte forma:

    import './Banner.css';

   function Banner = () => {
       return (
           <header className="banner"> 
               <img src="/imagens/banner.png" alt="O banner principaç da pagina do organo"/>
           </header>
        
       )
   };

   export default Banner

***Aba do CSS***

No css iremos chamar a classe Banner onde ira acessar atravez do **className="Banner"**, para isto usaremos o . (ponto) antes do nome da classe, para ter acesso a ela, ficando da segunte forma:

    .banner {                       //ira acessar a classe no geral para estilizar
        background-color: #6278f7;  //irá colocar a cor de fundo
        text-align: center;         //irá centralizar o resto

    }
O .banner img ira acessar o imagem espeficicamente a imagem.

    .banner img {
        max-width: 100%;            //ira deixar responsivo
    }   

***Aba Banner.js***

Na aba Banner.js tem outro modo de realizar a exportação do codigo, a nivel de organização é mais utilizada é criar um *export* com uma *const* com a *arrow function* ficando da seguinte forma:

    import './Banner.css'; //importação do css.

   export const Banner = () => {
       return (
           <header className="banner"> 
               <img src="/imagens/banner.png" alt="O banner principaç da pagina do organo"/>
           </header>
        )
    };

Feito isso, é criado uma nova aba **index.js** onde só será importada a aba **Banner** que ficara assim:

    import { Banner } from "./Banner";

    export default Banner

Sendo um atalho, onde o Banner.js passa a ser um componente e o index.js passa a ser apenas um arquivo para realizar o export, assim não ficando de forma global.
