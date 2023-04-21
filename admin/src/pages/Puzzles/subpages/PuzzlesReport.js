import React, { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'

import { API } from '../../../constants'
import axios from 'axios'
import ReportCard from '../../../components/ReportCard'

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
            {reports?.map((report) => (
                <ReportCard report={report}/>
            ))}
        </Layout>
    )
}

export default PuzzlesReport