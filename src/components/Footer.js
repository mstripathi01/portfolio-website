import React from 'react'
import { FaGithub, FaRegEnvelope } from 'react-icons/fa';


function Footer() {
  return (
    <div className="py-5 border-t-3/2">
            <div className="flex align-center justify-center mt-4">
              <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/tripathimayank">
                <FaGithub />
                <span class="sr-only">Github</span>
              </a>
              
              <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300" href="https://mailto:mayank.tripathi218@gmail.com">
                <FaRegEnvelope />
                <span class="sr-only">Email</span>  
              </a>
             
             
            </div>
            <div className="flex align-center justify-center mt-4">
              <p className="text-black mb-4">
                  Made with <span className = "mr-2" role="img" aria-label="heart">💚</span>by<a className="text-blue-500 hover:underline" href="mailto:me.mayank.tripathi218@gmail.com"> Mayank Shekhar Tripathi</a>
              </p>
              </div>
    </div>
  )
}

export default Footer