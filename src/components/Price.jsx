import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { pricingOptions } from '../constants'

const Price = () => {
  return (
    <div className='mt-20'>
        <h2 className='text-3xl md:text-5xl lg:text-6xl text-center my-8 tracking-wide'>Pricing</h2>
        <div className='flex flex-wrap'>
            {pricingOptions.map((option, index) => (
                <div key={index} className='w-full sm:h-1/2 md:w-1/3 p-2'>
                    <div className='p-10 border border-neutral-700 rounded-xl'>
                        <p className='text-4xl mb-8'>
                            {option.title}
                            {option.title === 'Pro' && <span className='text-xl bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text mb-4 ml-2 '>(Most Popular)</span>}
                        </p>
                        <p className='mb-8'>
                            <span className='text-5xl mt-6 mr-2'>{option.price}</span>
                            <span className='text-neutral-400 tracking-tight'>/Month</span>
                        </p>
                        <ul>
                            {option.features.map((feature, index) => (
                                <li key={index} className='mt-8 flex items-center'>
                                    <CheckCircle2/>
                                    <span className='ml-2'>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className='inline-flex justify-center items-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-purple-800 border border-purple-900 rounded-lg '>Subscribe</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Price