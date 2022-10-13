import { ConvertDate } from "./ConvertDate";

export function DataTable(props) {
	
	return (
		<div className="flex flex-col border rounded max-w-3xl w-full my-4 bg-white">
			<div className="grid text-center text-black py-3 pl-3">
				<span className="capitalize text-3xl">{props.name}</span>
			</div>
			<div
				className="flex flex-row justify-center text-center border text-black py-3 pl-3"
			>
				{Object.keys(props.values[0]).map((item, key) => {
					return (
						<div className="w-full ">
							<span key={key} className="text-black capitalize">
								{item}
							</span>
						</div>
					);
				})}
			</div>

			{Object.values(props.values).map((item, key) => {
				if (props.name === "cities") {
					return (
						<div
							key={key}
							className={`${
								key & 1 ? "bg-white" : "bg-gray-100"
							}  hover:bg-gray-200 flex flex-row justify-center text-center text-black py-1 pl-3 border-t`}
						>
							<div className="w-full">
								<span key={key + "/" + item.lat}>
									{item.lat}
								</span>
							</div>
							<div className="w-full">
								<span key={key + "/" + item.long}>
									{item.long}
								</span>
							</div>
							<div className="w-full">
								<span
									key={key + "/" + item.city}
									className="capitalize"
								>
									{item.city}
								</span>
							</div>
						</div>
					);
				} else if (props.name === "temperature") {
					return (
						<div
							key={key}
							className={`${
								key & 1 ? "bg-white" : "bg-gray-100"
							}  hover:bg-gray-200 flex flex-row justify-center text-black py-1 pl-3 border-t`}
						>
							<div className="w-full ">
								<span key={key + "_" + item.long}>
									{item.long}
								</span>
							</div>
							<div className="w-full ">
								<span key={key + "_" + item.temp}>
									{item.temp}ºC
								</span>
							</div>
							<div className="w-full ">
								<span key={key + "_" + item.month}>
									{item.month}
								</span>
							</div>
							<div className="w-full ">
								<span key={key + "_" + item.day}>
									{item.day}
								</span>
							</div>
							<div className="w-full ">
								<span key={key + "_" + item.date}>
									{<ConvertDate date={item.date} />}
								</span>
							</div>
						</div>
					);
				} else if (props.name === "soldiers") {
					return (
						<div
							key={key}
							className={`${
								key & 1 ? "bg-white" : "bg-gray-100"
							} hover:bg-gray-200 flex flex-row justify-center text-center text-black py-1 pl-3 border-t`}
						>
							<div className="w-full ">
								<span key={key + "-" + item.lat}>
									{item.lat}
								</span>
							</div>
							<div className="w-full ">
								<span key={key + "-" + item.long}>
									{item.long}
								</span>
							</div>
							<div className="w-full ">
								<span key={key + "-" + item.survivors}>
									{item.survivors}
								</span>
							</div>
							<div className="w-full ">
								<span key={key + "-" + item.direction}>
									{item.direction === "A"
										? "Advance"
										: "Retreat"}
								</span>
							</div>
							<div className="w-full ">
								<span key={key + "-" + item.group}>
									{item.group}
								</span>
							</div>
						</div>
					);
				}
			})}
		</div>
	);
}
