import React, { useRef } from "react";
import { useHistory } from "react-router";

const Login = () => {
  const username = useRef("");
  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.username = username.current.value;
    history.push('/');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          <span>username</span>
          <input ref={username} />
          <button>login</button>
        </label>
      </form>
    </div>
  );
};

export default Login;
