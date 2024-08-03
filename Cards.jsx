import React from 'react'
import Citems from './Citems'

function Cards() {
    const Item=[{
        id:1,
        image:'4',
        name:'Green Grapes',
        price:100
    },
    {
        id:2,
        image:'4',
        name:'Green Grapes',
        price:200
    },
    {
        id:3,
        image:'4',
        name:'Green Grapes',
        price:300
    },
    {
        id:4,
        image:'4',
        name:'Green Grapes',
        price:400
    },
    {
        id:1,
        image:'4',
        name:'Green Grapes',
        price:100
    },
    {
        id:2,
        image:'4',
        name:'Green Grapes',
        price:200
    },
    {
        id:3,
        image:'4',
        name:'Green Grapes',
        price:300
    },
    {
        id:4,
        image:'4',
        name:'Green Grapes',
        price:400
    },
    {
        id:4,
        image:'4',
        name:'Green Grapes',
        price:400
    }]
  return (
    <div className='w-5/6 mx-auto grid grid-cols-3 gap-6 mt-16'>
{
    Item.map((fruits)=>(
        <Citems fruits={fruits}/>
    ))
}
    </div>
  )
}

export default Cards