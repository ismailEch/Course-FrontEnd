// import React from 'react';

function planSelection() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-12 bg-gray-100">
      <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-10 w-full max-w-3xl">
        <div className="w-full rounded-lg shadow-md bg-white py-10 px-8">
          <div className="text-center text-2xl font-bold uppercase">ACADEMIA</div>
          <div className="text-center text-xl mt-4">The Right Plan for Your Business</div>
          <div className="text-center text-gray-600 mt-4">
            We have several powerful plans to showcase your business and get discovered as a creative entrepreneur. Everything you need.
          </div>
          <div className="flex flex-col space-y-4 mt-8 md:flex-row md:space-y-0 md:space-x-4">
            <div className="w-full p-4 rounded-lg shadow-md bg-white flex flex-col items-center space-y-4">
              <div className="text-xl font-bold">Pro</div>
              <div className="text-center text-gray-600">Intro</div>
              <ul className="flex flex-col space-y-2">
                <li>Upload Video up to 720p Resolution</li>
                <li>Attachment & Post Scheduling</li>
                <li>Set your rates</li>
              </ul>
              <div className="flex items-center justify-center mt-4">
                <span className="text-xl font-bold mr-2">$123</span>
                <span className="text-sm">/month</span>
              </div>
              <button className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700">
                Try 1 month
              </button>
            </div>
            <div className="w-full p-4 rounded-lg shadow-md bg-white flex flex-col items-center space-y-4">
              <div className="text-xl font-bold">Base</div>
              <div className="text-center text-gray-600">Everything in Intro, Plus</div>
              <ul className="flex flex-col space-y-2">
                <li>Upload Video with HD Resolution</li>
                <li>Attachment & Post Scheduling</li>
                <li>Set your rates</li>
                <li>Exclusive Deals</li>
              </ul>
              <div className="flex items-center justify-center mt-4">
                <span className="text-xl font-bold mr-2">$123</span>
                <span className="text-sm">/month</span>
              </div>
              <button className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700">
                Choose
              </button>
            </div>
            <div className="w-full p-4 rounded-lg shadow-md bg-white flex flex-col items-center space-y-4">
              <div className="text-xl font-bold">Enterprise</div>
              <div className="text-center text-gray-600">Everything in Base, Plus</div>
              <ul className="flex flex-col space-y-2">
                <li>Upload Video with 4K Resolution</li>
                <li>Attachment & Post Scheduling</li>
                <li>Set your rates</li>
                <li>Exclusive Deals</li>
                <li>Advanced Statistics</li>
              </ul>
              <div className="flex items-center justify-center mt-4">
                <span className="text-xl font-bold mr-2">$123</span>
                <span className="text-sm">/month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default planSelection;
