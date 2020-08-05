import React from 'react'
import PageHeader from '../../components/PageHeader'


// styles
import './styles.css'
import TeacherItem from '../../components/TeacherItem'

function TeacherList(){
    return (

        <div id="page-teacher-list" className='container'>
            <PageHeader 
            title="Estes são os proffys disponíveis." 
            >
                <form id="search-teachers">
                    <div className="input-block">
                        <input type="text" id="subject"/>
                        <label htmlFor="subject">Matéria</label>
                    </div>
                    <div className="input-block">
                        <input type="text" id="week-day"/>
                        <label htmlFor="week-day">Dia da semana</label>
                    </div>
                    <div className="input-block">
                        <input type="text" id="time"/>
                        <label htmlFor="time">Hora</label>
                    </div>
                </form>

            </PageHeader> 

            <main>
                
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                
            </main>           
        </div>

    )
}

export default TeacherList