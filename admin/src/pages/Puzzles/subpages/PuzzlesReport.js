import React, { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'

import { API } from '../../../constants'
import axios from 'axios'
import ReportCard from '../../../components/ReportCard'

import Heading from '../../../components/Heading'

const PuzzlesReport = () => {
    const [reports, setReports] = useState()
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
    }, [])

    return (
        <Layout>
            <Heading title={"Find the odd one... [ Reports ]"} subtitle={"Following are the stats who completed the puzzle."}/>
            
            <div className='mt-5'>
                {reports?.map((report) => (
                    <ReportCard report={report}/>
                ))}
            </div>
        </Layout>
    )
}

export default PuzzlesReport