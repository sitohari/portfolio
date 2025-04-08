import React from 'react'
import { ButtonPrimmary } from './ButtonPrimmary'

export const FooterComponent = () => {
  return (
    <footer className='bg-[#0D1117] pb-20'>
        <div className="container mx-auto px-4 max-w-[800px] text-start animate-fade-in">
        <h2 className="text-3xl font-bold text-start mb-8 text-[#f1f4f5]">Thanks for Scrolling</h2>
        <ButtonPrimmary />
        </div>
    </footer>
  )
}
