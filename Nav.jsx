import React from 'react'
import Hari from '../assets/Hari'

function Nav({inc}) {
    const items=[{name:'Home',age:19},
        {name:'About',age:19},
        {name:'Contect',age:19},
        {name:'Feedback',age:19},
]
  return (
<div className='flex justify-between bg-white shadow-md h-14'>
        <span className='font-bold text-4xl text-orange-500 px-32'>Fruit <span className='text-5xl font-thin text-slate-400'>Shop</span></span>
        
<div className='flex space-x-7 px-36 py-4 text-sm '>
            {items.map(h=>(
                <ul ><li className='text-lg hover:shadow hover:text-black rounded-lg px-2 p-y4 hover:border-b-4 border-green-500'>{h.name}</li>
                </ul>
        ))}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"  className='text-orange-500'/>
</svg>
<Hari/>
</div>
</div>
  )
}

export default Nav