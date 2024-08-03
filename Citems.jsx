import React from 'react'
import Button from './Button'

function Citems({fruits}) {
  return (
    <div className='rounded-2xl overflow-hidden shadow-lg justify-center h-54 hover:scale-105'>
     <img src={require(`../assets/${fruits.image}.png`)} alt="Harikrishnan" className='w-full'/>
     <div className='flex flex-col items-center my-4'>
        <span className=' text-orange-500 font-serif font-bold'>{fruits.name}</span>
        <span>₹{fruits.price}</span>
        <Button >Add to Card</Button>
     </div>
    </div>
  )
}

export default Citems