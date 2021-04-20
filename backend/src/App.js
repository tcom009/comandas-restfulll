import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";

function App() {
	// const [isError, setIsError] = useState(false);
	// const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState({});
	useEffect(() => {
		async function fetchData() {
			const data = await axios("/api/todos/");
			console.log(...data.data);
			setData(...data.data);
		}
		fetchData();
	}, []);

	return (
		<>
			<Navbar />
			<div className="container">
				<div className="columns">
					<div className="column is-one-third"></div>
					<div className="column is-one-third">
						<LoginForm />
					</div>
					<div className="column is-one-third"></div>
				</div>
				<div className="columns">
					<div className="column">
						<h1>{data.title}</h1>
						<h1>{data.description}</h1>
						<h1>
							¿La tarea ha sido completada?
							{data.completed ? <h2>Si</h2> : <h2>No</h2>}
						</h1>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
