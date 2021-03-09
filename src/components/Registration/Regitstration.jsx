import React from "react";


const Registration = (props) => {
    return (
        <div>
            <form action="">
                <input type="text" placeholder={'email'} name={'email'}/>
                <input type="password" placeholder={'password'} name={'password'}/>
                <input type="text" placeholder={'name'} name={'name'}/>
                <button onClick={props.postUser}>Registration</button>
            </form>

        </div>
    )
}

export default Registration;