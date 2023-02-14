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

Após isto já podemos chamar a props e criar uma label 

***.map*** ele vai para cada item da lista ele ira retornar um array novo manipulado, ou seja ele ira criar um novo array, neste caso alem dele percorrer a lista e retornará com uma lista de opctions, ou sejá, ele percorre e devolve uma lista transformada (o .map ele lé um array e transforma o array em alguma coisa, em uma lista diferente)
Sintaxe do **.map**:

   props.itens.map(item => {  //aqui dentro eu passo meu elemento e crio uma arrow function para passar o parametro dele
        return <options>*{item}*</options>   //o {item} é oq eu quero imprimir
    })


