import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: '20%', backgroundColor: 'royalblue', height: '100vh', padding: '1rem' }}>
        <Link to="/guni/addstudent" style={{ color: 'white', display: 'block', marginBottom: '0.5rem', textDecoration:'none' }}>Add Student</Link>
        <Link to="/guni/studentList" style={{ color: 'white', display: 'block',textDecoration:'none',marginBottom: '0.5rem' }}>Student List</Link>
      <Link to="/guni/facultyList" style={{color:'white',display:'block',textDecoration:'none',marginBottom: '0.5rem'}} >Faculty List</Link>
      <Link to="/guni/addFaculty" style={{color:'white',display:'block', textDecoration:'none',marginBottom: '0.5rem'}}>Add Faculty</Link>
      </aside>

      <main style={{ width: '80%', backgroundColor: 'white', height: '100vh', padding: '1rem' }}>
        <Outlet />
      </main>
    </div>
  )
}