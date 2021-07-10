import React, { useState } from "react";
import axios from "axios"
import {
    Input,
    Button,
    FormContent
} from "./styled"

const Signup = ({ setLog, log }) => {
    const [data, setData] = useState({ 'email': '', 'username': '', 'password': '', 'confirmPassword': '' })
    const onChangeHandler = (e, opt) => {
        setData(prevState => ({
            ...prevState,
            [opt]: e.target.value
        }));
    }

    const register = async () => {
        if (data.password === data.confirmPassword) {
            let res = await axios.post("https://article.pythonanywhere.com/api/signup/", data, {
                headers: {
                    'content-type': 'application/json'
                }
            })
            console.log(res)
        }
    }

    return (
        <FormContent>
            <h4 className="m-5">SIGN UP</h4>
            <div>
                <Input type="text" placeholder="EMAIL ID" onChange={e => onChangeHandler(e, "email")} />
                <Input type="text" placeholder="NAME" onChange={e => onChangeHandler(e, "username")} />
                <Input type="password" placeholder="PASSWORD" onChange={e => onChangeHandler(e, "password")} />
                <Input type="password" placeholder="CONFIRM PASSWORD" onChange={e => onChangeHandler(e, "confirmPassword")} />
                <div>
                    <button className="border-0 bg-light m-3 text-secondary" onClick={() => setLog(!log)}>Already have an account?</button>
                </div>

                <Button type="submit" value="Sign up" onClick={register} />
            </div>

        </FormContent>
    )
}
export default Signup;