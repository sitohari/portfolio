import React from 'react'

export const ButtonPrimmary = () => {
  return (
    <>
      <button className='bg-[#8B949E] px-5 py-2 rounded-full flex gap-2 items-center text-[#f1f4f5] font-medium hover:scale-105 transition-transform duration-300 cursor-pointer'>
        Contact Me
        <img src="/images/arrow-right.svg" alt="icon-arrow-right" className="w-4 h-4 inline-block items-center" />
      </button>
    </>
  )
}
