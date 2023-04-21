import React, { useState, useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { API } from '../../../constants'
import axios from 'axios'
import { getBarChartData } from '../../../helpers/parseDataForBarGraph';

const BarChartComponent = () => {
    const [data1, setData1] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
      axios.get(`${API}/hunt/all`, {
        headers: {
          token: localStorage.getItem('admin_token')
        }
      }).then((res) => {
        console.log(res.data)
        setData1(res.data)
      }).catch((err) => {
        console.log(err)
      })

      setTimeout(() => {
        axios.get(`${API}/puzzle/all`, {
          headers: {
            token: localStorage.getItem('admin_token')
          }
        }).then((res) => {
          console.log(res.data)
          res.data.map((item) => {
            setData1(prev => prev.concat(item))
          })
        }).catch((err) => {
          console.log(err)
        })
      }, 500)
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
          <Bar dataKey="hunt" fill="#8884d8" />
          <Bar dataKey="puzzle" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }

export default BarChartComponent
