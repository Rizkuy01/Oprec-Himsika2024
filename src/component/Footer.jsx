import React from 'react'
import {FaGithubSquare} from 'react-icons/fa'

const  Footer = () => {
    const github = 'https://github.com/Rizkuy01'
    return (
        <div className='max-w-[1640px] mx-auto py-8 px-4 items-center gap-8 bg-orange-600 text-white'>
            <div className='text-center'>
                <h1 className='w-full text-3xl text-white italic'><span className='font-bold'>RW</span> Eats</h1>
                <p className=''>Website for searching any foodies & drinks at Ronggo Waluyo's Street.</p>
                <p className='pb-2'>Copyright &copy;rixky2023</p>
                <div className='flex justify-center my-6'>
                    <a href={github} target='_blank' rel='noopener noreferrer'>
                        <FaGithubSquare size={30} />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Footer