import React from 'react'
// import {FaGithubSquare} from 'react-icons/fa'
import { TbWorldWww } from "react-icons/tb";

const  Footer = () => {
    const github = 'https://himsika.unsika.ac.id'
    return (
        <div className='max-w-[1640px] mx-auto py-4 px-4 items-center gap-8 bg-[#023080] text-white'>
            <div className='text-center'>
                <h1 className='w-full text-3xl text-white'><span className='font-bold'>OPREC</span> HIMSIKA 2024</h1>
                <p className='italic'>'Regenerasi menciptakan revolusi'</p>
                <p className='pb-2'>Copyright &copy;Himsika2023</p>
                <div className='flex justify-center my-2'>
                    <a href={github} target='_blank' rel='noopener noreferrer'>
                        <TbWorldWww size={30} />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Footer