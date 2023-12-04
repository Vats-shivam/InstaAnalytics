import React, { useEffect, useState } from "react";
import css from './LoginDialog.module.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const showError= (error)=>{
    console.log(error);
    toast(error.message,{
        position:"bottom-center",
        autoClose: 3000,
        theme:"colored",
    })
}
const LoginDialog = () => {
    let navigate = useNavigate()
    const [formData, setFormData] = React.useState({
        email: "",
        password: ""
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/user/login", {
                email: formData.email,
                password: formData.password
            });
            console.log(response);
            const data = response.data;
            console.log(data);
            if (data.success) {
                localStorage.setItem('token', data.token)
                localStorage.setItem('username', data.user.username)

                navigate("/dashboard")
                window.location.reload()
            }

        } catch (error) {
            showError(error.response.data)
        }
    }

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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className={`${css.cover}`}>
            <div className={css.overlay}></div>
            <form action="" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input type="email" placeholder="email" name="email" onChange={handleChange} value={formData.email} />
                <input type="password" placeholder="password" name="password" onChange={handleChange} value={formData.password} />

                <div className={css.actionbtns}>
                    <button className={css.loginbtn} type="submit">LogIN</button>
                    <Link to="/register">
                        <div className={css.loginbtn}>Register</div>
                    </Link>
                </div>
            </form>



            <ToastContainer />

        </div >
    )
}

export default LoginDialog