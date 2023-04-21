import React, { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'

import { API } from '../../../constants'
import axios from 'axios'
import ReportCard from '../../../components/ReportCard'

import Heading from '../../../components/Heading'

const HuntReport = () => {
    const [reports, setReports] = useState()
    useEffect(() => {
        axios.get(`${API}/hunt/all`, {
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
            <Heading title={"Treasure Hunt - Chapter 1 [ Reports ]"} subtitle={"Following are the stats who completed the Treasure Hunt."}/>
            
            <div className='mt-5'>
                {reports?.map((report) => (
                    <ReportCard report={report}/>
                ))}
            </div>
        </Layout>
    )
}

export default HuntReport