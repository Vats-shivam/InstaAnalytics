import React, {useEffect, useState} from "react";
import css from './LoginDialog.module.css';
import { Link } from "react-router-dom";

const LoginDialog = () => {

    // useEffect(() => {
    //     function start() {
    //         gapi.client.init({
    //             clientId: "79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com",
    //             scope: ""
    //         })
    //     }
    //     gapi.load('client: auth2', start)
    // })

    const [popupStyle, showPopup] = useState(css.hide)

    const popup = () => {
        showPopup(css.loginpopup)
        setTimeout(() => showPopup(css.hide), 3000)
    }

    const onSuccess = e => {
        alert("User signed in")
        console.log(e)
    }

    const onFailure = e => {
        alert("User sign in Failed")
        console.log(e)
    }

    return (
        <div className={`${css.cover}`}>
          <div className={css.overlay}></div>
            <h1>Login</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />

            <div className={css.actionbtns}>
    <div className={css.loginbtn}>Log IN</div>
    <Link to="/register">
    <div className={css.loginbtn}>Register</div>
    </Link>
    </div>

            

            <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or password incorrect</p>
            </div>
            
        </div>
    )
}

export default LoginDialog