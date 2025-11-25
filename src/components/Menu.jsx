import React, { useState } from 'react'
// import { menu } from '../resources/data'

const Menu = () => {

  const [selected, setSelected] = useState(menu[0]);

  // const handleSelect = (x) => {
  //   return setSelected(x);
  // }

  return (
    <div className='bg-white relative flex flex-col' >
      <div className='h-px w-4/5 bg-[#BBB] mt-14 mb-7 mx-auto' />
      <div className='flex justify-around mx-6'>
        {menu.map((x, i) => (
          <div 
          onClick={() => setSelected(x)}
          key={i}
          className='flex flex-col items-center group' >
            <h5 className={`text-lg hover:cursor-pointer select-none font-[600] duration-500 ${x.type === selected.type && `underline`}`} >{x.type}</h5>
            <div className='h-[2px] w-0 duration-500 group-hover:w-full bg-black relative -top-[7px]' />
          </div>
        ))}
      </div>
      <h3 className='text-3xl text-center my-8 text-[#666]' >{selected.type}</h3>
      <div className='flex flex-col flex-wrap justify-center sm:flex-row' >
        {selected.dishes.map((x, i) => (
            <div className='flex flex-col justify-center px-8 w-full sm:basis-1/2 md:basis-1/3 py-8' key={i} >
              <div className='flex justify-between text-xl pb-4' >
                <h5 className='inline-block' >{x.title}</h5>
                <h5 className='inline-block' >${x.price}</h5>
              </div>
              <p>{x.desc}</p>
            </div>
          ))
        }
      </div>
      <div className='h-px w-4/5 bg-[#BBB] my-14 mx-auto' />
    </div>
  )
}

export default Menu