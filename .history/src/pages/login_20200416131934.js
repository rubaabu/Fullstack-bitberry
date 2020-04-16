import React from 'react';

class Login extends React.Component {


    render() {
        return(
            <div>
                <h1>Login</h1>
                <h3>Username</h3>
                <input type="text" placeholder="username" />
                <h3>Password</h3>
                <input type="password" placeholder="password" />
            </div>
        )
    }
}

export default Login;