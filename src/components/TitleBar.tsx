import React from 'react'
import { MdClose } from 'react-icons/md'

const clickHandler = ()=>{
   alert("close button")
}

export const TitleBar = () => {
   return (
      <>
         <div className='flex relative m-auto w-[90%] justify-center py-4'>
            <h1 className='text-center font-bold'>ثبت بازخورد </h1>
         </div>
         <MdClose size={20} onClick={clickHandler} className='absolute left-0 top-1 m-4' />
      </>
   )
}
