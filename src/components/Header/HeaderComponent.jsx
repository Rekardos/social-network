import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthData} from "../../redux/authReducer";
import {API} from "../../api/api";

class HeaderComponent extends React.Component {

    componentDidMount() {
        API.authMe()
            .then(response => {

                    if(response.resultCode === 0) {
                        this.props.setAuthData(response.data)
                    }
                }
            )
    }

    render() {

        return (
            <Header {...this.props}/>
        );
    };
}

let mapStateToProps = (state) => {

    return {

        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps,{setAuthData})(HeaderComponent);
