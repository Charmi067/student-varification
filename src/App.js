//import { Children, Component } from "react";
import AddStudents from "./components/AddStudents";
import Dashboard from "./components/Dashboard";
import StudentList from "./components/StudentList";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import UpdateStudents from "./components/updateStudent";
import AddFaculty from "./components/addFaculty";
import FacultyList from "./components/facultyList";
import UpdateFaculty from "./components/UpdateFaculty";
import SignUp from './components/SignUp'
import Login from './components/Login'
const Myrouter=createBrowserRouter(
  [
    {path:'signUp',element:<SignUp/>},
    {path:'Login',element:<Login/>},
    {path:"/guni",element:<Dashboard/>,
      children:[
        {path:"/guni/",element:<StudentList/>},
        {path:"/guni/addstudent",element:<AddStudents/>},
        {path:"/guni/studentList",element:<StudentList/>},
        {path:"/guni/updateStudent",element:<UpdateStudents/>},
        {path:"/guni/addFaculty",element:<AddFaculty/>},
        {path:"/guni/facultyList",element:<FacultyList/>},
        {path:"/guni/updateFaculty",element:<UpdateFaculty/>}
      ]
    }
  ]
)
function App() {
  return (
    <>
    <RouterProvider router={Myrouter} />
    </>
  );
}

export default App;
