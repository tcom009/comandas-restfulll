import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
export default function LoginForm() {
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [isLogedIn, setIsLogedIn] = useState(false);

	const handleLogin = async () => {
		await axios({
			method: "post",
			url: "/token-auth/",
			data: { username: username, password: password },
		}).then(
			(response) => {
				console.log(response);
				setIsLogedIn(true);
				//setUsername(response.username);
			},
			(error) => {
				console.log(error);
			}
		);
	};
	return (
		<div className="container">
			<div className="Box">
				<div className="column has-text-centered has-text-weight-bold">
					Bienvenido
				</div>
				<div className="field">
					<label className="label">Username</label>
					<div className="control has-icons-left has-icons-right">
						<input
							className="input "
							type="text"
							placeholder="Username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<span className="icon is-small is-left">
							<FontAwesomeIcon icon={faUser} />
						</span>
						<span className="icon is-small is-right">
							<i className="fas fa-check"></i>
						</span>
					</div>
				</div>
				<div class="field">
					<label class="label">Password</label>
					<div class="control has-icons-left has-icons-right">
						<input
							className="input"
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<span class="icon is-small is-left">
							<FontAwesomeIcon icon={faLock} />
						</span>
						<span class="icon is-small is-right">
							<i class="fas fa-exclamation-triangle"></i>
						</span>
					</div>
				</div>
				<div className="column">
					<button
						className="button is-fullwidth is-primary"
						onClick={handleLogin}
					>
						Log In!
					</button>
				</div>{" "}
			</div>
			{isLogedIn ? (
				<h1>Bienvenido {username}</h1>
			) : (
				<h1>No has iniciado sesion </h1>
			)}
		</div>
	);
}
