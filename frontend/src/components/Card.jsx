import React from 'react'

const Card = () => {
  return (
    // <div>
        
            
                <div className='border-green-950 border-4 w-80 shadow-green-950
                 shadow-lg rounded-lg p-6 m-12 scale-110 transition duration-700 ease-out md:ease-in'>
                    <div className='text-9xl text-center'>
                        <img src="C:\Users\pc\Desktop\react-proj\Course-FrontEnd/frontend/src/assets/images/img-3.jpg" alt="" />
                    </div>

                    <div className='text-center'>
                       <h3 className='decoration-black text-xl font-bold m-2.5'>Javascript-HTML-CSS</h3>
                    
                        <p className='text-left'>vous permettez de maitriser les bases de creation des sites web
                             et aussi construir vous même un site de restauration simple</p>
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
