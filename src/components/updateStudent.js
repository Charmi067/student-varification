import React, { useState } from 'react'
import {getDatabase,ref,update} from "firebase/database";
import app from "../firebase/firebase"
import { useNavigate,useLocation} from 'react-router-dom';
import {getStorage,getDownloadURL,uploadBytes,ref as studentRef} from 'firebase/storage'
function UpdateStudents() {
    const navigate=useNavigate();
    const location=useLocation();
    const [sname,setName]=useState(location.state[1].name);
    const [sno,setSno]=useState(location.state[1].student_no);
    const [adm_no,setAdm]=useState(location.state[0]);
    const [selectedFile,setSelectedFile]=useState();
    //console.log(location);
     const handlefileChange=(e)=>{
        const file=e.target.files[0];
        setSelectedFile(file);
    }
     const submitHandler=async (e)=>{
        e.preventDefault();
        if(selectedFile)
        {
        const db=getDatabase(app);

        const storage=getStorage(app);
        const studentImageRef=studentRef(storage,`images/${adm_no}`);
        await uploadBytes(studentImageRef,selectedFile);
        const imageUrl=await getDownloadURL(studentImageRef);

        const studentref=ref(db,'students/'+location.state[0]);
        update(studentref,{name:sname,student_no:sno,imageUrl:imageUrl})
        .then(res=>{
            navigate('/guni/studentList');
        }).catch(err=>{
            console.log(err);
        })
        
    }else{
        const db=getDatabase(app);
        const studentref=ref(db,'students/'+location.state[0]);
        update(studentref,{name:sname,student_no:sno})
        .then(res=>{
            navigate('/guni/studentList');
        }).catch(err=>{
            console.log(err);
        })
    }
}
   
  return (
   <>
   <form onSubmit={submitHandler}> 
        <label htmlFor="sname">Student Name:</label><br/><br/>
        <input value={sname} onChange={(e)=>setName(e.target.value)} type='text' name='sname'/><br/><br/>
        <label htmlFor="adm_no">Admission Number:</label><br/><br/>
        <input disabled value={adm_no} onChange={(e)=>setAdm(e.target.value)} type='text' name='adm_no'/><br/><br/>
        <label htmlFor="sno">Student Number:</label><br/><br/>
        <input value={sno} onChange={(e)=>setSno(e.target.value)} type="number" name='sno'/><br/><br/>
        <input onChange={handlefileChange} type="file" />
        <button type='submit' style={{backgroundColor:"royalblue", padding:"10px",border:"3px solid black",borderRadius:"10px"}}>update</button>

   </form>
   </>
  )
}

export default UpdateStudents;