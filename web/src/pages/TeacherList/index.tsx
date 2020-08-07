import React, { FormEvent, useState } from 'react'
import PageHeader from '../../components/PageHeader'


// styles
import './styles.css'

import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'
import api from '../../services/api'

import {TeacherShape} from '../../components/TeacherItem'


function TeacherList(){
    const [teachers,setTeachers] = useState([])

    const [subject,setSubject] = useState('')
    const [week,setWeek] = useState('')
    const [time,setTime] = useState('')


    async function searchTeachers(e:FormEvent){
        e.preventDefault()


        const {data} = await api.get('classes',{
            params:{
            subject,
            week_day:week,
            time
            }
        })

        console.log(data)

        setTeachers(data)

    }


    return (

        <div id="page-teacher-list" className='container'>
            <PageHeader 
            title="Estes são os proffys disponíveis." 
            >
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                    name="subject" 
                    label="Matéria"
                    onChange={e=>setSubject(e.target.value)}
                    value={subject}
                    options={[
                        {value:"Artes",label:"Artes"},
                        {value:"Biologia",label:"Biologia"},
                        {value:"Ciências",label:"Ciências"},
                        {value:"Física",label:"Física"},
                        {value:"Geografia",label:"Geografia"},
                        {value:"História",label:"História"},
                        {value:"Matemática",label:"Matemática"},
                        {value:"Química",label:"Química"},
                        {value:"Português",label:"Português"},
                        {value:"Educação física",label:"Educação física"},

                    ]} 
                     />
                    <Select 
                    name="week_day" 
                    label="Dia da semana"
                    onChange={e=>setWeek(e.target.value)}
                    value={week}
                    options={[
                        {value:"1",label:"Segunda"},
                        {value:"2",label:"Terça"},
                        {value:"3",label:"Quarta"},
                        {value:"4",label:"Quinta"},
                        {value:"5",label:"Sexta"},
                        {value:"6",label:"Sábado"},
                        {value:"0",label:"Domingo"},
                    ]} 
                    />
                    <Input type='time' name="time" label="Horário" defaultValue="00:00" 
                    onChange={e=>setTime(e.target.value)}
                    value={time}
                    />

                    <button type='submit'>
                        Buscar
                    </button>
                </form>

            </PageHeader> 

            <main>
                
                    {teachers.map((teacher:TeacherShape)=>(
                        <TeacherItem key={teacher.id} teacher={teacher} />
                    ))}
                
            </main>           
        </div>

    )
}

export default TeacherList