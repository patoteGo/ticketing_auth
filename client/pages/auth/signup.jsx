import { useState } from "react";

export default () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(email, password);
	};
	return (
		<div className="container">
			<form onSubmit={onSubmit}>
				<h1>Sign up</h1>
				<div className="form-group">
					<label htmlFor="email">Email Address</label>
					<input
						type="email"
						onChange={(e) => setEmail(e.target.value)}
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Password</label>
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						className="form-control"
					/>
				</div>
				<button className="btn btn-primary">Sign up</button>
			</form>
		</div>
	);
};
