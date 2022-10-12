import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip,ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const quizs = useLoaderData();
    const quizItems = quizs.data;
    const data = [];
    for (let i = 0; i < quizItems.length; i++) {
        data.push({
            name: quizItems[i].name,
            total: quizItems[i].total,

        });
    }
    return (
        <div>
          <div className="container">

          <div className="row mt-5 line" style={{
  paddingBottom: '35.25%', /* 16:9 */
  position: 'relative',
  height: 0
}} >

                <div className='col-md-6 offset-md-3' style={{
    position: 'absolute',
    top: '0',
    left: '0',
    width: '600px',
    height: '300px'
  }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={600} height={300} className="linechart" data={data}>
                        <Line type="monotone" dataKey="total" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                    </ResponsiveContainer>
                    <h4 className="text-center mt-2 mb-5">Figure: Quiz Topics Chart</h4>

                </div>

            </div>

          </div>
        </div>
    );
};

export default Statistics;