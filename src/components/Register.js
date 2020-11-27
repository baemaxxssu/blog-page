// import React, { useState } from 'react'
// import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

// import Login from './Login.js'

// const Register = () => {
// 	const [email, setEmail] = useState("")
// 	const [password, setPassword] = useState("")
// 	const [confirmPass, setConfirmPass] = useState("")

// 	function validateForm() {
// 		return email.length > 0 && password.length > 0 && confirmPass.length > 0;
// 	}

// 	function handleSubmit(e) {
// 		e.preventDefault();
// 	}

// 	function onSubmit() {
// 		localStorage.setItem('email', email)
// 		localStorage.setItem('password', password)
// 		localStorage.setItem('confirmPass', confirmPass)
// 	}
	
// 	return (
// 		<div className="register">
// 			<form onSubmit={handleSubmit}>
// 				<label htmlFor="email">Email</label>
// 				<input type="email" id="email" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
// 				<label htmlFor="password">Password</label>
// 				<input type="password" id="password" name="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
// 				<label htmlFor="confirm">Confirm Password</label>
// 				<input type="confirm" id="confirm" name="Confirm" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)}/>
// 				<button type="submit" onClick={onSubmit} disabled={!validateForm()}>Register</button>
// 				<p>Already have an account?{" "} 
// 					<Router>
// 						<Link to="/login">
// 						<strong>LOGIN HERE</strong>
// 						</Link>
// 						<Switch>
// 							<Route exact path="/login">
// 								<Login />
// 							</Route>
// 						</Switch>
// 					</Router>
// 				</p>
// 			</form>
// 		</div>
// 	)
// }

// export default Register