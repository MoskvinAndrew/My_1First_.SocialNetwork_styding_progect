import React from 'react';
import {Field, InjectedFormProps, reduxForm, reset} from "redux-form";
import {Input} from "../common/formsControls/formsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {Dispatch} from "redux";
import {connect, useDispatch} from "react-redux";
import { Redirect } from 'react-router-dom';
import {RootState} from "../../Redux/redux-store";
import formStyle from "./../common/formsControls/formsControls.module.css"
import {LoginTC, ThunkType} from "../../Redux/auth_reducer_test/auth-reducer";

type MapStateToPropsType = {
    isAuth:boolean,
    captchaUrl?:string|null
 }

type LoginFormOwnProps = {
    captchaUrl?: string|null
}

export type LoginFormValuesType = {
      captcha: string
    rememberMe: boolean
    password: string
    email: string
}
const maxLength30 = maxLengthCreator(30);

let LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps>
    = ({handleSubmit, error, captchaUrl}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field  name={"email"}
                       component={Input}
                       placeholder={"Login"}
                validate={[requiredField,maxLength30]}
                />
            </div>
            <div>
                <Field placeholder={"password"}
                       name={"password"}
                       component={Input}
                       validate={[requiredField,maxLength30]}/>
            </div>
            <div>
                <Field   component={"input"}
                         type={"checkbox"}
                         placeholder={"checkbox"}
                         name={"rememberMe"}/>Remember me
            </div>


            <div className={formStyle.form_summary_error}>
                {captchaUrl && <img  src= {captchaUrl}/>}

                {captchaUrl && <Field placeholder={"captcha"}
                                      name={"captcha"}
                                      component={Input}
                                      validate={[requiredField]}/>}


            {error? <span>{error}</span> :null}
            </div>

            <div>
                <button>Submit</button>
            </div>

        </form>)

}

const afterSubmit = (result:any,dispatch:Dispatch) => {                         //Очистка формы после сабмита
    dispatch(reset('login'));
}


const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>         //оборачиваем в HOC redux form для получения необходимых данных
                                                                                 //  в род.компоненте
({form: 'login',onSubmitSuccess: afterSubmit})(LoginForm)



const Login: React.FC<MapStateToPropsType> = (props:MapStateToPropsType) => {
    let dispatch = useDispatch();
    if(props.isAuth){
        return <Redirect to={"/Profile"} />
    };

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(LoginTC(formData.email,formData.password,formData.rememberMe,formData.captcha));
    };



    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>

        </div>
    )
}
let mapStateToProps = (state:RootState):MapStateToPropsType =>({
    isAuth:state.auth.data.isAuth,
    captchaUrl: state.auth.data.captchaUrl,
})


export default connect(mapStateToProps,{}) (Login);