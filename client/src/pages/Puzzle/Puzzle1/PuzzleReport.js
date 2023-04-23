import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { generateReport } from '../../../helpers/report/generateReport'
import { API } from '../../../constants'
import CustomButton2 from '../../../components/CustomButton2'
import CustomButton from '../../../components/CustomButton'
import ReportComponent from '../../../components/ReportComponent'


const PuzzleReport = ({index, stats}) => {
    localStorage.setItem('puzzle_state', index)
    const navigate = useNavigate()

    const [speed, setSpeed] = useState(0)
    const [accuracy, setAccuracy] = useState(0)
    const [intellectual, setIntellectual] = useState(0)
    const [report, setReport] = useState(false)
    const [totalTime, setTotalTime] = useState(0)
    const [totalAttempts, setTotalAttempts] = useState(0)

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

      setTotalTime(tempSpeed)
      setTotalAttempts(tempAttempts)

      const report = generateReport(tempSpeed, tempAttempts, 9)
      setSpeed(report.speed)
      setAccuracy(report.accuracy)
      setIntellectual(report.intellectual)
      console.log(report)
    }, 500)
  }, [])

  useEffect(() => {
    console.log(totalTime)
  }, [totalTime, totalAttempts])

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
      totalTime: totalTime,
      totalAttempts: totalAttempts,
      stats: stats,
      score: (25*9 - totalTime)*100 - totalAttempts*50
    },
    {
      headers: {
        token: localStorage.getItem('token')
      }
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err.message)
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

                {report 
                  ? <ReportComponent speed={speed} accuracy={accuracy} intellectual={intellectual}/> 
                  : <CustomButton2 onClick={handleGenerateReport} text={"generate Report"}/>}

                <div className='mt-auto'>
                    <CustomButton onClick={handleSubmit} text={"End the Quest"}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PuzzleReport