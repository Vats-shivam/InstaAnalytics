import css from './Register.module.css';
import { Link } from 'react-router-dom';

const Register=()=>{
  return (
  <div className={`${css.cover}`}>
  <div className={css.overlay}></div>
    <h1>Register</h1>
    <input type="text" placeholder="username" />
    <input type="password" placeholder="password" />
    <input type="text" placeholder="buisness username"/>
    <div className={css.actionbtns}>
    <Link to="/login">
    <div className={css.loginbtn}>Log IN</div>
    </Link>
    <div className={css.loginbtn}>Register</div>
    </div>

</div>)
}

export default Register