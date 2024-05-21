import React, { useState } from 'react';
import Navbar from '../../../components/User/Navbar';
import Course1 from '../../../assets/course1.png';
import Course2 from '../../../assets/course2.png';
import Course3 from '../../../assets/course3.png';
import Course4 from '../../../assets/course4.png';
import Course5 from '../../../assets/course5.png';
import Course6 from '../../../assets/course6.png';
import Course7 from '../../../assets/course7.png';
import Course8 from '../../../assets/course8.png';
import Course9 from '../../../assets/course9.png';
import Course10 from '../../../assets/course10.svg';
import Course11 from '../../../assets/course11.svg';
import Course12 from '../../../assets/course12.svg';
import Course13 from '../../../assets/course13.svg';
import Course14 from '../../../assets/course14.svg';
import Course15 from '../../../assets/course15.svg';
import Footer from '../../../components/User/Footer';

const courses = [
  {
    id: 1,
    name: "Design Fundamentals",
    image: Course1,
    teacherName: "John Doe",
    teacherImage: "",
    stars: 4,
    description: "Learn the basics of design principles.",
    hours: 4,
    price: "free",
    language: "English"
  },
  {
    id: 2,
    name: "Web Development",
    image: Course2,
    teacherName: "Fred Smith",
    teacherImage: "",
    stars: 5,
    description: "Build websites using HTML, CSS, and JavaScript.",
    hours: 6,
    price: "paid",
    language: "English"
  },
  {
    id: 3,
    name: "Business Management",
    image: Course3,
    teacherName: "Alex Johnson",
    teacherImage: "",
    stars: 4,
    description: "Learn the fundamentals of business management.",
    hours: 5,
    price: "paid",
    language: "English"
  },
  {
    id: 4,
    name: "Data Science Essentials",
    image: Course4,
    teacherName: "Emily Brown",
    teacherImage: "",
    stars: 4,
    description: "Learn essential concepts for data analysis.",
    hours: 5,
    price: "free",
    language: "English"
  },
  {
    id: 5,
    name: "Digital Marketing Strategies",
    image: Course5,
    teacherName: "Anne Wilson",
    teacherImage: "",
    stars: 5,
    description: "Discover effective digital marketing strategies.",
    hours: 4,
    price: "free",
    language: "English"
  },
  {
    id: 6,
    name: "Mobile App Development",
    image: Course6,
    teacherName: "David Martinez",
    teacherImage: "",
    stars: 4,
    description: "Build mobile apps using React Native.",
    hours: 6,
    price: "paid",
    language: "English"
  },
  {
    id: 7,
    name: "UI/UX Design",
    image: Course7,
    teacherName: "Sarah Wilson",
    teacherImage: "",
    stars: 5,
    description: "Master the art of user interface and experience design.",
    hours: 7,
    price: "paid",
    language: "English"
  },
  {
    id: 8,
    name: "Python Programming",
    image: Course8,
    teacherName: "Elon Thompson",
    teacherImage: "",
    stars: 4,
    description: "Learn Python programming from scratch.",
    hours: 8,
    price: "free",
    language: "English"
  },
  {
    id: 9,
    name: "Python Programming",
    image: Course9,
    teacherName: "Elon Thompson",
    teacherImage: "",
    stars: 4,
    description: "Learn Python programming from scratch.",
    hours: 8,
    price: "free",
    language: "English"
  },
  {
    id: 10,
    name: "Python Programming",
    image: Course10,
    teacherName: "Elon Thompson",
    teacherImage: "",
    stars: 4,
    description: "Learn Python programming from scratch.",
    hours: 8,
    price: "paid",
    language: "English"
  },
  {
    id: 11,
    name: "Python Programming",
    image: Course11,
    teacherName: "Elon Thompson",
    teacherImage: "",
    stars: 4,
    description: "Learn Python programming from scratch.",
    hours: 8,
    price: "paid",
    language: "English"
  },
  {
    id: 12,
    name: "Python Programming",
    image: Course12,
    teacherName: "Elon Thompson",
    teacherImage: "",
    stars: 4,
    description: "Learn Python programming from scratch.",
    hours: 8,
    price: "free",
    language: "English"
  },
  {
    id: 13,
    name: "Python Programming",
    image: Course13,
    teacherName: "Elon Thompson",
    teacherImage: "",
    stars: 4,
    description: "Learn Python programming from scratch.",
    hours: 8,
    price: "paid",
    language: "English"
  },
  {
    id: 14,
    name: "Python Programming",
    image: Course14,
    teacherName: "Elon Thompson",
    teacherImage: "",
    stars: 4,
    description: "Learn Python programming from scratch.",
    hours: 8,
    price: "paid",
    language: "English"
  },
  {
    id: 15,
    name: "Python Programming",
    image: Course15,
    teacherName: "Elon Thompson",
    teacherImage: "",
    stars: 4,
    description: "Learn Python programming from scratch.",
    hours: 8,
    price: "free",
    language: "English"
  }
];

const AllCourses = () => {
    const [filteredCourses, setFilteredCourses] = useState(courses);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({ price: '', language: '' });

    const handleFilter = () => {
      let filtered = courses.filter(course => {
          const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase());
          const matchesPrice = filters.price === '' || course.price === filters.price;
          const matchesLanguage = filters.language === '' || course.language === filters.language;
          return matchesSearch && matchesPrice && matchesLanguage;
      });
      setFilteredCourses(filtered);
  };
  

    const handleLoadMore = () => {
        // Implement pagination logic here
    };

    return (
        <div>
            <Navbar />
            <div className="bg-primary text-primary py-20 mt-8">
            <div className="max-w-7xl mx-auto px-4 w-11/12">
                <div className="flex gap-2 mb-6">
                    <input
                        type="text"
                        placeholder="Search Courses"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border-gray-300 border rounded-md px-3 py-2 mr-4"
                    />
                    <button className="bg-purple-600 px-8 py-3 rounded-lg text-white font-bold hover:bg-purple-500 transition duration-300" onClick={handleFilter}>Search</button>
                </div>
                <div className="flex gap-2 mb-6">
                    <select
                        value={filters.price}
                        onChange={(e) => setFilters({ ...filters, price: e.target.value })}
                        className="bg-purple-600 text-white px-4 py-2 rounded-md"
                    >
                        <option > PRICE</option>
                        <option value="free">Free</option>
                        <option value="paid">Paid</option>
                    </select>
                    <select
                        value={filters.language}
                        onChange={(e) => setFilters({ ...filters, language: e.target.value })}
                        className="bg-purple-600 text-white px-4 py-2 rounded-md"
                    >
                        <option value="">Language</option>
                        <option value="English">English</option>
                        <option value="French">French</option>
                        <option value="Arabic">Arabic</option>
                    </select>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                    {filteredCourses.map(course => (
                        <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={course.image} alt={course.name} className="w-full h-36 object-cover" />
                            <div className="px-4 py-4">
                                <p className="text-lg font-semibold text-gray-800 mb-2">{course.name}</p>
                                <div className="flex items-center mb-2">
                                    <img src={course.teacherImage} alt={course.teacherName} className="w-8 h-8 rounded-full mr-2" />
                                    <p className="text-sm text-gray-700">{course.teacherName}</p>
                                </div>
                                <p className="text-gray-700 mb-2">{course.description}</p>
                                <p className="text-gray-700">{course.hours} Hours</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <button className="bg-purple-600 px-8 py-3 rounded-lg text-white font-bold hover:bg-purple-500 transition duration-300" onClick={handleLoadMore}>Load More</button>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default AllCourses;