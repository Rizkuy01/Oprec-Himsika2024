import React from 'react'

const HeadlineCards = () => {
  return (
    <div className="">
        <h1 className='text-orange-600 font-bold text-4xl pt-6 text-center'>Top Rated Menu Item's</h1>
        <div className='max-w-[1640px] mx-auto p-4 pb-12 pt-6 grid md:grid-cols-3 gap-6'>
          {/* Cards */}
          <div className="rounded-xl relative">
            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
              <p className='font-bold text-2xl px-2 pt-4'>Geprek Sriwedari</p>
              <p className='px-2'>paket 10K yang menjadi andalan mahasiswa <br /> dalam mengatasi waktu makan siang.</p>
              {/* <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button> */}
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://10619-2.s.cdn12.com/rests/original/108_508242611.jpg" alt="soto" />
          </div>
          {/* Cards */}
          <div className="rounded-xl relative">
            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
              <p className='font-bold text-2xl px-2 pt-4'>Warteg Rizky</p>
              <p className='px-2'>Warteg 24 jam yang berlokasi tepat di depan kampus <br />yang menjadikannya warteg paling diminati seluruh mahasiswa.</p>
              {/* <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button> */}
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://assets.jatimnetwork.com/crop/0x0:0x0/750x500/webp/photo/2023/01/06/1985907977.jpg" alt="soto" />
          </div>
          {/* Cards */}
          <div className="rounded-xl relative">
            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
              <p className='font-bold text-2xl px-2 pt-4'>Es Teh Poci</p>
              <p className='px-2'>Mempunyai sistem 'Drive Thru'menjadikannya minuman <br />yang praktis dan murah untuk menghilangkan dahaga.</p>
              {/* <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button> */}
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://cdn.idntimes.com/content-images/post/20230217/325302538-938170374221710-1614704619464833841-n-05ce5ad9472fcb0af2afa7798a46ec73_600x400.png" alt="soto" />
          </div>
        </div>
    </div>
  )
}

export default HeadlineCards