import React from 'react'

export const ButtonSecondary = ({icon, label}) => {
  return (
    <>
      <button className='bg-[#212831] px-5 py-2 rounded-full flex gap-2 items-center text-[#f1f4f5] font-medium hover:scale-105 transition-transform duration-300'>
        <img src={icon} alt={label} className="w-4 h-4 inline-block items-center" />
        {label}
      </button>
    </>
  )
}
