// import React from 'react';

const CallToActionSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl  text-white font-bold mb-4">Join our world is largest learning platform today</h2>
        <p className="text-lg leading-relaxed mb-8">
          Discover new possibilities for the future. Learn from just $13.99 USD until tomorrow.
        </p>
        <div>
          <button className="mx-2 px-4 py-2 bg-deep-red hover:bg-pink rounded">Join as Instructor</button>
          <button className="mx-2 px-4 py-2 bg-secondary hover:bg-purple-300 rounded">Join as Student</button>
        </div>
      </div>
    </section>
  );
}

export default CallToActionSection;
