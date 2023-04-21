import React from 'react'
import CustomButton from '../../../components/CustomButton'
import ImageMapper from 'react-image-mapper'

const PuzzleCard = ({item}) => {
    const giveCoordinates = (row, col, width) => {
        let x = width/2 + width*(col-1) + 45 + (col-1)*2
        let y = width/2 + width*(row-1) + 45 + (row-1)*9

        return [x-width/2, y - width/2, x-width/2, y + width/2, x + width/2, y + width/2, x + width/2, y - width/2]
    }

    let allBoxes = []

    for(let i = 0; i < 7; i++){
        for(let j = 0; j < 7; j++)
            allBoxes.push({ name: `r${i}_c${j}`, shape: "poly", coords: giveCoordinates(i, j, 55), fillColor: "rgba(0, 255, 0, 0.2)", lineWidth: 0 })
    }

    const MAP = {
        name: "my-map",
        areas: allBoxes
    }

    // 

    const handleClickedAnswer = (area) => {
        if(area.name === 'r3_c5'){
            console.log("You Did it")
        } else {
            console.log("You have one more attempt")
        }
    }

    const handleClickedRest = (area) => {
        console.log("You have one more try")
    }
  return (
    <div className='w-fit'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='border-2 w-fit m-3 md:m-0'>
                <ImageMapper 
                    src={item.image} 
                    map={MAP} 
                    width={500}
                    onClick={area => handleClickedAnswer(area)}
                    onImageClick={event => handleClickedRest(event)}
                />
            </div>
            
            <div className='flex flex-col m-3 md:m-0'>
                <p className='font-semibold text-[28px]'>Did you figure out ?</p>
                <p>Click on the odd one</p>

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