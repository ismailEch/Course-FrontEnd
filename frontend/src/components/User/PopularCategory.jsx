import { FaAngleRight } from 'react-icons/fa';
// import { IoIosArrowForward } from 'react-icons/io';
import { MdShuffleOn } from "react-icons/md";

const categories = [
  {
    name: "DESIGN",
  },
  {
    name: "WEB DEVELOPEMENT",
  },
  {
    name: "MARKETING",
  },
  {
    name: "UI/UX",
  },
  {
    name: "PHOTOGRAPHY",
  },
  {
    name: "BIG DATA",
  },
  {
    name: "DATA SCIENCE",
  },
  {
    name: "PYTHON FONDAMENTAL",
  }

];

const PopularCategory = () => {
  return (
    <section className="sm:w-full bg-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 w-11/12">
        <h2 className="text-3xl font-bold mb-6">
          <span className="text-white">Popular</span>{' '}
          <span className="text-secondary">Category</span>
        </h2>
        <div className="grid  sm:grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <button
              key={index}
              className="bg-rich-purple  hover:bg-purple-700  px-2 py-4 rounded-md text-white  flex items-center justify-between"
            >
              <div className="flex items-center">
                <div className="mr-2">
                  <FaAngleRight />
                </div>
                <p className="text-sm font-inter">{category.name}</p>
              </div>
              <div className= "mr-2 bg-purple-500 hover:bg-purple-400">
              <MdShuffleOn />
              </div>
            </button>
          ))}
        </div>
          </div>
    </section>
  );
};

export default PopularCategory;
