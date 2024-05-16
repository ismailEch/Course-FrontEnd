import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Admin/register/Register';
import Login from './pages/Admin/login/Login';
import Welcome from './pages/User/welcome/Welcome';
import Dashboard from './pages/Admin/home/Dashboard';
import Users from './pages/Admin/Users/Users';
import Teachers from './pages/Admin/Teachers/Teachers';
import Plan from './pages/Admin/Plan/Plan';
import Categories from './pages/Admin/Categories/Categories';
import Test from './pages/Admin/test/Test';

//teachers part
import RegisterTeacher from './pages/Teacher/Register/Register';
import LoginTeacher from './pages/Teacher/Login/Login'
import DashboardTeacher from './pages/Teacher/Dashboard/Dashboard';
//course part
import Courses from './pages/Teacher/Courses/Courses';
import CreateCourse from './pages/Teacher/Courses/Create'
import Section from './pages/Teacher/Courses/Section'
import Lecture from './pages/Teacher/Courses/Lecture'
//SINGLE COURSE 
import CourseDetails from './pages/Teacher/Courses/SingleCourse'
//plan and subscription part
import TeacherPlan from './pages/Teacher/Plan/Plan'



//payment
import PlanSelection from './pages/Admin/PlanSelection'
import Checkout from './pages/Admin/Checkout'
import PaymentTeacherDone from './pages/Teacher/Payment/paymentSuccess'



//users pages
import About from './pages/User/About/About';
import CategoryCourses from './components/User/CategoryCourses';


const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        {/* //user routes */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/category:categoryName" element={<CategoryCourses />} /> */}
        <Route path="/category/:categoryName" element={<CategoryCourses />} />
        
        {/* admin routes */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/teachers" element={<Teachers />} />
        <Route path="/admin/plans" element={<Plan />} />
        <Route path="/admin/categories" element={<Categories />} />

       {/* teachers routes */}
        <Route path="/teacher/register" element={<RegisterTeacher />} />
        <Route path="/teacher/login" element={<LoginTeacher />} />



        <Route path="/teacher/dashboard" element={<DashboardTeacher />} />
        {/* courses */}
        <Route path="/teacher/courses" element={<Courses />} />
        <Route path="/teacher/courses/create" element={<CreateCourse />} />
        <Route path="/teacher/Section/create" element={<Section />} />
        <Route path="/teacher/Lecture/create" element={<Lecture />} />
        <Route path="/teacher/course/details/:courseId" element={<CourseDetails />} />
        {/* plan and subscription */}
        <Route path="/teacher/plan/details" element={<TeacherPlan />} />


      {/* payment  */}
        <Route path="/teacher/planSelection"  element={<PlanSelection />} />
        <Route path="/teacher/checkout" element={<Checkout />} />
        <Route path="/teacher/paymentsuccess" element={<PaymentTeacherDone />} />




        <Route path='*' element={<Test />} />
        <Route path='/test' element={<Test />} />

      </Routes>
    </BrowserRouter>            
  );
};

export default App;
