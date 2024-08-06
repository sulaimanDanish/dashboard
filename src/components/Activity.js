import { Component } from "react";

const data = [65, 59, 80, 81, 56, 55, 40,78,65,35,25,10,55,78,24,32, 56, 55, 40,78,65,35,25,10,55,78,24,32];
const maxValue = Math.max(...data);
const barWidth = 20;
const chartHeight = 200;
const chartWidth = data.length * (barWidth + 5);

export default class Activity extends Component {

    render() {
        return (
            <>
                <div className="">
                    <svg width={chartWidth} height={chartHeight} xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1={chartHeight - 20} x2={chartWidth} y2={chartHeight - 20} stroke="black" />
                        {data.map((value, index) => (
                            <rect
                                key={index}
                                x={index * (barWidth + 10)}
                                y={chartHeight - 20 - (value / maxValue) * (chartHeight - 40)}
                                width={barWidth}
                                height={(value / maxValue) * (chartHeight - 40)}
                                fill="#2ba972"
                            />
                        ))}
                    </svg>
                </div>
            </>
        )
    }
}