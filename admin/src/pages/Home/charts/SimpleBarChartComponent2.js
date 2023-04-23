import React, { useState, useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios'
import { API } from '../../../constants';
import { getDataForHuntBarChart } from '../../../helpers/parseDataForHunt';

const SimpleBarChartComponent2 = () => {
  const [data, setData] = useState()

  useEffect(() => {
    axios.get(`${API}/report/all`, {
      headers: {
        token: localStorage.getItem('admin_token')
      }
    }).then((res) => {
      setTimeout(() => {
        setData(getDataForHuntBarChart(res.data))
      }, 500)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#301854" />
          <YAxis yAxisId="right" orientation="right" stroke="#B6D8A1" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="time" fill="#301854" />
          <Bar yAxisId="right" dataKey="attempts" fill="#B6D8A1" />
        </BarChart>
      </ResponsiveContainer>
    );
  }

export default SimpleBarChartComponent2