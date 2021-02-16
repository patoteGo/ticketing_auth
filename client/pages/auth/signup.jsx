import { useState } from "react";
import axios from "axios";

export default () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);

	const onSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post("/api/users/signup", {
				email,
				password,
			});
			console.log(response.data);
		} catch (error) {
			console.log(error.response.data.errors);
			setErrors(error.response.data.errors);
		}
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
				<div className="alert alert-danger">
					<h4>Oops...</h4>
					<ul className="my-0">
						{errors.map(err => (
							<li key={err.message}>{err.message}</li>
						))}
					</ul>
				</div>

				<button className="btn btn-primary">Sign up</button>
			</form>
		</div>
	);
};
