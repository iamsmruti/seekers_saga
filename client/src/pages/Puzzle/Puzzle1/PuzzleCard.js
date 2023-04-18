import React from 'react'
import CustomButton from '../../../components/CustomButton'

const PuzzleCard = ({item}) => {
  return (
    <div className='w-fit'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='border-2 w-fit m-3 md:m-0'>
                <img className="md:w-[700px] w-[100%]" src={item.image} />
            </div>
            
            <div className='flex flex-col m-3 md:m-0'>
                <p className='font-semibold text-[28px]'>Did you figure out ?</p>

                <div className='grid grid-cols-2 gap-2 mt-5'>
                    <div>
                        <p>Row Number</p>
                        <input type='number' className='border-2 px-3 py-1 outline-none border-black w-[100%]'/>
                    </div>
                    
                    <div>
                        <p>Column Number</p>
                        <input type='number' className='border-2 px-3 py-1 outline-none border-black w-[100%]'/>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-2 mt-auto'>
                    <div><CustomButton text={"Give Up & Next"}/></div>
                    
                    <div><CustomButton text={"Submit & Next"}/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PuzzleCard