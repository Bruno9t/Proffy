import React,{memo, HTMLProps} from 'react'
import Input from '../Input'
import Select from '../Select'

import './styles.css'

interface Props extends HTMLProps<HTMLDivElement>  {
    week_day:string | number
    from:string
    to:string
}


const ScheduleItem:React.FC<Props> = ({week_day,from,to,onChange ,...rest}) => {
    return (
        <div onChange={onChange} className='schedule-item' {...rest}>
            <Select 
            name="week_day" 
            label="Dia da semana"
            options={[
                {value:"1",label:"Segunda"},
                {value:"2",label:"Terça"},
                {value:"3",label:"Quarta"},
                {value:"4",label:"Quinta"},
                {value:"5",label:"Sexta"},
                {value:"6",label:"Sábado"},
                {value:"0",label:"Domingo"},
            ]}
            defaultValue={week_day} 
            />
            <Input type='time' name="from" label="Início" defaultValue={from} />
            <Input type='time' name="to" label="Fim" defaultValue={to}/>
        </div>   
    )
}

export default memo(ScheduleItem)