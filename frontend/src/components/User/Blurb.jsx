// import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-purple-900 text-white min-h-screen">
      <header className="py-6">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <div className="text-3xl font-bold">ACAD<span className="text-red-600">E</span>MIA</div>
          <div>
            <a href="#" className="mx-4">Home</a>
            <a href="#" className="mx-4">About</a>
            <a href="#" className="mx-4">Courses</a>
            <a href="#" className="mx-4">Blog</a>
            <a href="#" className="mx-4">Contact</a>
          </div>
          <div>
            <button className="mx-2 px-4 py-2 bg-primary rounded">Login</button>
            <button className="mx-2 px-4 py-2 bg-red-600 rounded">Get Started</button>
          </div>
        </nav>
      </header>

      <main>
        <section className="text-center py-16">
          <h1 className="text-5xl font-bold mb-6">Discover enriching courses, elevate your skills</h1>
          <p className="text-xl mb-8">Empower your growth with our cutting-edge online learning platform and resources.</p>
          <div className="max-w-md mx-auto">
            <input type="text" placeholder="Want to learn?" className="w-full p-4 rounded-tl rounded-bl bg-white text-black" />
            <button className="p-4 bg-blue-600 rounded-tr rounded-br">Explore</button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">About us</h2>
            <p className="text-lg leading-relaxed">
              At ACAD<span className="text-red-600">E</span>MIA, we are passionate about redefining education for the digital age. Our cutting-edge Learning Management System provides a dynamic online platform where learners of all backgrounds can access high-quality courses tailored to their needs. From professional development to personal enrichment, our comprehensive catalog offers a variety of subjects taught by expert instructors. We believe in the transformative power of education to change lives and shape the future. Join us in our mission to democratize learning and empower individuals worldwide to thrive in an ever-evolving world.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-12">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Our mission is to democratize education and make high-quality learning accessible to everyone, regardless of their background or location. We believe that by providing engaging and practical courses, we can inspire lifelong learning and help individuals thrive in today is ever-evolving digital landscape.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-12">Most Popular Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Add category cards here */}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-12">What Sets Us Apart</h2>
            <p className="text-lg leading-relaxed">
                           Expertise: Our team of experienced instructors are industry professionals with years of hands-on experience in their respective fields. They bring real-world knowledge and insights to every lesson, ensuring that you receive practical skills that you can apply immediately.
              <br /><br />
                           Comprehensive Curriculum: From foundational concepts to advanced techniques, our carefully curated curriculum covers everything you need to succeed in web design, web development, digital marketing, and beyond. Whether you are a beginner or an experienced professional, there is always something new to learn at ACAD<span className="text-red-600">E</span>MIA.
              <br /><br />
                           Interactive Learning Experience: We believe that learning should be engaging and enjoyable. That is why our courses feature a mix of video lectures, interactive quizzes, hands-on projects, and peer-to-peer discussions. This immersive learning experience keeps you motivated and actively involved in your learning journey.
              <br /><br />
                           Community Support: Learning does not happen in isolation. When you join ACAD<span className="text-red-600">E</span>MIA, you become part of a vibrant community of like-minded individuals who share your passion for learning and growth. Our dedicated support team is always here to answer your questions, provide guidance, and cheer you on every step of the way.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-12">Our Commitment to Excellence</h2>
            <p className="text-lg leading-relaxed">
              At ACAD<span className="text-red-600">E</span>MIA, we are committed to excellence in everything we do. From the 
                 quality of our content to the responsiveness of our support team, we strive to exceed your expectations and 
                 deliver an exceptional learning experience that empowers you to achieve your goals.
              <br /><br />
                 Join us today and embark on a transformative journey towards mastering the digital skills of tomorrow!
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-12">Join our world is largest learning platform today</h2>
            <p className="text-lg leading-relaxed mb-8">
                 Discover new possibilities for the future. Learn from just $13.99 USD until tomorrow.
            </p>
            <div>
              <button className="mx-2 px-4 py-2 bg-red-600 rounded">Join as Instructor</button>
              <button className="mx-2 px-4 py-2 bg-blue-600 rounded">Join as Student</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 bg-gray-900 text-center">
        <p>© Copyright 2024 | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default HomePage;
