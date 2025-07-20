import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { createShortUrl } from '../api/shortUrl.api'


const UrlForm = () => {
    const [url, setUrl] = useState("")
    const [shortUrl, setShortUrl] = useState("")
    const [copied, setCopied] = useState(false);
    
    // console.log(url)
    const handleSubmit =async() => {
        // event.preventDefault();
        const shorturl = await createShortUrl(url); // call the API to create a short URL
        // console.log(data);
        setShortUrl(shorturl); // set the short URL to the state variable
    }


    const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after
    }

   const handleChange = (event) => {
    setUrl(event.target.value); // Update the URL state variable with the input value
  } 
  return (
     <div className="space-y-4">
        <div>

          <input
            type="url"
            placeholder="Enter your long URL..."
            value={url}  /// this is called 2 way binding, it will update the value of url state variable
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
            {/* {isAuthenticated && (
              <input
                type="text"
                placeholder="Custom slug (optional)"
                value={customSlug}
                onChange={(e) => setCustomSlug(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
              />
            )} */}
        </div>
          <button
          onClick={handleSubmit}
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium"
          >
            Generate Chota Link
          </button>
          {/* {{error && (
            <div className="text-red-500 text-sm mt-2">
              {error}
            </div>
          )}} */}
           {shortUrl && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
            <div className="text-sm text-gray-600 mb-2">Your shortened URL:</div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={shortUrl}
                readOnly
                className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm font-mono"
              />
              <button
                onClick={handleCopy}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  copied
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              <a href={shortUrl.data} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">
                Click to test your short URL
              </a>
            </div>
          </div>
        )}
        </div>
  )
}

export default UrlForm