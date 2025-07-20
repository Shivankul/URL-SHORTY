import React from 'react'
import UrlForm from '../components/UrlForm'

const HomePage = () => {
  return (
     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          🔗 Url Shorty
        </h1>
        <UrlForm/>
      </div>
    </div>
  )
}

export default HomePage