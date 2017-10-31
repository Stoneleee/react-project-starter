import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class RechartsDemo extends Component {
    render () {
        const data = [
            {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
            {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
            {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
            {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
            {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
            {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
        ];
        const data1 = [
            {
                "id": 3998,
                "gross": "240.17",
                "paid_at": "09-06",
                "total_price": "255.50",
                "order_ids": [
                    5501
                ],
                "guest_amount": 2,
                "dishes_count": 1,
                "discount_amount": "15.33",
                "subtotal": "255.50",
                "service_charge": "0.00",
                "tax": "0.00"
            },
            {
                "id": 3999,
                "gross": "7721.23",
                "paid_at": "09-11",
                "total_price": "7799.22",
                "order_ids": [
                    5491
                ],
                "guest_amount": 2,
                "dishes_count": 1,
                "discount_amount": 77.99,
                "subtotal": "6666.00",
                "service_charge": "666.60",
                "tax": "466.62"
            },
            {
                "id": 4000,
                "gross": "532.12",
                "paid_at": "09-11",
                "total_price": "537.50",
                "order_ids": [
                    5503
                ],
                "guest_amount": 2,
                "dishes_count": 3,
                "discount_amount": "5.38",
                "subtotal": "537.50",
                "service_charge": "0.00",
                "tax": "0.00"
            },
            {
                "id": 4001,
                "gross": "2772.48",
                "paid_at": "09-11",
                "total_price": "2829.06",
                "order_ids": [
                    5500
                ],
                "guest_amount": 2,
                "dishes_count": 2,
                "discount_amount": "56.58",
                "subtotal": "2418.00",
                "service_charge": "241.80",
                "tax": "169.26"
            },
            {
                "id": 4002,
                "gross": "18275.40",
                "paid_at": "09-15",
                "total_price": "18275.40",
                "order_ids": [
                    5481
                ],
                "guest_amount": 2,
                "dishes_count": 3,
                "discount_amount": "0.00",
                "subtotal": 15620.00,
                "service_charge": "1562.00",
                "tax": "1093.40"
            },
            {
                "id": 4017,
                "gross": "7799.22",
                "paid_at": "09-27",
                "total_price": "7799.22",
                "order_ids": [
                    5490
                ],
                "guest_amount": 2,
                "dishes_count": 1,
                "discount_amount": "0.00",
                "subtotal": "6666.00",
                "service_charge": "666.60",
                "tax": "466.62"
            }
        ];
        const style = {
            width: '100%',
            margin: '200px auto 0',
        };
        return (
            <div className="charts-div" style={style}>
                <AreaChart width={1400} height={500} data={data1}>
                    <XAxis dataKey="paid_at" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Area yAxisId="right" type="monotone" dataKey="discount_amount" stroke="#8884d8" activeDot={{r: 8}} />
                    <Area yAxisId="left" type="monotone" dataKey="subtotal" stroke="#82ca9d" />
                    {/*<Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />*/}
                </AreaChart>
            </div>
        );
    }
}
export default RechartsDemo;