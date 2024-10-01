import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate();

    function handleLogin() {
        navigate("/")
    }
    function handleSignIn() {
        navigate("S")
    }
    return (
        <div>
            <h1>Login page</h1>
            <button onClick={handleLogin}>login</button>
            <p>If you dont have account signIn <button onClick={handleSignIn}>Sign In</button></p>
        </div>
    )
}

export default Login;