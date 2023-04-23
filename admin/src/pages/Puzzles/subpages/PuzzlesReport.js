import React, { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'

import { API } from '../../../constants'
import axios from 'axios'
import PuzzleReportCard from '../../../components/PuzzleReportCard'

import Heading from '../../../components/Heading'
import { useForceRerender } from '../../../hooks/useForceRender'

const PuzzlesReport = () => {
    const [reports, setReports] = useState()
    const [trigger, setTrigger] = useState(0)

    useEffect(() => {
        axios.get(`${API}/puzzle/all`, {
            headers: {
                token: localStorage.getItem('admin_token')
            }
        }).then((res) => {
            setReports(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [trigger])

    return (
        <Layout>
            <Heading title={"Find the odd one... [ Reports ]"} subtitle={"Following are the stats who completed the puzzle."}/>
            
            <div className='mt-5'>
                {reports?.map((report) => (
                    <PuzzleReportCard report={report} setTrigger={setTrigger}/>
                ))}
            </div>
        </Layout>
    )
}

export default PuzzlesReport