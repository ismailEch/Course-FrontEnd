import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCourses } from '../../../slice/Teacher/Course/courseSlice';

function Content() {
    const dispatch = useDispatch();
    const teacherID = localStorage.getItem('id_teacher');
    const courses = useSelector((state) => state.courseTeacher.courses);
    const status = useSelector((state) => state.courseTeacher.status);
    const error = useSelector((state) => state.courseTeacher.error);

    useEffect(() => {
        if (teacherID) {
            dispatch(fetchCourses(teacherID));
        }
    },courses);

    const getValidColor = (valid) => {
        switch (valid) {
            case 'valid':
                return 'text-green-500';
            case 'invalid':
                return 'text-red-500';
            case 'pending':
                return 'text-orange-500';
            default:
                return 'text-gray-500';
        }
    };

    return (
        <div className="p-4">
            <button className="bg-green-500 mb-5 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-3xl">
                Create Course
            </button>

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Cover
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Course name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Language
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course) => (
                            <tr key={course._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4">
                                    <img src={course.cover} alt={course.title} className="w-20 h-20 object-cover rounded-md" />
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {course.title}
                                </th>
                                <td className="px-6 py-4">
                                    {course.language}
                                </td>
                                <td className="px-6 py-4">
                                    {course.Category}
                                </td>
                                <td className="px-6 py-4">
                                    $ {course.price}
                                </td>
                                <td className={`px-6 py-4 ${getValidColor(course.valid)}`}>
                                    {course.valid}
                                </td>
                                <td className="px-6 py-4">
                                    <Link to={`/teacher/course/details/${course._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Content;


// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import { fetchCourses } from '../../../slice/Teacher/Course/courseSlice';

// function Content() {
//     const dispatch = useDispatch();
//     const teacherID = localStorage.getItem('id_teacher');
//     const courses = useSelector((state) => state.courseTeacher.courses);
//     const status = useSelector((state) => state.courseTeacher.status);
//     const error = useSelector((state) => state.courseTeacher.error);

//     useEffect(() => {
//         if (teacherID) {
//             dispatch(fetchCourses(teacherID));
//         }
//     },courses);

//     const getValidColor = (valid) => {
//         switch (valid) {
//             case 'valid':
//                 return 'text-green-500';
//             case 'invalid':
//                 return 'text-red-500';
//             case 'pending':
//                 return 'text-orange-500';
//             default:
//                 return 'text-gray-500';
//         }
//     };

//     return (
//         <div className="p-4">
//             <Link to="/create-course" className="bg-green-500 mb-5 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-3xl">
//                 Create Course
//             </Link>

//             <div className="relative overflow-x-auto">
//                 <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//                     <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                         <tr>
//                             <th scope="col" className="px-6 py-3">
//                                 Course name
//                             </th>
//                             <th scope="col" className="px-6 py-3">
//                                 Language
//                             </th>
//                             <th scope="col" className="px-6 py-3">
//                                 Category
//                             </th>
//                             <th scope="col" className="px-6 py-3">
//                                 Price
//                             </th>
//                             <th scope="col" className="px-6 py-3">
//                                 Status
//                             </th>
//                             <th scope='col' className='px-6 py-3'>
//                                 Action
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {courses.map((course) => (
//                             <tr key={course._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//                                 <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                                     {course.title}
//                                 </th>
//                                 <td className="px-6 py-4">
//                                     {course.language}
//                                 </td>
//                                 <td className="px-6 py-4">
//                                     {course.Category}
//                                 </td>
//                                 <td className="px-6 py-4">
//                                     $ {course.price}
//                                 </td>
//                                 <td className={`px-6 py-4 ${getValidColor(course.valid)}`}>
//                                     {course.valid}
//                                 </td>
//                                 <td className="px-6 py-4">
//                                     <Link to={`/course/${course._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</Link>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default Content;

