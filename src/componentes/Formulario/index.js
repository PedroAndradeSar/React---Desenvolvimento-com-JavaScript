import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';

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

            </form>
        </section>
    )
}

export default Formulario