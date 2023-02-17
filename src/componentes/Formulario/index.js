import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = () => {

    const times = [
        'Programação', 'Front-End', 'Data Science', 'Devops', 'UX e Desing', 'Mobile', 'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const aoSalvar = (evento) =>{
        evento.preventDefault()
        console.log("evento de submit", nome, cargo, imagem, time)
    }
        

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha as informações abaixo:</h2>

                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite o seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Insira oudigite o caminho da sua imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                
                <ListaSuspensa
                    obrigatorio={true}
                    label="Times"
                    itens={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />

                <Botao>
                    Criar Card
                </Botao>

            </form>
        </section>
    )
}

export default Formulario