import React, { useEffect, useState } from "react";
import {
	XAxis,
	YAxis,
	Tooltip,
	ScatterChart,
	Scatter,
	LabelList,
	CartesianGrid,
} from "recharts";

const group1A = [
	{
		long: "24.0",
		lat: "54.9",
		survivors: "340000",
		direction: "A",
		group: "1",
	},
	{
		long: "24.5",
		lat: "55.0",
		survivors: "340000",
		direction: "A",
		group: "1",
	},
	{
		long: "25.5",
		lat: "54.5",
		survivors: "340000",
		direction: "A",
		group: "1",
	},
	{
		long: "26.0",
		lat: "54.7",
		survivors: "320000",
		direction: "A",
		group: "1",
	},
	{
		long: "27.0",
		lat: "54.8",
		survivors: "300000",
		direction: "A",
		group: "1",
	},
	{
		long: "28.0",
		lat: "54.9",
		survivors: "280000",
		direction: "A",
		group: "1",
	},
	{
		long: "28.5",
		lat: "55.0",
		survivors: "240000",
		direction: "A",
		group: "1",
	},
	{
		long: "29.0",
		lat: "55.1",
		survivors: "210000",
		direction: "A",
		group: "1",
	},
	{
		long: "30.0",
		lat: "55.2",
		survivors: "180000",
		direction: "A",
		group: "1",
	},
	{
		long: "30.3",
		lat: "55.3",
		survivors: "175000",
		direction: "A",
		group: "1",
	},
	{
		long: "32.0",
		lat: "54.8",
		survivors: "145000",
		direction: "A",
		group: "1",
	},
	{
		long: "33.2",
		lat: "54.9",
		survivors: "140000",
		direction: "A",
		group: "1",
	},
	{
		long: "34.4",
		lat: "55.5",
		survivors: "127100",
		direction: "A",
		group: "1",
	},
	{
		long: "35.5",
		lat: "55.4",
		survivors: "100000",
		direction: "A",
		group: "1",
	},
	{
		long: "36.0",
		lat: "55.5",
		survivors: "100000",
		direction: "A",
		group: "1",
	},
	{
		long: "37.6",
		lat: "55.8",
		survivors: "100000",
		direction: "A",
		group: "1",
	},
];

const group1R = [
	{
		long: "37.7",
		lat: "55.7",
		survivors: "100000",
		direction: "R",
		group: "1",
	},
	{
		long: "37.5",
		lat: "55.7",
		survivors: "98000",
		direction: "R",
		group: "1",
	},
	{
		long: "37.0",
		lat: "55.0",
		survivors: "97000",
		direction: "R",
		group: "1",
	},
	{
		long: "36.8",
		lat: "55.0",
		survivors: "96000",
		direction: "R",
		group: "1",
	},
	{
		long: "35.4",
		lat: "55.3",
		survivors: "87000",
		direction: "R",
		group: "1",
	},
	{
		long: "34.3",
		lat: "55.2",
		survivors: "55000",
		direction: "R",
		group: "1",
	},
	{
		long: "33.3",
		lat: "54.8",
		survivors: "37000",
		direction: "R",
		group: "1",
	},
	{
		long: "32.0",
		lat: "54.6",
		survivors: "24000",
		direction: "R",
		group: "1",
	},
	{
		long: "30.4",
		lat: "54.4",
		survivors: "20000",
		direction: "R",
		group: "1",
	},
	{
		long: "29.2",
		lat: "54.3",
		survivors: "20000",
		direction: "R",
		group: "1",
	},
	{
		long: "28.5",
		lat: "54.2",
		survivors: "20000",
		direction: "R",
		group: "1",
	},
	{
		long: "28.3",
		lat: "54.3",
		survivors: "20000",
		direction: "R",
		group: "1",
	},
	{
		long: "27.5",
		lat: "54.5",
		survivors: "20000",
		direction: "R",
		group: "1",
	},
	{
		long: "26.8",
		lat: "54.3",
		survivors: "12000",
		direction: "R",
		group: "1",
	},
	{
		long: "26.4",
		lat: "54.4",
		survivors: "14000",
		direction: "R",
		group: "1",
	},
	{
		long: "25.0",
		lat: "54.4",
		survivors: "8000",
		direction: "R",
		group: "1",
	},
	{
		long: "24.4",
		lat: "54.4",
		survivors: "4000",
		direction: "R",
		group: "1",
	},
	{
		long: "24.2",
		lat: "54.4",
		survivors: "4000",
		direction: "R",
		group: "1",
	},
	{
		long: "24.1",
		lat: "54.4",
		survivors: "4000",
		direction: "R",
		group: "1",
	},
];

const group2A = [
	{
		long: "24.0",
		lat: "55.1",
		survivors: "60000",
		direction: "A",
		group: "2",
	},
	{
		long: "24.5",
		lat: "55.2",
		survivors: "60000",
		direction: "A",
		group: "2",
	},
	{
		long: "25.5",
		lat: "54.7",
		survivors: "60000",
		direction: "A",
		group: "2",
	},
	{
		long: "26.6",
		lat: "55.7",
		survivors: "40000",
		direction: "A",
		group: "2",
	},
	{
		long: "27.4",
		lat: "55.6",
		survivors: "33000",
		direction: "A",
		group: "2",
	},
	{
		long: "28.7",
		lat: "55.5",
		survivors: "33000",
		direction: "A",
		group: "2",
	},
];

const group2R = [
	{
		long: "28.7",
		lat: "55.5",
		survivors: "33000",
		direction: "R",
		group: "2",
	},
	{
		long: "29.2",
		lat: "54.2",
		survivors: "30000",
		direction: "R",
		group: "2",
	},
	{
		long: "28.5",
		lat: "54.1",
		survivors: "30000",
		direction: "R",
		group: "2",
	},
	{
		long: "28.3",
		lat: "54.2",
		survivors: "28000",
		direction: "R",
		group: "2",
	},
];

const group3A = [
	{
		long: "24.0",
		lat: "55.2",
		survivors: "22000",
		direction: "A",
		group: "3",
	},
	{
		long: "24.5",
		lat: "55.3",
		survivors: "22000",
		direction: "A",
		group: "3",
	},
	{
		long: "24.6",
		lat: "55.8",
		survivors: "6000",
		direction: "A",
		group: "3",
	},
];
const group3R = [
	{
		long: "24.6",
		lat: "55.8",
		survivors: "6000",
		direction: "R",
		group: "3",
	},
	{
		long: "24.2",
		lat: "54.4",
		survivors: "6000",
		direction: "R",
		group: "3",
	},
	{
		long: "24.1",
		lat: "54.4",
		survivors: "6000",
		direction: "R",
		group: "3",
	},
];

export function SimpleAreaChart(props) {
	const [dataCities, setDataCities] = useState();

	useEffect(() => {
		setDataCities(Object.values(props.dataCities));
	}, []);

	return (
		<div className="mt-4">
			<ScatterChart
				width={1800}
				height={500}
				margin={{
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
				}}
			>
				<XAxis
					hide="true"
					type="number"
					dataKey="long"
					name="longitude"
					domain={[23.5, 38]}
				/>
				<YAxis
					hide="true"
					type="number"
					dataKey="lat"
					name="latitude"
					domain={[53.5, 56]}
					orientation="right"
				/>
				<CartesianGrid />
				<Tooltip cursor={{ strokeDasharray: "30 30" }} />
				<Scatter
					name="group3R"
					data={group3R}
					fill="red"
					line={{ stroke: "#bbbbbb", strokeWidth: 6 }}
				>
					{/* <LabelList dataKey="survivors" position="bottom" angle="40" offset={20}/> */}
				</Scatter>
				<Scatter
					name="group2R"
					data={group2R}
					fill="red"
					line={{ stroke: "#bbbbbb", strokeWidth: 10 }}
				>
					{/* <LabelList dataKey="survivors" position="bottom" angle="40" offset={30} /> */}
				</Scatter>
				<Scatter
					name="group1R"
					data={group1R}
					fill="red"
					line={{ stroke: "#bbbbbb", strokeWidth: 20 }}
				>
					<LabelList
						dataKey="survivors"
						position="insideTopLeft"
						angle="40"
						offset={10}
					/>
				</Scatter>
				<Scatter
					name="group3A"
					data={group3A}
					fill="black"
					line={{ stroke: "#e6cdab", strokeWidth: 10 }}
				>
					{/* <LabelList dataKey="survivors" position="top" angle="40" offset={30}/> */}
				</Scatter>
				<Scatter
					name="group2A"
					data={group2A}
					fill="black"
					line={{ stroke: "#e6cdab", strokeWidth: 12 }}
				>
					{/* <LabelList dataKey="survivors" position="top" angle="40" offset={30} /> */}
				</Scatter>
				<Scatter
					name="group1A"
					data={group1A}
					fill="transparent"
					line={{ stroke: "#e6cdab", strokeWidth: 40 }}
				>
					<LabelList
						dataKey="survivors"
						angle="40"
						offset={0}
						position="insideBottom"
					/>
				</Scatter>
				<Scatter name="city" data={dataCities} fill="black">
					<LabelList
						dataKey="city"
						position="insideBottom"
						offset="15"
						angle="0"
					/>
				</Scatter>
			</ScatterChart>
		</div>
	);
}
