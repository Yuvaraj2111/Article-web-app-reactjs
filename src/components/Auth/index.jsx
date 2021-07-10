import React, { useState } from "react";
import Login from "./login"
import Signup from "./signup"
import { Wrapper } from './styled'
const Auth = ({ set }) => {
    const [log, setLog] = useState(false)
    set(false)
    return (
        <Wrapper>
            {
                log ?
                    <Login setLog={setLog} log={log} />
                    :
                    <Signup setLog={setLog} log={log} />
            }
        </Wrapper>
    )
}

export default Auth;