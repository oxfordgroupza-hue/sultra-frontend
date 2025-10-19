import React from "react";

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" /> <br />
        <input type="password" placeholder="Password" /> <br />
        <button type="submit">Login</button>
      </form>
      <p>
        No account? <a href="/register">Register here</a>
      </p>
    </div>
  );
}

export default Login;