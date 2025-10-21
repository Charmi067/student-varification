//import React, { use } from 'react'
import { getDatabase,onValue,ref,remove } from 'firebase/database'
import app from "../firebase/firebase";
import {getStorage,ref as storageRef,deleteObject} from 'firebase/storage'
import { useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
function StudentList() {
    const [studentdata,setStudentData]=useState(" ");
    const navigate=useNavigate();
    useEffect(()=>{//here useEffect is used because we want to fetch data when the component is mounted only once without this onValue real-time listener will keep running when even component is rendered or parent component is re-rendered and kipping onvValue freely running is not a good practice
        const db=getDatabase(app);
        const studentRef=ref(db,'students/');
        onValue(studentRef,(snapshot)=>{// this will run each time when student node is updated in database
            const data=snapshot.val();
            setStudentData(data);
            console.log(data);
        })
    },[])
    const deleteStudent=(key)=>{
        const db=getDatabase(app);
        const storage=getStorage(app);
        const videoRef=storageRef(storage,`images/${key}`);//because adm_o is key in the database storage
        deleteObject(videoRef).then(res=>{
            const studentRef=ref(db,'students/'+key);
            remove(studentRef);
        }).catch(err=>{
            console.log(err)
        })
    }
  return (
    <>
    <h1>Student List</h1>
    {studentdata && Object.entries(studentdata).map(([key,value])=>{
        return(
            <div key={key}>
                {/* <video width="200" height="200" controls>
                    <source src={value.imageUrl} type="video/mp4"/>
                </video> */}
                <img style={{width:"200px",height:"200px",borderRadius:"50%"}} src={value.imageUrl} alt="student pic"/>
                <h3>{value.name}</h3>
                <h3>{value.student_no}</h3>
                <button onClick={()=>deleteStudent(key)}>Delete</button>
                <button onClick={()=>{
                navigate('/guni/updateStudent',{state:[key,value]})
                }}>Update</button>
                <hr/>
            </div>
            
        )
    })}
    </>
  )
}

export default StudentList