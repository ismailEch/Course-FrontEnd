import Card from "./Card";
import React from 'react';
import Navbar from "./Navbarr";


const SectionCards = () => {
  return (
    <>
    <Navbar />
    <section className="justify-center flex-col flex bg-neutral-100">
      <h3 className="justify-center flex font-bold my-11 text-4xl font-serif">Courses</h3>
      <section className='flex justify-center flex-row flex-wrap ' >
        {/* <h2 className="flex justify-center text-3xl
         decoration-neutral-950 font-extrabold mb-7">COURSES</h2> */}
        {/* <div className='flex justify-center flex-row flex-wrap'> */}
             {/* <div className=""> */}
              <Card titre = "Javascript-HTML-CSS" 
               paragraphe = "ce cour vous permettez de construire une solide connaissance du longuage le plus reconue du web javascript , HTML et CSS ainsi qu'il y a beaucoup des exercices pratiques qui vous permettez de se familiariser avec" 
               image = "/images/img-3.jpg" />
              <Card titre = "Redux Cours" 
              paragraphe = "Maitriser les components est beoucoup plus important pour un frontend c'est pour cela ce cour bla bla bla"
              image = "/images/img-4.jpg" />
              <Card image = "/images/img-1.jpg" />
              <Card />
              <Card />
            {/* </div> */}
        {/* </div> */}
      </section>
      </section>
   </>
  )
}

export default SectionCards
