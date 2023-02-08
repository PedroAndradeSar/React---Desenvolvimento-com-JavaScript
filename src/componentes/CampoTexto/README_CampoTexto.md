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


Para poder criar o campo de texto, pode-se usar a tag html, como <div>, <label>, <input>

