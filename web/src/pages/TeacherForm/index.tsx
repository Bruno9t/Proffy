import React, { FormEvent, FormEventHandler, useState } from 'react'
import Input from '../../components/Input'
import PageHeader from '../../components/PageHeader'

import api from '../../services/api'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'
import ScheduleItem from '../../components/ScheduleItem'
import { useHistory } from 'react-router-dom'

interface ScheduleItem {
    [key:string]:string | number
    week_day:number | string
    from:string
    to:string
}

function TeacherForm(){
    const history = useHistory()

    const [scheduleItems,setScheduleItems] = useState<ScheduleItem[]>([
        {week_day:'',from:'',to:''}
    ])

    const [name,setName ] = useState('')
    const [avatar,setAvatar ] = useState('')
    const [whatsapp,setWhatsapp ] = useState('')
    const [bio,setBio ] = useState('')

    const [subject,setSubject ] = useState('')
    const [cost,setCost ] = useState('')

    // const [week,setWeek] = useState('')
    // const [from,setFrom ] = useState('')
    // const [to,setTo ] = useState('')


    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            {week_day:'',from:'',to:''}
        ])
    }

    function setScheduleItemValue(position:number,field:string,value:string){

        const newArray = scheduleItems.map((scheduleItem,index)=>{
            if(index === position){
                return {
                    ...scheduleItem,
                    [field]:value
                }
            }

            return scheduleItem
        })

        // const newArray = scheduleItems

        // newArray[position][field] = value

        console.log(newArray)

        setScheduleItems(newArray)

    }

    function handleSubmit(e:FormEvent){
        e.preventDefault()

        api.post('classes',{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost:Number(cost),
            schedule:scheduleItems
        }).then(()=>{
            alert("Cadastro realizado com sucesso!")

            history.push('/')

        }).catch((err)=>{
            console.log(err)
            alert("Erro no cadastro!")
        })
    }

    return (
        <div id="page-teacher-form" className='container'>
            <PageHeader 
            title = "Que incrível que você quer dar aulas." 
            description="O primeiro passo é preencher esse formulário de inscrição."
            />


            <main>
                <form action="" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input type='text' name="name" label="Nome completo" 
                    autoFocus 
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                    required
                    />
                    <Input type='url' name="avatar" label="Avatar" 
                    onChange={(e)=>setAvatar(e.target.value)}
                    value={avatar}
                    />
                    <Input type='text' name="whatsapp" label="Whatsapp"
                    onChange={(e)=>setWhatsapp(e.target.value)}
                    value={whatsapp}
                    required
                    />
                    <Textarea label="Biografia" name="bio"
                    onChange={(e)=>setBio(e.target.value)}
                    value={bio}
                    />
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select
                    name="subject" 
                    label="Matéria"
                    onChange={(e)=>setSubject(e.target.value)}
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
                    required
                     />

                    <Input type='text' name="cost" label="Custa da sua aula por hora" 
                    onChange={(e)=>setCost(e.target.value)}
                    value={cost}
                    required
                    />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type='button' onClick={addNewScheduleItem}>
                            + Novo horário
                        </button>
                    </legend>

                    {scheduleItems.map((scheduleItem,index)=>(
                        <div key={index} className='schedule-item'>
                        <Select 
                        name={"week_day"+index} 
                        label="Dia da semana"
                        onChange={e=>setScheduleItemValue(index,"week_day",e.target.value)}
                        value={scheduleItem.week_day}
                        options={[
                            {value:"1",label:"Segunda"},
                            {value:"2",label:"Terça"},
                            {value:"3",label:"Quarta"},
                            {value:"4",label:"Quinta"},
                            {value:"5",label:"Sexta"},
                            {value:"6",label:"Sábado"},
                            {value:"0",label:"Domingo"},
                        ]}
                        required
                        />
                         <Input type='time' name={"from"+index} label="Início" 
                         onChange={e=>setScheduleItemValue(index,"from",e.target.value)}  
                         value={scheduleItem.from} 
                         required                     
                         />
                         <Input type='time' name={"to"+index} label="Fim" 
                         onChange={e=>setScheduleItemValue(index,"to",e.target.value)}
                         value={scheduleItem.to}
                         required
                         />
                        </div>
                    ))}
                </fieldset>
                <footer>
                    <p>
                        <img src={warningIcon} alt="Ícono de aviso important"/>
                        Importante! <br/>
                        Preencha todos os dados
                    </p>

                    <button type="submit">Salvar cadastro</button>
                </footer>
                </form>
            </main>            
        </div>
    )
}

export default TeacherForm