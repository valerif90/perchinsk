import React from "react";
import {connect} from 'react-redux';
import getAuthUserData, {logout} from '../../redux/auth_reducer';
import styles from './Header.module.css';
import Header from "./Header";

const HeaderContainer = (props) => {
    return (
        <Header {...this.props} />
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect (mapStateToProps, {getAuthUserData, logout}) (HeaderContainer);