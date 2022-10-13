import { ConvertDate } from "./ConvertDate";

export function CustomTooltip({ active, payload }) {
	

	if (active && payload) {
		
		return (
			<div className="bg-gray-100 border rounded border-black p-4 text-left">
				<p className="text-black">Temperature: {payload[0].payload.temp}ºC</p>
				<p className="text-black">
					Date: {<ConvertDate date={payload[0].payload.date} />}
				</p>
			</div>
		);
	}else{	
		return null;
	}
}
