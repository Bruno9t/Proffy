import React from 'react'

// icons
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

// styles
import './styles.css'

const TeacherItem = () => {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/54510870?s=460&u=3955020f2c9100560f9aea28a7b7a318384cf938&v=4" alt="Imagem do proffy"/>
                        <div>
                            <strong>Bruno Medeiros</strong>
                            <span>Matemática</span>
                        </div>
                    </header>

                    <p>
                        Grande matemático, premiado com a medalha fields 6 vezes.
                        <br/><br/>
                        Especialista em Teoria dos Grafos e Topologia.
                    </p>

                    <footer>
                        <div>
                            <strong>R$ 100,00&nbsp;<span>/hora</span></strong>
                        </div>
                        <div>
                        <button type='button'>
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                        </div>
                    </footer>
                </article>
    )
}

export default TeacherItem