import React from 'react'
import {getUserDetails} from '../api/getUserDetails'

const ReportCard = ({report}) => {
    return (
        <div>{report.user}</div>
    )
}

export default ReportCard