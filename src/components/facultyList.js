import React from 'react'
import {useEffect,useState} from 'react'
import app from '../firebase/firebase'
import {doc,collection,deleteDoc,getDocs,getFirestore} from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'

const FacultyList =() => {
    const [facultyData,setFacultyData]=useState([]);
    const navigate=useNavigate();
    useEffect(() =>{
         getData();
    },[])
    const getData= async ()=>{
        const db=getFirestore(app);
         const docRef=collection(db,'Faculty');
         const docSnap=await getDocs(docRef);
         const data=docSnap.docs.map(doc=>({
            id:doc.id,
            ...doc.data(),
            
        }))
        setFacultyData(data);
        //console.log(docSnap);
         console.log('Faculty Data:',data);
        
         }
          const DeleteHandler=async (FacultyId)=>{
            console.log(FacultyId);
            const db=getFirestore(app);
            const dataRef=doc(db,'Faculty',FacultyId);
            try{
                await deleteDoc(dataRef);
                getData();
            }
            catch(err){
                console.log(err);
            }

    }
  return (
    <>
    <div>facultyList</div>
    {facultyData.map((faculty)=>{
        return(
            <div key={faculty.id}>
                <h3>{faculty.facultyName}</h3>
                <p>{faculty.phoneNumber}</p>
                <button onClick={()=>DeleteHandler(faculty.id)}>Delete</button>
                <button onClick={() => navigate("/guni/updateFaculty",{state:faculty})}>Update</button>

            </div>
        )
    })}
    </>
  )
}

export default FacultyList