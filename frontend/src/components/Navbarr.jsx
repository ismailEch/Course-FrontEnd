import React from 'react';

export const Navbarr = () => {
  return (
    <div className='bg-stone-900  max-w-full mx-auto  z-50 flex justify-between items-center p-4 '>
      <div className='w-0.5 text-white flex ' >
        <p>Ac</p>
        <img className='float-right' src='C:/Users/pc/Desktop/react-proj/Course-FrontEnd/frontend/public/images/img-1.jpg'/>
        <p>demia</p>
      </div>

      <div className='ml-96'>

        <a href='#' className='text-slate-50 p-3'>Home</a>
        <a href='#' className='text-slate-50 p-3'>About</a>
        <a href='#' className='text-slate-50 p-3'>Courses</a>
        <a href='#' className='text-slate-50 p-3'>Blogs</a>
        <a href='#' className='text-slate-50 p-3'>Contact</a>

      </div>

      <button className='m-5 p-1 bg-indigo-500 font-medium rounded-full text-indigo-50 border-solid
      divide-stone-100 outline-2'>Get Started</button>
      <div>
        <i></i>
      </div>

    </div>
  );
};


export default Navbarr;