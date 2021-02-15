import { useState } from "react";
import axios from 'axios';

export default () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
        const response = await axios.post('/api/users/signup', {
            email, password
        });
		console.log(response.data);
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
