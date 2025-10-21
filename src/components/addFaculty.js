import React from 'react'
import {useState} from 'react'
import {getFirestore,collection,addDoc} from 'firebase/firestore';
import app from '../firebase/firebase'
const AddFaculty = () => {
    const [fname,setfname]=useState("");
    const [fmob ,setFmob]=useState(" ");
    const submitHandler=async (e)=>{
        e.preventDefault();
        const db=getFirestore(app);
        const docRef = await addDoc(collection(db,'Faculty'),{
            facultyName:fname,
            phoneNumber:fmob
        });
        console.log(fname,fmob,docRef,docRef.id); 
        e.target.reset();
    }
  return (
    <>
    <h1>Add Faculty</h1>
    <form onSubmit={submitHandler}>
        <input onChange={(e)=>setfname(e.target.value)} type="text" placeholder='faculty name'/><br/><br/>
        <input onChange={(e)=>setFmob(e.target.value)} type="number" placeholder='faculty Mo. no.'/><br/><br/>
        <button type='submit' style={{backgroundColor:"royalblue", padding:"10px",border:"3px solid black",borderRadius:"10px"}}>Submit</button>    
    </form>
    </>
  )
}

export default AddFaculty