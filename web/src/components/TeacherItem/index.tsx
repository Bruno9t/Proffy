import React, { memo } from 'react'

// icons
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api'

// styles
import './styles.css'


export interface TeacherShape {
    avatar: string
    bio: string
    id:number
    cost: number
    name: string
    user_id:number
    subject: string
    whatsapp: string
}

interface Props {
    teacher:TeacherShape
}


const TeacherItem:React.FC<Props> = ({
    teacher:{name,subject,avatar,whatsapp,user_id,cost,bio},
    ...rest}) => {

        function createNewConnection(){
            api.post('connections',{
                user_id,
            })
        }

    return (
        <article className="teacher-item">
                    <header>
                        <img src={avatar} alt="Imagem do proffy"/>
                        <div>
                            <strong>{name}</strong>
                            <span>{subject}</span>
                        </div>
                    </header>

                    <p>
                        {bio}
                        {/* Grande matemático, premiado com a medalha fields 6 vezes.
                        <br/><br/>
                        Especialista em Teoria dos Grafos e Topologia. */}
                    </p>

                    <footer>
                        <div>
                        <strong>R$ {cost}&nbsp;<span>/hora</span></strong>
                        </div>
                        <div>
                        <a target="_blank" 
                        onClick={createNewConnection} href={`https://wa.me/${whatsapp}`}>
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </a>
                        </div>
                    </footer>
                </article>
    )
}

export default memo(TeacherItem)