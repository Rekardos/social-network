import * as React from "react";
import {Field, reduxForm} from "redux-form";
import {loginThunkCreator} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Checkbox, FormControlLabel, InputLabel, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {required} from "../../common/validators";
import {TextFieldValidate} from "../../common/TextFiieldValidate";



const Login = (props) => {

        const onSubmit = (formData) => {
            props.loginThunkCreator(formData.login,formData.password,formData.rememberMe)
        }

        if(props.isAuth) {
            return <Redirect to={'/profile'}/>
        }
        return <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

}

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[required]} component={TextFieldValidate} name={'login'} label={'логин'}/>
        </div>
        <div>
            <Field validate={[required]} component={TextFieldValidate} name={'password'} label={'пароль'}/>
        </div>
        <div>
            <FormControlLabel control={<Field component={Checkbox}  name={'rememberMe'}/>} label={'запомнить меня'}/>
        </div>
        <div>
            <Field component={Button}>Отправить</Field>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

let mapStateToProps = (props) => {
    return {
        isAuth: props.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginThunkCreator})(Login)