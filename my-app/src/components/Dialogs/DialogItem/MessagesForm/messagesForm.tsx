import React from "react";
import {Field, InjectedFormProps, reduxForm, reset} from "redux-form";
import {LoginFormValuesType} from "../../../Login/login";
import {TextArea} from "../../../common/formsControls/formsControls";
import {maxLengthCreator, requiredField} from "../../../../utils/validators/validators";
import {Dispatch} from "redux";

type MessagesFormOwnProps = {
    captchaUrl?: string | null
}

export type MessagesFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string
}

const maxLength = maxLengthCreator(1000)

let MessagesForm: React.FC<InjectedFormProps<MessagesFormValuesType, MessagesFormOwnProps> & MessagesFormOwnProps>
    = ({handleSubmit, error, captchaUrl}) => {


    return(
        <form onSubmit={handleSubmit}>
            <Field placeholder={"new message"} name={"textarea"} component={TextArea} validate={[requiredField,maxLength]}/>
            <button>Send</button>
        </form>
    )
}
const afterSubmit = (result:any,dispatch:Dispatch) =>
    dispatch(reset('messageText'))

// @ts-ignore
 export const MessageReduxForm = reduxForm({form: 'messageText',onSubmitSuccess: afterSubmit})(MessagesForm)