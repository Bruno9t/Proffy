import React,{InputHTMLAttributes, memo} from 'react'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label:string
    name:string
}

const Input:React.FC<InputProps> = ({label,name,value ,...rest}) => {
    return (
        <div className="input-block">
            <input aria-expanded={!!value} id={name} {...rest}/>
            <label htmlFor={name}>{label}</label>
        </div>
    )
}

export default memo(Input)