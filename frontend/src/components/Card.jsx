import React from 'react'
// import Image from '../../public/images/'

const Card = (props) => {
  return (
    // <div>
        
            
                <div className='border-green-950 bg-slate-50 border-4 min-h-3.5 w-80 shadow-green-950
                 shadow-lg rounded-lg p-3 m-4 overflow-hidden transition-all
                 hover:scale-105 ease-linear duration-300 hover:bg-stone-300   '>
                  
                    <div className='text-9xl text-center overflow-hidden bg-slate-600 '>
                        <img src={props.image} alt="" className='w-full h-44' />
                    </div>
                  
                    <div className='text-center'>
                       <h3 className='decoration-black decoration-solid border-b-2 border-slate-950 pb-2 text-3xl  font-bold m-2.5'>{props.titre}</h3>
                    
                        <p className='text-left'>{props.paragraphe}</p>
                        <strong className='cours-title text-right py-40'>
                            <span>Professeur: Jilali weld-Lhaj</span>
                            {/* <a href="#" className=''> bla lba</a> */}
                        </strong>
                    </div>
                </div>
            
       
      
    // </div>
  )
}

export default Card
