import React from "react";
import { useState } from "react";
import "./Auth.css";
// import Logo from "../../img/logo.png";

const Auth = () => {
  const [isSignUp,setIsSignUp] = useState(false)

  const [data,setData]=useState({firstname:"",lastname:"",password:"",confirmpass:"", username:""})

  const [confirmpass,setconfirmpass] = useState(true)

  const HandleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e)=>{
    e.preventDefualt()
    if(isSignUp){
      if(data.password !== data.confirmpass) {
        setconfirmpass(false)
      }
    }
  }

const resetform = ()=>{
  setconfirmpass(true);
  setData({firstname:"",lastname:"",password:"",confirmpass:"", username:""})
}

  return (
    <div className="Auth">
      {/* leftside */}
      <div className="a-left">
        {/* <img src={Logo} alt="" /> */}
        <div className="Webname">
          <h1>ShareGram :)</h1>
         
        </div>
      </div>


      {/* rightside */}

      <div className="a-right">
      <form className="infoForm authForm" onSubmit={handleSubmit}>
        <h3>{ isSignUp ? "Sign up" : "Log in"}</h3>

        {isSignUp &&
         <div>
         <input
           type="text"
           placeholder="First Name"
           className="infoInput"
           name="firstname"
           onChange={HandleChange}
           value={data.firstname}
         />
         <input
           type="text"
           placeholder="Last Name"
           className="infoInput"
           name="lastname"
           onChange={HandleChange}
           value={data.lastname}
         />
       </div>
        }

       

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
            onChange= {HandleChange}
            value ={data.username}
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            name="password"
            placeholder="Password"
            onChange= {HandleChange}
            value={data.password}
          />
          {isSignUp && 
          <input
          type="password"
          className="infoInput"
          name="confirmpass"
          placeholder="Confirm Password"
          onChange={HandleChange}
          value={data.confirmpass}
        />
          }
          
        </div>
        <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmpass ? "none" : "block",
            }}
          >
            *Confirm password is not same
          </span>

        <div>
            <span className="login" style={{fontSize: '12px'}} onClick={() => {
                resetform();
                setIsSignUp((prev) => !prev);
              }}>
              {isSignUp ? "Already have an account. Login!" :"don't have an account. sign up!"}</span>
        </div>
        <button className="button infoButton" type="submit">{isSignUp ?  "Signup" : "Log in"}</button>
      </form>
    </div>
     
     
    </div>
  );
};



export default Auth;