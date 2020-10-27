import React from "react";
import formStyle from './formsControls.module.css';
type TextAreaTypes ={
     input:{
         name: string,
         value: string}
     meta:any,
    children:any
}
export const FormControl = ({input,meta,children,...props}:TextAreaTypes) =>{
    const hasError = meta.touched && meta.error;
    return(
        <div className={formStyle.form_control + ' ' + (hasError? formStyle.error:"") }>
            <div>
                {children}
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const TextArea = (props:any) =>{
   const {input,meta,child,...restProps} = props;
    return(
        <FormControl {...props} ><textarea {...input} {...restProps} /> </FormControl>
    )
}

export const Input = (props:any) =>{
    const {input,meta,child,...restProps} = props;
    return(

        <FormControl {...props} ><input {...input} {...restProps} /> </FormControl>

    )
}