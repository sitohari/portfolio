import React from 'react'

export const ButtonSecondary = ({icon, label, link}) => {
  const handleRedirect = () => {
   window.open(link, '_blank');
  };
  return (
    <>
      <button   onClick={handleRedirect}  className='bg-[#212831] px-5 py-2 rounded-full flex gap-2 items-center text-[#f1f4f5] font-medium hover:scale-105 transition-transform duration-300 cursor-pointer'>
        <img src={icon} alt={label} className="w-4 h-4 inline-block items-center" />
        {label}
      </button>
    </>
  )
}
