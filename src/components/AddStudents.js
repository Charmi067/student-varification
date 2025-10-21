import React, {  useState } from 'react'
import {getDatabase,ref,set} from "firebase/database";
import app from "../firebase/firebase"
import { useNavigate } from 'react-router-dom';
import {getStorage,ref as storageRef,uploadBytes,getDownloadURL} from 'firebase/storage'//ref function ko ab hum storageRef name se use kar sakte hain beacuse of error issue or name confusion
function AddStudents() {
    const [sname,setName]=useState('');
    const [sno,setSno]=useState('');
    const [adm_no,setAdm]=useState('');
    const [selectedFile,setSelectedFile]=useState(null)
    const navigate=useNavigate();
     const submitHandler=async (e)=>{
        e.preventDefault();
        const db=getDatabase(app);
        const storage= getStorage(app);
        const myRef=storageRef(storage,`images/${adm_no}`)
        await uploadBytes(myRef,selectedFile)
        const imageUrl=await getDownloadURL(myRef);
        set(ref(db,'students/'+adm_no),{
            name:sname,
            student_no:sno,
            imageUrl:imageUrl
        })
        .then(res=>{
            navigate("/guni/studentList");
        }).catch(err=>{
            console.log(err,err.message );
        })
        alert("Form Submitted");
        console.log(sname,sno);
        e.target.reset();
    }
    const handleFileChange=(e)=>{//sabse pehle image jayega fir uska URl lenge or other values ke sath us URL ko real-time-database me save karenge
        const file=e.target.files[0];
        setSelectedFile(file);
    }
  return (
   <>
   <form onSubmit={submitHandler}> 
        <label htmlFor="sname">Student Name:</label><br/><br/>
        <input onChange={(e)=>setName(e.target.value)} type='text' name='sname'/><br/><br/>
        <label htmlFor="adm_no">Admission Number:</label><br/><br/>
        <input onChange={(e)=>setAdm(e.target.value)} type='text' name='adm_no'/><br/><br/>
        <label htmlFor="sno">Student Number:</label><br/><br/>
        <input onChange={(e)=>setSno(e.target.value)} type="number" name='sno'/><br/><br/>
        <input onChange={handleFileChange} type="file" /><br /><br />
        <button type='submit' style={{backgroundColor:"royalblue", padding:"10px",border:"3px solid black",borderRadius:"10px"}}>Submit</button>

   </form>
   </>
  )
}

export default AddStudents