import React,{memo, SelectHTMLAttributes} from 'react'

import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label:string
    name:string
    options?:Array<{
        value:string,
        label:string
    }>
}

const Select:React.FC<SelectProps> = ({label,name,options,value,...rest}) => {
    return (
        <div className="select-block">
            <select aria-checked={!!String(value)} defaultValue="" id={name} {...rest}>
                <option hidden disabled value="" ></option>
                {
                    options?.length && (
                        options.map(option=>(
                            <option key={option.value} value={option.value} >{option.label}</option>
                        ))
                        )
                 }
            </select>
            <label htmlFor={name}>{label}</label>
        </div>
    )
}

export default memo(Select)