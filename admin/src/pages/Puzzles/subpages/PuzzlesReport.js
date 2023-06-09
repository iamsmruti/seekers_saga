import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API } from '../../../constants'

import ReportCard from '../../../components/ReportCard'
import Layout from '../../../components/Layout'
import Heading from '../../../components/Heading'

const PuzzlesReport = () => {
    const [reports, setReports] = useState()
    const [trigger, setTrigger] = useState(0)

    // Fetches all the reports where category equals puzzle
    useEffect(() => {
        axios.get(`${API}/report/category/puzzle`, {
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
                    <ReportCard report={report} setTrigger={setTrigger}/>
                ))}
            </div>
        </Layout>
    )
}

export default PuzzlesReport