import React from 'react'
import { MdDelete } from 'react-icons/md'

import axios from 'axios'
import { toast } from 'react-toastify'
import { API } from '../constants'

const ReportCard = ({report, setTrigger}) => {
    const handleDelete = () => {
        axios.post(`${API}/report/delete`,{
            id: report._id
        },{
            headers: {
                token: localStorage.getItem('admin_token')
            }
        }).then((res) => {
            console.log(res)
            setTrigger(prev => prev + 1)
            toast("SuccessFully Deleted")
        }).catch((err) => {
            toast(err.message)
        })
    }

    return (
        <div className='grid grid-cols-8 md:w-[900px] w-[100%] border-[1px] border-solid border-slate-300 mb-[20px] px-5 py-5 shadow-md overflow-hidden flex-wrap'>
            <div className='md:col-span-2 col-span-8 w-[100%] flex justify-center md:items-start items-center'>
                <div className='w-[100px] h-[100px] bg-deepPurpleShade rounded-full flex justify-center items-center'>
                    <p className='text-[40px] text-white mt-[-5px]'>{report.user[0]}</p>
                </div>
            </div>


            <div className='md:col-span-4 col-span-8 md:pl-4'>
                <p className='font-semibold text-[18px] md:text-left text-pinkShade text-center'>{report.user}</p>

                <div className='mt-4'>
                    <p className='mt-3'><span className='font-bold text-darkGreenShade'>Played on:</span> {report.createdAt.substring(0, 10)}</p>
                    <p><span className='font-bold text-darkGreenShade'>Total Time :</span> {report.totalTime} sec</p>
                    <p><span className='font-bold text-darkGreenShade'>Total Attempts :</span> {report.totalAttempts}</p>
                </div>

                <div className='md:col-span-2 col-span-8 flex md:hidden bg-green-100 justify-center my-2'>
                    <p className='text-[32px]'>Score:</p>
                    <p className='text-[32px] text-darkGreenShade ml-2'> {report.score}</p>
                </div>

                <div className='mt-3 text-[20px]'>
                    <div onClick={handleDelete} className='bg-red-300 w-fit p-2 rounded-full cursor-pointer'>
                        <MdDelete className='text-red-900'/>
                    </div>
                </div>
            </div>
            <div className='md:col-span-2 col-span-8 md:block hidden'>
                <p>Score</p>
                <p className='text-[32px] text-darkGreenShade'>{report.score}</p>
            </div>
        </div>
    )
}

export default ReportCard