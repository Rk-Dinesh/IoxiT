import React from 'react'
import Letter from '../../assets/note.png'

const StayUpdate = () => {
  return (
    <section className='py-6'>
        <div className='container mx-auto px-4'>
            <div className='grid grid-cols-12 gap-3'>
                <div className='md:col-span-6 col-span-12 flex justify-center'>
                <img src={Letter} alt="Image" />
                </div>
                <div className='md:col-span-6 col-span-12 font-inter py-12 '>
                    <h4 className='text-3xl font-bold text-slate-800 text-center py-2'>Stay Updated with <span className='text-primary'>IoxiT</span></h4>
                    <p className='text-base font-normal text-slate-600 w-4/6 mx-auto text-center py-1.5 pb-5'>Sign up for Our Newsletter to Get the Latest Updates, Insights, and Offers!</p>
                    <div className='flex justify-between py-3 gap-3 bg-gray-100 md:w-5/6 sm:w-full mx-auto px-3 items-center rounded-md  '>
                        <input type="text" placeholder='Email address...'  className='outline-none bg-gray-100 text-slate-800'/>
                        <button className='bg-primary px-8 py-2.5 text-white rounded'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default StayUpdate