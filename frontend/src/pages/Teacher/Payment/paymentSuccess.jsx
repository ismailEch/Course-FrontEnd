import React from 'react'
import { Link } from 'react-router-dom'

function paymentSuccess() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-green-200">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 space-y-6">
        <p className="text-3xl text-green-800 font-semibold">Payment Successful!</p>
        <p className="text-lg text-gray-600">Thank you for your payment.</p>
        <div className='mt-4'>
        <Link to={'/teacher/dashboard'}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 w-full"
        >
          Go to Dashboard
        </Link >
        </div>
        
      </div>
    </div>
  )
}

export default paymentSuccess
