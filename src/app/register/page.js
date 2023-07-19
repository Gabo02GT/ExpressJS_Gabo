'use client'
import React from "react"
import { singup } from "../../services/firebase/auth"
import "./register.css"

function Register() {

    const [state, setState] = React.useState({
        email: "",
        password: "",
        confirmPassword:"",
        displayName:"",
        

    })

    function onChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        setState({
            ...state,
            [name]: value
        })
    }

    function onRegister() {
        const { email, password } = state;
        const sendable = {
            email,
            password,
            displayName,
        }
        singup(sendable)
    }

    return (
        <div className="container" style={{
            display:"flex",
            flexDirection:"column,"
        }}>
            <form action={onRegister}>
                <input required onChange={onChange} name="email" type="text" value={state.email} />
                <input required onChange={onChange} name="password" type="password" value={state.password} />
                <input required onChange={onChange} name="confirmPassword" type="password" value={state.confirmPassword} />
                <input required onChange={onChange} name="displayName" type="text" value={state.displayName} />
                <button type="sumbit">Registrarse</button>
            </form>
        </div>
    )
}

export default Register;