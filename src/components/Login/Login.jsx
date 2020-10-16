import React from "react";
import styles from './Login.module.css'
import authAPI from '../../utils/API'


const Login = () => {

    return (
        <div className={styles.login}>
            <form>
                <div>
                    <input placeholder={'email'} name={'email'}/>
                </div>
                <div>
                    <input placeholder={'password'} name={'password'} type={'password'}/>
                </div>
                <div>
                    <input  name={'rememberMe'} type={'checkbox'} /> remember me
                </div>
                <div className={styles.button}>
                    <button>login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;