import React, { useEffect } from 'react'
import Layout from '../../../components/Layout'

import { API } from '../../../constants'
import axios from 'axios'

const PuzzlesReport = () => {
    useEffect(() => {
        axios.get(`${API}/puzzle/`, {
            
        })
    }, [])

    return (
        <Layout>
            
        </Layout>
    )
}

export default PuzzlesReport