import { useNavigate } from "react-router-dom";
import style from "./Login.module.scss";
import { useContext, useState } from "react";
import routes from "../components/router/Router";
import { UserContext } from "../contexts/UserContext";

const Login = () => {

    const { login } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        login({ email, password });
        navigate(routes.home);
    }

return (
    <div className={style.loginForm}>
        <h1>Login</h1>
        <form className={style.card} onSubmit={handleSubmit}>
            <input
                onChange={(event) => setEmail(event.target.value)} required
                value={email}
                className={style.input}
                type="email" id="username"
                placeholder="Username"
            />
            <input
                onChange={(event) => setPassword(event.target.value)} required
                value={password}
                className={style.input}
                type="password" id="password"
                placeholder="Password"
            />
            <button type="submit" className={style.loginBtn}>login</button>
        </form>

        <p> Dont have an account?<button className={style.signInBtn}>Sign In</button></p>
    </div>
)
}
export default Login;