import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const Chart = ({data}) => {
    return (
        <div className='w-[800px] h-[300px]  '>
                    <ResponsiveContainer>
                        <BarChart data={data.ratings} layout="vertical" >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" reversed />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" fill="orange" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
    );
};

export default Chart;