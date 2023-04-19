import React from 'react'

const AddPicture = ({item, index}) => {
  return (
    <div className=''>
        <p className='font-bold mt-7 text-[22px]'>Picture No. {index + 1}</p>
        <div className=''>
            <p className='font-semibold'>Add Image</p>
            {item.image === '' && <div  className='py-3 text-center border-dashed border-[2px] border-black hover:bg-greenShade cursor-pointer'>
              <p>Click to upload an image</p>
            </div>}

            {item.image !== '' && <img src={item.image}/>}
        </div>

        <p className='mt-4 font-semibold'>Add Answers</p>
        <div className='grid grid-cols-2 gap-2'>
            <div>
                <p>Row Number</p>
                <input type='number' className='border-2 px-3 py-1 outline-none border-black w-[100%]'/>
            </div>
            
            <div>
                <p>Column Number</p>
                <input type='number' className='border-2 px-3 py-1 outline-none border-black w-[100%]'/>
            </div>
        </div>
    </div>
  )
}

export default AddPicture