import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../../utils/validators/validators";
import {TextArea} from "../../../common/formsControls/formsControls";


type newPostOwnProps = {

}

export type newPostValuesType = {
    newPostText:string
}

const maxLength20 = maxLengthCreator(20)

let NewPostForm: React.FC<InjectedFormProps<newPostValuesType, newPostOwnProps> & newPostOwnProps>
    = ({handleSubmit, error}) => {

    return (

        <form onSubmit={handleSubmit}>

                <Field   name={"newPostText"}
                         component={TextArea}
                         placeholder={"textarea"}
                validate={[requiredField,maxLength20]}/>
            <button>Add</button>
        </form>)}

export const NewPostTextForm = reduxForm<newPostValuesType, newPostOwnProps>({form: 'post'})(NewPostForm)