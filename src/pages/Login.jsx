import { useState } from "react";

const Login = () => {

    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle login logic here
    console.log("Submitted:", { username, password });
  };

  return (
    <>
    
        {/* <div className="LoginContainer">
            for
            <div><label htmlFor="email">Email</label></div>
            <input type="email" name="email" id="email" placeholder="email"/>
            <div><label htmlFor="password">Password</label></div>
            <input type="password" name="password" id="password" placeholder="password"/>
            <div><button>Login</button></div>
        </div> */}


<div className="loginContainer">
      <form onSubmit={handleSubmit} className="loginForm">
        <h2>Login</h2>
        <div className="formGroup">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  )
}

export default Login