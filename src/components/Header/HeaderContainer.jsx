import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthData, setAuthThunkCreator} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setAuthThunkCreator()
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

export default connect(mapStateToProps,{setAuthData, setAuthThunkCreator})(HeaderContainer);
