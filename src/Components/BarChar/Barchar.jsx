import React from 'react'
import { BarChart, Bar, YAxis, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { colors } from '../Const'

function BarChar({sources}) {
    
    let keys = []

    function createKeys(source) {
        for (const key in source) {
            if (key !== 'date') {
                keys.push(key)
            }
        }
    }

    return (
        <ResponsiveContainer width={730} height={250} >
            <BarChart  data={sources}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='date' />
                <YAxis />
                <Tooltip />
                <Legend iconType='cross' />
                {sources.map((source)=> (
                        createKeys(source)
                ))}
                {keys.map((key)=>(
                    <Bar dataKey={key} name={key}
                    stroke={colors[key]} unit='bs.S' />
                ))}
            </BarChart>
        </ResponsiveContainer>
    )
};


export default BarChar;