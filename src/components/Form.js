import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default function Login() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	function onSubmit(e) {
		localStorage.setItem('email', email)
		localStorage.setItem('password', password)

		
	}
	
	return (
		<Router>
			<div className="login">
				<form onSubmit={handleSubmit}>
					<h1>LOGIN</h1>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" name="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
					</div>
					<div className="form-group">
						<button type="submit" onClick={onSubmit} disabled={!validateForm()}>Login</button>
					</div>
					<p className="form-text">No account?{" "} 
						<Link to="/register">
						<strong>REGISTER HERE</strong>
						</Link>
						<Switch>
							<Route exact path="/register">
								<Register />
							</Route>
						</Switch>
					</p>
				</form>
			</div>
		</Router>
	)
}

const Register = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPass, setConfirmPass] = useState("")

	function validateForm() {
		return email.length > 0 && password.length > 0 && confirmPass.length > 0;
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	function onSubmit() {
		localStorage.setItem('email', email)
		localStorage.setItem('password', password)
		localStorage.setItem('confirmPass', confirmPass)
	}
	
	return (
		<Router>
			<div className="register">
				<h1>REGISTER</h1>
				<form onSubmit={handleSubmit}>
					<label htmlFor="email">Email</label>
					<input type="email" id="email" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
					<label htmlFor="password">Password</label>
					<input type="password" id="password" name="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
					<label htmlFor="confirm">Confirm Password</label>
					<input type="confirm" id="confirm" name="Confirm" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)}/>
					<button type="submit" onClick={onSubmit} disabled={!validateForm()}>Register</button>
					<p className="form-text">Already have an account?{" "} 		
						<Link to="/login">
							<strong>LOGIN HERE</strong>
						</Link>
						<Switch>
							<Route exact path="/login">
								<Login />
							</Route>
						</Switch>
					</p>
				</form>
			</div>
		</Router>
	)
}