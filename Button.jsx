

function Button({children,style}) {
 

  return (
    <>
    
  
    <div className='p-8' >
      <button className=' w-auto h-10 pb-0 px-16  rounded-md bg-white shadow-2xl text-black hover:bg-orange-500 transform ease-out duration-200`'>{children}</button>
      
    </div>

    </>
  )
}

export default Button