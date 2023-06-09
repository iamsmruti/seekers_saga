import React, { useState, useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { API } from '../../../constants'
import axios from 'axios'
import { getBarChartData } from '../../../helpers/parseDataForBarGraph';

const BarChartComponent = () => {
    const [data1, setData1] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
      axios.get(`${API}/report/all`, {
        headers: {
          token: localStorage.getItem('admin_token')
        }
      }).then((res) => {
        setData1(res.data)
      }).catch((err) => {
        console.log(err)
      })
    }, [])

    setTimeout(() => {
      setData(getBarChartData(data1))
    }, 500)

    return (
      <ResponsiveContainer key={2} width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="hunt" fill="#301854" />
          <Bar dataKey="puzzle" fill="#B6D8A1" />
        </BarChart>
      </ResponsiveContainer>
    );
  }

export default BarChartComponent
