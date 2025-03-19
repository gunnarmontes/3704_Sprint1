import Form from "../components/Form"
import { useNavigate } from "react-router-dom";



const Login = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Form route="/api/token/" method="login" />
        <span 
            onClick={() => navigate("/register")} 
            style={{cursor: "pointer"}}
        >
            Don't have an account? Register here.
        </span>

        </div>
        


    )
        
}

export default Login