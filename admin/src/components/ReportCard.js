import React from 'react'
import {getUserDetails} from '../api/getUserDetails'
import ReportComponent from './ReportComponent'
import { MdDelete } from 'react-icons/md'

const ReportCard = ({report}) => {
    const handleDelete = () => {
        
    }

    return (
        <div className='grid grid-cols-8 md:w-[900px] w-[100%] border-[1px] border-solid border-slate-300 mb-[20px] px-5 py-5 shadow-md overflow-hidden flex-wrap'>
            <div className='md:col-span-1 col-span-8 w-[100%] flex justify-center md:items-start items-center'>
                <div className='w-[100px] h-[100px] bg-deepPurpleShade rounded-full flex justify-center items-center'>
                    <p className='text-[40px] text-white mt-[-5px]'>{report.user[0]}</p>
                </div>
            </div>


            <div className='md:col-span-3 col-span-8 md:pl-4'>
                <p className='font-semibold text-[18px] md:text-left text-pinkShade text-center'>{report.user}</p>

                <div className='mt-4'>
                    <p className='mt-3'><span className='font-bold text-darkGreenShade'>Played on:</span> {report.createdAt.substring(0, 10)}</p>
                    <p><span className='font-bold text-darkGreenShade'>Total Time :</span> {report.speed.timeTaken} sec</p>
                    <p><span className='font-bold text-darkGreenShade'>Total Attempts :</span> {report.accuracy.attemptsTaken}</p>
                    <p><span className='font-bold text-darkGreenShade'>Intellectual Score :</span> {report.intellectual.score}</p>
                </div>

                <div className='mt-3 text-[20px]'>
                    <div onClick={handleDelete} className='bg-red-300 w-fit p-2 rounded-full cursor-pointer'>
                        <MdDelete className='text-red-900'/>
                    </div>
                </div>
            </div>

            <div className='md:col-span-4 col-span-8 md:pl-4'>
                <ReportComponent speed={report.speed} accuracy={report.accuracy} intellectual={report.intellectual}/>
            </div>
        </div>
    )
}

export default ReportCard