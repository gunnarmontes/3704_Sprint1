import Form from "../components/Form"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate()

    return (
        <div>
            <Form route="/api/user/register/" method="register"/>
            <span 
            onClick={() => navigate("/login")}
            style={{cursor: "pointer"}}
            >
                Already have an account? Log in here.

            </span>

        </div>

    )
}

export default Register