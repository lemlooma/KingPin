import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";


const SignUpForm = () => {
  const logo = "https://i.imgur.com/aijSCPA.png";
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

    const onSignUp = async (e) => {
      e.preventDefault();
      if (password === repeatPassword) {
        const data = await dispatch(signUp(username, email, password));
        if (data) {
          setErrors(data);
        }
      } else {
        setErrors(["Passwords do no match!"]);
      }
    };
    
  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div className="flex-container">
        <img
          style={{ paddingBottom: "20px" }}
          src={logo}
          height="60px"
        ></img>
      </div>
                <div>
            <div className="errors">
              {errors.map((error) => (
                <div>{error}</div>
              ))}
            </div>
            </div>
      <div>
        <label>User Name</label>
        <input
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
          required
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
          required
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type="submit">Sign Up</button>
      <div style={{ paddingTop: "20px" }} className="flex-container">
        <p>
          Already have an account?<a href="/login"> Log in</a>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;
