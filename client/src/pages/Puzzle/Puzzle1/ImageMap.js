import React, { useState } from 'react'
import ImageMapper from 'react-image-mapper'
import { toast } from 'react-toastify'

const ImageMap = ({item, timer, setStats, setPuzzleState}) => {
    const [attempts, setAttempts] = useState(1)

    const giveCoordinates = (row, col, width) => {
        let x = width/2 + width*(col-1) + 100 + (col-1)*8
        let y = width/2 + width*(row-1) + 100 + (row-1)*9

        return [x-width/2, y - width/2, x-width/2, y + width/2, x + width/2, y + width/2, x + width/2, y - width/2]
    }

    let allBoxes = []

    for(let i = 0; i < 7; i++){
        for(let j = 0; j < 7; j++)
            allBoxes.push({ name: `r${i+1}_c${j+1}`, shape: "poly", coords: giveCoordinates(i, j, 55), fillColor: "rgba(0, 255, 0, 0.2)", lineWidth: 0 })
    }

    const MAP = {
        name: "my-map",
        areas: allBoxes
    }
    
    const handleClickedAnswer = (area) => {
        setAttempts(Number(attempts) + 1)

        if(area.name === item.answer){
            toast('You got it')
            setStats(current => [...current, {time: 15 - timer, attempts: attempts}])
            setPuzzleState(prev => prev + 1)
        } else {
            toast("Wrong Answer!")
        }
    }
  return (
    <>
    <div className='hidden md:block'>
        <ImageMapper 
            src={item.image} 
            map={MAP} 
            width={500}
            onClick={area => handleClickedAnswer(area)}
        />
    </div>
    <div className='md:hidden block w-fit scale-[70%]'>
        <div className='m-[-80px]'>
        <ImageMapper 
            src={item.image} 
            map={MAP} 
            width={500}
            onClick={area => handleClickedAnswer(area)}
        />
        </div>
    </div>
    </>
  )
}

export default ImageMap