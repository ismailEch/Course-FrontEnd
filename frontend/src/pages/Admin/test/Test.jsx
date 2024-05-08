import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from '../../../slice/Teacher/Course/courseSlice';

function Test() {
    const dispatch = useDispatch();
    const teacherID = localStorage.getItem('id_teacher');
    const courses = useSelector((state) => state.courseTeacher.courses);
    const status = useSelector((state) => state.courseTeacher.status);
    const error = useSelector((state) => state.courseTeacher.error);

    useEffect(() => {
        if (teacherID) {
            dispatch(fetchCourses(teacherID));
        }
    }, courses);

    return (
        <div>
           
                <div>
                    <h1>Courses</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Level</th>
                                <th>Valid</th>
                                <th>Price</th>
                                <th>Language</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                <tr key={course._id}>
                                    <td>{course.title}</td>
                                    <td>{course.level}</td>
                                    <td>{course.valid}</td>
                                    <td>{course.price}</td>
                                    <td>{course.language}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
        </div>
    );
}

export default Test;
