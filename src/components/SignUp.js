import React,{useState} from 'react'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
    const [email,setEmail]=useState("");
    const [pwd,setPwd]=useState("");
    const navigate=useNavigate();
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("Ohk Done!!....email is:",email,"password is:",pwd)
        const auth=getAuth(app);
        createUserWithEmailAndPassword(auth,email.trim(),pwd.trim())
        .then(userData=>{
            console.log(userData);
            navigate('/Login');
        })
        .catch(err=>{
            console.log(err.code,err.message);
        })

        
    }
  return (
    <>
    <h1>Sign Up</h1><br/>
    <form onSubmit={submitHandler}>
        <input onChange={(e)=>{
            setEmail(e.target.value)
        }} type="email" /><br/><br/>
        <input onChange={(e)=>{
            setPwd(e.target.value)
        }} type="password" /><br/><br/>
        <button type='submit'>Sign Up</button>
    </form>
    </>
  )
}

export default SignUp