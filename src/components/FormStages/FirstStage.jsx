import React from 'react'

const FirstStage = ({ checked, setChecked }) => {
  console.log(checked)
  return (
    <section className='w-96 h-96 px-12 bg-black rounded-lg text-white flex flex-col justify-between'>
      <div className='flex flex-col justify-between h-1/2'>
        <div className='text-3xl'>E-Posta Adresi Gir</div>
        <div className='flex flex-col'>
          <label className='text-xl mb-2'>E-Posta</label>
          <input
            className='py-1 px-2 outline-0 placeholder-opacity-25 placeholder-[#D9D9D9] rounded-sm bg-[#312E2D]'
            type='email'
            placeholder='E-Posta Adresini Yaz'
          />
          <div
            className='flex items-center'
            onClick={() => setChecked(prev => !prev)}
          >
            <input type='checkbox' checked={checked} />
            <label>
              Haberler, özel teklifler, geribildirim anketleri ve oynanış testi
              davetleri al.
            </label>
          </div>
        </div>
      </div>
      <div>
        <button
          type='button'
          className='text-white bg-gradient-to-r transition-all duration-1000 from-[#E5B977] via-[#53412A] to-[#332719] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
        >
          Red
        </button>
      </div>
    </section>
  )
}

export default FirstStage
