import Card from "./Card";


<Card />

import React from 'react'

const SectionCards = () => {
  return (
    <>
      <section className='flex justify-center flex-row flex-wrap ' >
        {/* <h2 className="flex justify-center text-3xl
         decoration-neutral-950 font-extrabold mb-7">COURSES</h2> */}
        {/* <div className='flex justify-center flex-row flex-wrap'> */}
             {/* <div className=""> */}
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            {/* </div> */}
        {/* </div> */}
      </section>
   </>
  )
}

export default SectionCards
