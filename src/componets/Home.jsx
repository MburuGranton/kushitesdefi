import React from 'react';
import { TbArrowsExchange } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";

import { LuHelpingHand } from "react-icons/lu";



const Home = ()=> {
    return(
        <div className='grid grid-cols-1 md:grid-cols-3 mt-6 p-2'>
          <div className='flex flex-col bg-shaow rounded-md border-[0px] border-blue-600 hover:scale-110 ease-in duration-150 hover:border-[1px] cursor-pointer shadow-xl p-4 mx-2'>
            <div className='flex items-center justify-center'><TbArrowsExchange size={28} /></div>
            
            <div className='font-semibold text-lg'>Swap Assests</div>
            <a href='/swap'>
            <button className='my-4 px-4 py-2 font-bold text-white hover:text-blue-500 border-[1px] border-blue-500 bg-blue-500 hover:bg-white ease-in duration-150'>Learn More</button>
            </a>
         </div>

         {/**stake */}
         <div className='flex flex-col rounded-md border-[0px] border-blue-600 hover:scale-110 ease-in duration-150 hover:border-[1px] cursor-pointer shadow-xl p-4 mx-2'>
            <div className='flex items-center justify-center'>
            <LuHelpingHand size={28}/>
            </div>

            <div className='font-semibold text-lg'>Stake Assests</div>

            <a href="/stake">
                <button className='my-4 px-4 py-2 font-bold text-white hover:text-blue-500 border-[1px] border-blue-500 bg-blue-500 hover:bg-white ease-in duration-150'>Learn More</button>
                </a>

            
         </div>

         {/**leand */}
         <div className='flex flex-col rounded-md border-[0px] border-blue-600 hover:scale-110 ease-in duration-150 hover:border-[1px] cursor-pointer shadow-xl p-4 mx-2'>
            <div className='flex items-center justify-center'><BsCashCoin size={28} /></div>
            <div className='font-semibold text-lg'>Lend Assests</div>
            <a href="/lend">
            <button className=' my-4 px-4 py-2 font-bold text-white hover:text-blue-500 border-[1px] border-blue-500 bg-blue-500 hover:bg-white ease-in duration-150'>Learn More</button>
            </a>
            
         </div>

        </div>
    )
}

export default Home;