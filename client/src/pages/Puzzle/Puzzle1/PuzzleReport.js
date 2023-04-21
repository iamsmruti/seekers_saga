import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { generateReport } from '../../../helpers/report/generateReport'
import { API } from '../../../constants'
import CustomButton2 from '../../../components/CustomButton2'
import CustomButton from '../../../components/CustomButton'


const PuzzleReport = ({index, stats}) => {
    localStorage.setItem('puzzle_state', index)
    const navigate = useNavigate()

    const [speed, setSpeed] = useState(0)
    const [accuracy, setAccuracy] = useState(0)
    const [intellectual, setIntellectual] = useState(0)
    const [report, setReport] = useState(false)

  // Use to load the stats from local storage 
  // after 0.5 seconds of component render
  useEffect(() => {
    setTimeout(() => {
      const data = JSON.parse(localStorage.getItem('puzzle1_stat'))

      let tempSpeed = 0
      let tempAttempts = 0

      data.map((item) => {
        tempSpeed += item.time
        tempAttempts += item.attempts
      })

      const report = generateReport(tempSpeed, tempAttempts, 9)
      setSpeed(report.speed)
      setAccuracy(report.accuracy)
      setIntellectual(report.intellectual)
      console.log(report)
    }, 500)
  }, [])

    // To end a Hunt ( remove states and move back )
  const handleSubmit = () => {
    navigate('/puzzles')
    localStorage.removeItem('puzzle_state')
    localStorage.removeItem('puzzle1_stat')
  }

  // Generate report and save to Database
  const handleGenerateReport = () => {
    saveToDB()
    setReport(true)
  }

    // Function to save the report to DB
  const saveToDB = () => {
    axios.post(`${API}/puzzle/create`, {
      name: 'Find the odd one...',
      speed: speed,
      accuracy: accuracy,
      intellectual: intellectual
    }, {
      headers: {
        token: localStorage.getItem('token')
      }
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      
    })
  }
  return (
    <div className='w-fit'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='border-2 w-fit m-3 md:m-0'>
                <img src='https://pm1.narvii.com/7233/a34b2183bd5dcb9350bc028b15c18998aaa02472r1-500-667v2_uhq.jpg'/>
            </div>
            
            <div className='flex flex-col m-3 md:m-0'>
                <p className='font-semibold text-[28px]'>Congrats! You have Reached the end...</p>
                <p>Click below to generate a report</p>

                {report ? <div className='mt-5 bg-greenShade h-[220px] p-2'>
                    <p className='text-[24px] font-semibold text-deepPurpleShade'>Performance Report</p>

                    <div className='grid grid-cols-3 mt-2'>
                        <div className='flex flex-col justify-center items-center'>
                        <div className='w-[100px] h-[100px] bg-white rounded-full border-darkGreenShade border-4 flex justify-center items-center'>
                            <p className='text-[32px] font-bold text-darkGreenShade'>{speed.grade}</p>
                        </div>
                        <p className='mt-2'>{speed.remark}</p>
                        <p className='font-bold text-[12px]'>(speed)</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                        <div className='w-[100px] h-[100px] bg-white rounded-full border-darkGreenShade border-4 flex justify-center items-center'>
                            <p className='text-[32px] font-bold text-darkGreenShade'>{accuracy.grade}</p>
                        </div>
                        <p className='mt-2'>{accuracy.remark}</p>
                        <p className='font-bold text-[12px]'>(accuracy)</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                        <div className='w-[100px] h-[100px] bg-white rounded-full border-darkGreenShade border-4 flex justify-center items-center'>
                            <p className='text-[32px] font-bold text-darkGreenShade'>{intellectual.grade}</p>
                        </div>
                        <p className='mt-2'>{intellectual.remark}</p>
                        <p className='font-bold text-[12px]'>(intellectual)</p>
                        </div>
                    </div>
                </div> : <CustomButton2 onClick={handleGenerateReport} text={"generate Report"}/>}

                <div className='mt-5'>
                    <CustomButton onClick={handleSubmit} text={"End the Quest"}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PuzzleReport