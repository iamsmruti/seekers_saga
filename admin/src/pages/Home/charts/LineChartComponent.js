import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { API } from '../../../constants'
import axios from 'axios'
import { getLineChartData } from '../../../helpers/parseDataForLineGraph';

const LineChartComponent = () => {
    const [data, setData] = useState()

    useEffect(() => {
      axios.get(`${API}/user/all`, {
        headers: {
          token: localStorage.getItem('admin_token')
        }
      }).then((res) => {
        setData(getLineChartData(res.data))
      }).catch((err) => {
        console.log(err)
      })
    }, [])

    return (
      <ResponsiveContainer key={1} width="100%" height="100%">
        <LineChart
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
          <Line type="monotone" dataKey="newUser" stroke="#301854" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
}

export default LineChartComponent