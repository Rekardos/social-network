import * as React from "react";
import {Field, reduxForm} from "redux-form";
import {API, AuthAPI} from "../../api/api";
import {setAuthThunkCreator} from "../../redux/authReducer";

export class Login extends React.Component {
    onSubmit(formData) {
        AuthAPI.loginMe(formData.login, formData.password, formData.rememberMe, false)
            .then(response => {
                    if (response.resultCode === 0) {
                        setAuthThunkCreator()
                    }
                }
            )
    }

    render() {
        return <div>
            <LoginReduxForm onSubmit={this.onSubmit}/>
        </div>
    }
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
