import css from './Register.module.css';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react'
import axios from 'axios';

const Register=()=>{
  let navigate = useNavigate()
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    username:""
})
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:3000/user/createUser", {
            email: formData.email,
            password: formData.password,
            username: formData.username
        });
        console.log(response);
        const data = response.data;
        console.log(data);
        if(data.success)
        {
          localStorage.setItem('token',data.data.password)
          localStorage.setItem('username',data.data.username)
          navigate("/dashboard")
        }

    } catch (error) {
        console.log(error)
    }
  }
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
}
  return (
  <div className={`${css.cover}`}>
  <div className={css.overlay}></div>
  <form action="" onSubmit={handleSubmit}>
    <h1>Register</h1>
    <input type="email" placeholder="email" name='email' value={formData.email} onChange={handleChange}/>
    <input type="password" placeholder="password" name='password' value={formData.password} onChange={handleChange}/>
    <input type="text" placeholder="buisness username" name='username' value={formData.username} onChange={handleChange}/>
    <div className={css.actionbtns}>
    <Link to="/login">
    <button className={css.loginbtn} >Log IN</button>
    </Link>
    <button className={css.loginbtn} type='submit'>Register</button>
    </div>
    </form>

</div>)
}

export default Register