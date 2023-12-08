import React from 'react'
import Form from '../aset/form.png'
import Folder from '../aset/folder.png'
import Guide from '../aset/guide.png'
import { GiClick } from "react-icons/gi";

const HeadlineCards = () => {
  return (
    <div className="">
        <h1 className='text-[#023080] font-bold text-4xl pt-6 text-center'>MENU</h1>
        <div className='max-w-[1640px] mx-auto p-4 pb-12 pt-6 grid md:grid-cols-3 gap-6'>

          {/* Cards */}
          <div className="rounded-xl relative">
          {/* Tautan ke Link Baru */}
            <a href="https://drive.google.com/drive/folders/14BwtFExtkxS1sqTcfRKcFGpTW9HuOGJH?usp=sharing" target="_blank" rel="noopener noreferrer">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                  <p className='font-bold text-2xl px-2 pt-4'>Guide Book</p>
                  {/* <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button> */}
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={Guide} alt="guide" />
            </a>
          </div>

          {/* Cards */}
          <div className="rounded-xl relative">
          {/* Tautan ke Link Baru */}
            <a href="https://forms.gle/akxHDBJWWkbRqtBv9" target="_blank" rel="noopener noreferrer">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className='font-bold text-2xl px-2 pt-4'>Form Pendaftaran</p>
                    {/* <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button> */}
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={Form} alt="form" />
            </a>
          </div>


          {/* Cards */}
          <div className="rounded-xl relative">
          {/* Tautan ke Link Baru */}
            <a href="https://drive.google.com/drive/folders/15T7IpQj4Uret8d8eJSSZ1cB8W0MiZgZF?usp=sharing" target="_blank" rel="noopener noreferrer">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                  <p className='font-bold text-2xl px-2 pt-4'>Folder Surat</p>
                  {/* <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button> */}
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={Folder} alt="folder" />
            </a>
          </div>

        </div>
    </div>
  )
}

export default HeadlineCards