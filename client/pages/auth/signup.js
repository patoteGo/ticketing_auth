import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";

export default () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { doRequest, errors } = useRequest({
		url: "/api/users/signup",
		method: "post",
		body: {
			email,
			password,
		},
		onSuccess: () => Router.push('/')
	});

	const onSubmit = async (event) => {
		event.preventDefault();
		doRequest();
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
				{errors}

				<button className="btn btn-primary">Sign up</button>
			</form>
		</div>
	);
};
