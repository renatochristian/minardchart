import React, { useEffect, useState } from "react";
import { Line, XAxis, YAxis, Tooltip, LineChart, LabelList } from "recharts";
import { CustomTooltip } from "./CustomTooltip";

export function TemperatureChart(props) {
	const [dataTemperature, setDataTemperature] = useState();

	useEffect(() => {
		setDataTemperature(Object.values(props.dataTemperature)[0]);
	}, []);

	return (
		<div className="marginTemperatureChart">
			{dataTemperature ? (
				<LineChart
					width={1800}
					height={200}
					position="absolute"
					data={Object.values(dataTemperature)}
					margin={{
						top: 5,
						right: 0,
						bottom: 50,
						left: 0,
					}}
				>
					<XAxis
						hide="true"
						type="number"
						dataKey="long"
						name="longitude"
						orientation="top"
						domain={[23.5, 38]}
					/>
					<YAxis
						hide="true"
						type="number"
						dataKey="temp"
						name="temperature"
						orientation="right"
						domain={[-37, 0]}
					/>
					<Tooltip 
						cursor={{ strokeDasharray: "3 3" }}
						content={ <CustomTooltip payload={Object.values(dataTemperature)} /> }
					 />
					<Line
						type="linear"
						dataKey="temp"
						stroke="black"
						strokeWidth={2}
					>
						<LabelList
							dataKey="date"
							position="insideTop"
							offset="15"
							angle="-5"
						/>
					</Line>
				</LineChart>
			) : (
				<h1 className="text-black">teste</h1>
			)}
		</div>
	);
}
