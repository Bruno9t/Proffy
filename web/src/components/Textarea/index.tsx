import React,{memo, TextareaHTMLAttributes} from 'react'

import './styles.css'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label:string
    name:string
}

const Textarea:React.FC<TextareaProps> = ({label,name,value,...rest}) => {
    return (
        <div className="textarea-block">
            <textarea aria-checked={!!value} id={name} {...rest}/>
            <label htmlFor={name}>{label}</label>
        </div>
    )
}

export default memo(Textarea)