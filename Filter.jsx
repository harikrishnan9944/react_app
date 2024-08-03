import React from 'react'
import Button from './Button';

function Filter() {
  return (
<div className=' w-auto flex mx-48 bg-slate-100  h-24 mt-10 shadow-lg rounded-lg justify-center'>
<Button>Season Speacal</Button>
<Button>Most Like</Button>
<Button>Others!</Button>
</div>
)
}

export default Filter;