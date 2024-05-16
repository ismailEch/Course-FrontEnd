import React, { useState, useEffect } from 'react';
import axios from 'axios';
import profil8 from '../../assets/profil8.svg';
import { useParams, Link } from 'react-router-dom';

const CategoryCourses = () => {
  const { categoryName } = useParams();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategoryCourses = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/course/all/${categoryName}`);
        setCourses(response.data.courses);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching category courses:', error);
      }
    };

    fetchCategoryCourses();
  }, [categoryName]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/category');
        setCategories(response.data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-primary sm:w-full text-white py-20">
      <div className="max-w-7xl mx-auto px-4 w-11/12">
        <h1 className="text-3xl font-bold mb-6">
          <span className="text-white mr-2">Courses in</span>
          <span className="text-secondary">{categoryName}</span>
        </h1>

        {/* Category Links */}
        <div className="flex flex-wrap md:flex-nowrap gap-2 mb-6">
          {categories.map(category => (
            <Link
              key={category._id}
              to={`/category/${category.name}`}
              className="rounded-md bg-rich-purple px-4 py-2 text-white hover:bg-purple-700 flex items-center justify-between"
            >
              {category.name}
            </Link>
          ))}
        </div>

        {/* Courses */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={course.cover} alt={course.name} className="w-full h-36 object-cover"/>
              <div className="px-4 py-4">
                <p className="text-lg font-semibold text-gray-800 mb-2">{course.name}</p>
                <div className="flex items-center mb-2">
                  <img src={profil8} alt={course.teacherName} className="w-8 h-8 rounded-full mr-2"/>
                  <p className="text-sm text-gray-700">{course.instructor.FirstName} {course.instructor.LastName}</p>
                </div>
                <div className="flex items-center mb-2"></div>
                <p className="text-gray-700 mb-2">{course.description.substring(0, 65)}...</p>
                <p className="text-gray-700">{course.hours} Hours</p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-purple-600 px-8 py-3 rounded-lg text-white font-bold hover:bg-purple-500 transition duration-300">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCourses;
