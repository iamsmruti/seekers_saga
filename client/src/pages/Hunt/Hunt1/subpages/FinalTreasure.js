import React, { useEffect, useState } from 'react'
import CustomButton from '../../../../components/CustomButton'
import senku from '../../../../assets/images/hunt_1/senku.png'
import { useNavigate } from 'react-router-dom'
import CustomButton2 from '../../../../components/CustomButton2'

import { API } from '../../../../constants'
import axios from 'axios'

import { generateReport } from '../../../../helpers/report/generateReport'

const FinalTreasure = () => {
  const navigate = useNavigate()

  // Saving the State of the Hunt
  localStorage.setItem('hunt_state', 5)

  const [speed, setSpeed] = useState(0)
  const [accuracy, setAccuracy] = useState(0)
  const [intellectual, setIntellectual] = useState(0)
  const [report, setReport] = useState(false)

  // Use to load the stats from local storage 
  // after 0.5 seconds of component render
  useEffect(() => {
    setTimeout(() => {
      const data = JSON.parse(localStorage.getItem('hunt1_stat'))

      let tempSpeed = 0
      let tempAttempts = 0

      data.map((item) => {
        tempSpeed += item.time
        tempAttempts += item.attempts
      })

      const report = generateReport(tempSpeed, tempAttempts, 5)
      setSpeed(report.speed)
      setAccuracy(report.accuracy)
      setIntellectual(report.intellectual)
      console.log(report)
    }, 500)
  }, [])

  // To end a Hunt ( remove states and move back )
  const handleSubmit = () => {
    navigate('/hunts')
    localStorage.removeItem('hunt_state')
    localStorage.removeItem('hunt1_stat')
  }

  // Generate report and save to Database
  const handleGenerateReport = () => {
    saveToDB()
    setReport(true)
  }

  // Function to save the report to DB
  const saveToDB = () => {
    axios.post(`${API}/hunt/create`, {
      name: 'Treasure Hunt - Chapter 1',
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
    <div className='mt-2 px-5'>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-5 border-[0.5px] border-black p-3'>
        <div className='w-[100%]'>
          <img src={senku}/>
        </div>
        <div className='md:px-10 px-0 py-2 md:w-[600px]'>
          <p className='text-[24px] font-medium'>Congratulations. You did it !</p>
          <p>You have reached the end of the quest.</p>
          <p className='text-pinkShade text-[24px] font-mono mt-10'>This link below has your treasure. Go ahead and recieve it.</p>
          <p className='mt-5 text-blue-500 underline'><a href='/treasure1.png' target='_blank'>Treasure</a></p>
          <p className='text-pinkShade text-[24px] font-mono mt-5'>You are happy with the treasure right ? Welcome</p>
          
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

export default FinalTreasure