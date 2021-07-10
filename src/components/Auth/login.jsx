import React, { useState } from "react";
import {
    Input,
    Button,
    FormContent
} from "./styled"
const Login = ({ setLog, log }) => {
    const [data, setData] = useState({ 'email': '', 'password': '' })
    const onChangeHandler = (e, opt) => {
        setData(prevState => ({
            ...prevState,
            [opt]: e.target.value
        }));
    }
    return (

        <FormContent>
            <h4 className="m-5">Login</h4>
            <div>
                <Input type="text" placeholder="Email ID" onChange={e => onChangeHandler(e, "email")} />
                <Input type="password" placeholder="PASSWORD" onChange={e => onChangeHandler(e, "password")} />
                <div>
                    <button className="border-0 bg-light m-3 text-secondary" onClick={() => setLog(!log)}>
                        Don't have an any account?
                    </button>
                </div>

                <Button type="submit" value="Log In" />
            </div>

        </FormContent>
    )
}
export default Login;