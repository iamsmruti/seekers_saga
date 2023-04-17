import React, { useState } from "react";
import CustomButton from "../../../components/CustomButton";
import { API } from '../../../constants'
import axios from 'axios'
import { toast } from 'react-toastify'

const RegisterSection = ({ setModalState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const customInput = {
    border: "1px solid #507A37",
    outline: "none",
    width: "100%",
    padding: "0.5rem 1rem",
    background: "#caf4b0",
    color: "#507A37",
  };

  const handleSubmit = () => {
    axios.post(`${API}/auth/register`, {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password
    }).then((res) => {
      console.log(res)

      if(res.data.error){
          toast(res.data.error)
      } else{ 
          toast("Successfully Registered!")
          setModalState('login')
      }
    }).catch((err) => {
      toast(err.data.error) 
    })
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <p>First Name</p>
          <input onChange={(e) => setFirstName(e.target.value)} style={customInput} placeholder="Tom" />
        </div>
        <div>
          <p>Last Name</p>
          <input onChange={(e) => setLastName(e.target.value)} style={customInput} placeholder="Holland" />
        </div>
      </div>

      <p className="mt-5">Email</p>
      <input
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="off"
        autoFocus="off"
        style={customInput}
        placeholder="example@gmail.com"
      />

      <p className="mt-5">Password</p>
      <input
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="off"
        type="password"
        style={customInput}
        placeholder="********"
      />

      <CustomButton text={"Submit"} onClick={handleSubmit} />

      <p className="text-center my-1">or</p>

      <p className="text-[12px] mt-5 text-center">
        Already have an account ?
        <span
          onClick={() => {
            setModalState("login");
          }}
          className="text-blue-600 ml-2 cursor-pointer"
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default RegisterSection;
