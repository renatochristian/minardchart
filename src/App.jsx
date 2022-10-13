import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { SimpleAreaChart } from "./components/SimpleAreaChart";
import { TemperatureChart } from "./components/TemperatureChart";
import { DataTable } from "./components/DataTable";

export function App() {
	const [dataCities, setDataCities] = useState();
	const [dataTemperature, setDataTemperature] = useState();
	const [dataTroops, setDataTroops] = useState();

	async function getCities() {
		await axios("../data/cities.json").then((response) => {
			setDataCities(response.data);
		});
	}
	async function getTemperature() {
		await axios("../data/temps.json").then((response) => {
			setDataTemperature(response.data);
		});
	}
	async function getTroops() {
		await axios.get("../data/troops.json").then((response) => {
			setDataTroops(response.data);
		});
	}

	useEffect(() => {
		getCities();
		getTemperature();
		getTroops();
	}, []);

	return (
		<div className="App py-10">
			{dataCities && dataTemperature && dataTroops ? (
				<>
					<div className="flex flex-col items-center">
						<h1 className="text-black text-4xl">Data Table</h1>
						{Object.entries(dataCities).map((item, key) => {
							return (
								<DataTable
									key={key}
									name={item[0]}
									values={item[1]}
								/>
							);
						})}
						{Object.entries(dataTemperature).map((item, key) => {
							return (
								<DataTable
									key={key}
									name={item[0]}
									values={item[1]}
								/>
							);
						})}
						{Object.entries(dataTroops).map((item, key) => {
							return (
								<DataTable
									key={key}
									name={item[0]}
									values={item[1]}
								/>
							);
						})}
					</div>
					<div className="flex flex-col items-center text-center text-black my-10">
						<span className="capitalize text-3xl py-4">Charts</span>
						<span className="capitalize text-2xl py-4">
							original
						</span>
						<img src="./minard.png" className="w-[1280px]" />
						<span className="capitalize text-2xl py-4">
							Replica
						</span>
						<div className="border-2 rounded-lg">
							<SimpleAreaChart dataCities={Object.values(dataCities)[0]} />
							<TemperatureChart
								dataTemperature={dataTemperature}
							/>
						</div>
					</div>
					<div className="flex flex-col items-center text-center text-black my-10">
						<span className="capitalize text-3xl py-4 ">
							Package Choices
						</span>
						<ul className="w-[500px] flex flex-col text-left gap-4">
							<li>
								<a href="https://reactjs.org/" target="_blank">
									&bull; ReactJs
								</a>
								<span className="pl-5 flex flex-col gap">
									<span>
										-&gt; Javascript library to create user
										interfaces
									</span>
									<span>
										-&gt; Easy to use with components;
									</span>
									<span>-&gt; Code organization</span>
								</span>
							</li>
							<li>
								<a
									href="https://recharts.org/en-US/"
									target="_blank"
								>
									&bull; Recharts
								</a>
								<span className="pl-5 flex flex-col gap">
									<span>
										-&gt; Chart modelling library integrated to react js, 
										with simple animations and usability integrated
									</span>
									<span>
										-&gt; It's integration with react facilitates its use inside the framework;
									</span>
								</span>
							</li>
							<li>
								<a
									href="https://tailwindcss.com/"
									target="_blank"
								>
									&bull; Tailwind CSS
								</a>
								<span className="pl-5 flex flex-col gap">
									<span>
										-&gt; Css framework for user friendly classes, helping with responsive design
									</span>
									<span>
										-&gt; Also integrated to react, eliminate the 
										necessity of too many personalized css
									</span>
								</span>
							</li>
						</ul>
					</div>
				</>
			) : (
				<></>
			)}
		</div>
	);
}
