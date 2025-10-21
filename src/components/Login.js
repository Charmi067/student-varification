import React,{useState} from 'react'
import {getAuth,signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import app from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'
import { FacebookAuthProvider } from 'firebase/auth'
const Login= () => {
    const [email,setEmail]=useState("");
    const [pwd,setPwd]=useState("");
    const navigate=useNavigate();
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("Ohk Done!!....email is:",email,"password is:",pwd)
        const auth=getAuth(app);
        signInWithEmailAndPassword(auth,email.trim(),pwd.trim())
        .then(res=>{
            console.log(res.user);
            navigate('/guni');
        })
        .catch(err=>{
            console.log(err.code,err.message);
        })

        
    }
    const loginWithGoogle=()=>{ 
      const auth=getAuth(app);
      const provider=new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      signInWithPopup(auth,provider)
      .then((result)=>{
        console.log(result)
        navigate('/guni')
      }).catch(err=>{
        console.log(err.message);
      })
    }
    const loginWithFb=async ()=>{ 
      const auth=getAuth(app);
      const provider=new FacebookAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      await signInWithPopup(auth,provider)
      .then((result)=>{
        console.log(result);
        navigate('/guni');
      }).catch(err=>{
        console.log(err);
      })
    }
    
  return (
    <>
    <h1>Login</h1><br/><br/>
    <form onSubmit={submitHandler}>
        <input onChange={(e)=>{
            setEmail(e.target.value)
        }} type="email" /><br/><br/>
        <input onChange={(e)=>{
            setPwd(e.target.value)
        }} type="password" /><br/><br/>
        {/* <button type='submit'>Login</button><br/> */}
        <button type="button" onClick={ loginWithGoogle}>Login with Google</button>
        <button type="button" onClick={ loginWithFb}>Login with Facebook</button>
    </form>
    </>
  )
}

export default Login