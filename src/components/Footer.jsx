import React from 'react'
import { resourcesLinks, platformLinks, communityLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='mt-20 border-t py-10 border-neutral-700'>
        <div className='container mx-auto px-4'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
                <div>
                    <h3 className='text-xl font-semibold text-white mb-6'>Resources</h3>
                    <ul className='space-y-3'>
                        {resourcesLinks.map((link, index) => (
                            <li key={index}>
                                <a className='text-neutral-300 hover:text-white transition-colors duration-200' href={link.href}>
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-semibold text-white mb-6'>Platform</h3>
                    <ul className='space-y-3'>
                        {platformLinks.map((link, index) => (
                            <li key={index}>
                                <a className='text-neutral-300 hover:text-white transition-colors duration-200' href={link.href}>
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-semibold text-white mb-6'>Community</h3>
                    <ul className='space-y-3'>
                        {communityLinks.map((link, index) => (
                            <li key={index}>
                                <a className='text-neutral-300 hover:text-white transition-colors duration-200' href={link.href}>
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='text-center text-neutral-500 mt-10'>
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
