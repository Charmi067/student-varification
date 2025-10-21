import React from 'react'
import {useState} from 'react'
import {doc,getFirestore,updateDoc} from 'firebase/firestore';
import app from '../firebase/firebase'
import { useLocation,useNavigate } from 'react-router-dom';
//import { update } from 'firebase/database';
const UpdateFaculty = () => {
  const Location=useLocation();
    const navigate=useNavigate();
    const [fname,setfname]=useState(Location.state.facultyName);
    const [fmob ,setFmob]=useState(Location.state.phoneNumber);
    const submitHandler=async (e)=>{
        e.preventDefault();
        const db=getFirestore(app);
        // const docRef = await addDoc(collection(db,'Faculty'),{
        //     facultyName:fname,
        //     phoneNumber:fmob
        // });
        const docRef=await doc(db,'Faculty',Location.state.id);
        try{
          await updateDoc(docRef,{facultyName:fname,phoneNumber:fmob})
          navigate('/guni/facultyList');
        }catch(err){
          console.log(err);
        }
        //console.log(fname,fmob,docRef,docRef.id); 
        //e.target.reset();
    }
  return (
    <>
    <h1>Update Faculty</h1>
    <form onSubmit={submitHandler}>
        <input value={fname} onChange={(e)=>setfname(e.target.value)} type="text" placeholder='faculty name'/><br/><br/>
        <input value={fmob} onChange={(e)=>setFmob(e.target.value)} type="number" placeholder='faculty Mo. no.'/><br/><br/>
        <button onClick={submitHandler} type='submit' style={{backgroundColor:"royalblue", padding:"10px",border:"3px solid black",borderRadius:"10px"}}>Update</button>    
    </form>
    </>
  )
}

export default UpdateFaculty