import './Banner.css'; //importação do css.

export const Banner = () => {
    return (
        //não pode usar a class apenas, pois é uma palavra reservada do js, teria que usar o className=""
        <header className="banner"> 
            <img src="/imagens/banner.png" alt="O banner principaç da pagina do organo"/>
        </header>
        
    )
};