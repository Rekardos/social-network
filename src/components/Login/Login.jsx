import * as React from "react";
import {Field, reduxForm} from "redux-form";
import {loginThunkCreator} from "../../redux/authReducer";
import {connect} from "react-redux";



const Login = (props) => {

        const onSubmit = (formData) => {
            props.loginThunkCreator(formData.login,formData.password,formData.rememberMe)
        }

        return <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

}

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={'input'} name={'login'} placeholder={'логин'}/>
        </div>
        <div>
            <Field component={'input'} name={'password'} placeholder={'пароль'}/>
        </div>
        <div>
            <Field component={'input'} name={'rememberMe'} type={'checkbox'}/>
        </div>
        <div>
            <Field component={'button'}>Отправить</Field>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


export default connect(null, {loginThunkCreator})(Login)