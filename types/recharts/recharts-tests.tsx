import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    CartesianGrid, Line, LineChart, PieChart, Pie,
    Sector, XAxis, YAxis, Tooltip, ReferenceLine,
    ReferenceArea, ResponsiveContainer, Label, LabelList, Brush,
    ScatterChart, ZAxis, Legend, Scatter, Bar, BarChart
} from 'recharts';

interface ComponentState {
    activeIndex: number;
}

class Component extends React.Component<{}, ComponentState> {
    constructor(props: any) {
        super(props);
        this.state = {
            activeIndex: 0
        };
    }

    private clickHandler(...args: any[]) {
        console.log(`Handling a click on a chart: ${JSON.stringify(args)}`);
    }

    render() {
        const data = [
            { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
            { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
            { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
            { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
            { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
            { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
            { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
        ];

        const data2 = [
            { name: 'Group A', value: 400 },
            { name: 'Group B', value: 300 },
            { name: 'Group C', value: 300 },
            { name: 'Group D', value: 200 }
        ];

        const renderActiveShape = (props: any) => {
            const RADIAN = Math.PI / 180;
            const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
                fill, payload, percent, value } = props;
            const sin = Math.sin(-RADIAN * midAngle);
            const cos = Math.cos(-RADIAN * midAngle);
            const sx = cx + (outerRadius + 10) * cos;
            const sy = cy + (outerRadius + 10) * sin;
            const mx = cx + (outerRadius + 30) * cos;
            const my = cy + (outerRadius + 30) * sin;
            const ex = mx + (cos >= 0 ? 1 : -1) * 22;
            const ey = my;
            const textAnchor = cos >= 0 ? 'start' : 'end';

            return (
                <g>
                    <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
                    <Sector
                        cx={cx}
                        cy={cy}
                        innerRadius={innerRadius}
                        outerRadius={outerRadius}
                        startAngle={startAngle}
                        endAngle={endAngle}
                        fill={fill}
                    />
                    <Sector
                        cx={cx}
                        cy={cy}
                        startAngle={startAngle}
                        endAngle={endAngle}
                        innerRadius={outerRadius + 6}
                        outerRadius={outerRadius + 10}
                        fill={fill}
                    />
                    <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                    <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                    <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
                    <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                        {`(Rate ${(percent * 100).toFixed(2)}%)`}
                    </text>
                </g>
            );
        };
        return (
            <div style={{width: "100%", height: "100%"}}>
                <ResponsiveContainer>
                    <LineChart width={500} height={300} data={data}>
                        <XAxis dataKey="name">
                            <Label>X axis - name</Label>
                        </XAxis>
                        <YAxis>
                            <Label>Y axis</Label>
                        </YAxis>
                        <CartesianGrid vertical={true} horizontal={false} verticalFill={["#fafafa", "#c8c8c8"]}  />
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" onClick={ this.clickHandler } />
                        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                        <Tooltip />
                        <Brush dataKey="name" />
                        <ReferenceLine />
                        <ReferenceArea
                            stroke="red"
                            fill="red"
                            y2={1}
                            strokeOpacity={0.2}
                            fillOpacity={0.1}
                        />
                    </LineChart>
                </ResponsiveContainer>
                <ResponsiveContainer>
                    <LineChart width={500} height={300} data={data}>
                        <XAxis dataKey="name">
                            <Label>X axis - name</Label>
                        </XAxis>
                        <YAxis>
                            <Label>Y axis</Label>
                        </YAxis>
                        <CartesianGrid vertical={false} horizontal={true} horizontalFill={["#fafafa", "#c8c8c8"]}  />
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" onClick={ this.clickHandler } />
                        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                        <Tooltip />
                        <Brush dataKey="name" />
                        <ReferenceLine />
                        <ReferenceArea
                            stroke="red"
                            fill="red"
                            y2={1}
                            strokeOpacity={0.2}
                            fillOpacity={0.1}
                        />
                    </LineChart>
                </ResponsiveContainer>
                <ResponsiveContainer>
                    <LineChart width={500} height={300} data={data}>
                        <XAxis dataKey="name">
                            <Label>X axis - name</Label>
                        </XAxis>
                        <YAxis>
                            <Label>Y axis</Label>
                        </YAxis>
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5"  />
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" onClick={ this.clickHandler } />
                        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                        <Tooltip />
                        <Brush dataKey="name" />
                        <ReferenceLine />
                        <ReferenceArea
                            stroke="red"
                            fill="red"
                            y2={1}
                            strokeOpacity={0.2}
                            fillOpacity={0.1}
                        />
                    </LineChart>
                </ResponsiveContainer>
                <ResponsiveContainer>
                    <PieChart width={800} height={400}>
                        <Pie
                            label={(props: {name: string}) => <Label>{name}</Label>}
                            dataKey="value"
                            activeIndex={this.state.activeIndex}
                            activeShape={renderActiveShape}
                            data={data}
                            cx={300}
                            cy={200}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                        >
                            <Label>A Pie Chart</Label>
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <ResponsiveContainer>
                    <ScatterChart width={500} height={300}>
                        <XAxis type="number" dataKey="uv" name="stature" unit="cm" />
                        <YAxis dataKey="pv" name="weight" unit="kg" />
                        <ZAxis dataKey="amt" range={[64, 144]} name="score" unit="km" />
                        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                        <Legend />
                        <Scatter name="A school" data={data} fill="#8884d8" />
                    </ScatterChart>
                </ResponsiveContainer>
                <ResponsiveContainer>
                    <BarChart
                        width={730}
                        height={250}
                        data={data}
                        margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name">
                        <Label value="Pages of my website" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis label='pv of page' />
                    <Bar dataKey="pv" fill="#8884d8">
                        <LabelList dataKey="name" position="insideTop" angle={45}  />
                    </Bar>
                    <Bar dataKey="uv" fill="#82ca9d">
                        <LabelList dataKey="uv" position="top" />
                    </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

ReactDOM.render(<Component/>, document.getElementById('app'));
