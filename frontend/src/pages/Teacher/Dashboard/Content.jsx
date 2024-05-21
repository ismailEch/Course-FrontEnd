// import React from 'react';
import ColumnChart from '../../../components/Admin/ColumnChart';
import ProgressChart from '../../../components/Admin/ProgressChart';

const Content = () => {
  // Define static data for courses
  const courses = [
    { name: 'Introduction to Lorem Ipsum', progress: 40 },
    { name: 'English for Today', progress: 60 },
    { name: 'Basics of Lorem Ipsum', progress: 80 }
  ];

  return (
    <main className="p-6 bg-gray-100 flex-1">
      {/* Overview Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Courses in progress</p>
          <span className="block text-2xl text-blue-500">3</span>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Active Prototypes</p>
          <span className="block text-2xl text-blue-500">7</span>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Hours Learning</p>
          <span className="block text-2xl text-blue-500">3h 15m</span>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Community score</p>
          <span className="block text-2xl text-blue-500">240</span>
        </div>
      </section>

      {/* Study Statistics and Progress Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-primary p-4 rounded shadow col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-white">STUDY STATISTICS</h2>
          <div className="h-100 bg-blue-100  flex items-center justify-center">
            <ColumnChart /> {/* Integrating the ColumnChart component */}
          </div>
        </div>
        <div className="bg-primary p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4 text-white">PROGRESS</h2>
          <div className="h-46 flex   items-center justify-center">
            <ProgressChart value={45} /> {/* Integrating the ProgressChart component */}
          </div>
        </div>
      </section>

      {/* My Courses Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">My Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <div key={index} className="bg-purple-100 p-4 rounded shadow">
              <h3 className="text-lg font-semibold text-gray-700">{course.name}</h3>
              <div className="mt-4 flex justify-center">
                <div className="w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center text-white">
                  <span>{course.progress}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Events Section */}
      <aside className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Live Events</h2>
        <div className="bg-gray-100 p-4 rounded flex items-center space-x-4">
          <div className="flex-grow">
            <p className="text-gray-700">Ipsum odio et integer aliquet lorem a, sem suscipit varius.</p>
            <span className="text-gray-500 text-sm">Shams Tabrez - Live</span>
          </div>
        </div>
      </aside>

      {/* Activity Section */}
      <aside className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Activity</h2>
        <div className="space-y-4">
          <div className="flex space-x-4 items-start">
            <div className="flex-grow">
              <p className="text-gray-700">
                <span className="font-semibold">Felix</span> has replied on{" "}
                <span className="font-semibold">At aliquam enim in cras arcu</span>
              </p>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labo...
              </p>
            </div>
          </div>
          <div className="flex space-x-4 items-start">
            <div className="flex-grow">
              <p className="text-gray-700">
                <span className="font-semibold">Ludwig</span> has invited you to{" "}
                <span className="font-semibold">Imperdiet enim est, varius faucibus.</span>
              </p>
              <p className="text-gray-500 text-sm">25th Sep. 11:00 am</p>
            </div>
          </div>
          <div className="flex space-x-4 items-start">
            <div className="flex-grow">
              <p className="text-gray-700">
                <span className="font-semibold">Jonathon</span> has commented on{" "}
                <span className="font-semibold">Venenatis aliquam sit pellentesque...</span>
              </p>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labo...
              </p>
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
};

export default Content;
