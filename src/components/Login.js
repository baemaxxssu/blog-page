// import React, { useState } from 'react'
// import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

// import Register from './Register.js'
// import LogIn from './Login.js'

// const Login = () => {
// 	const [email, setEmail] = useState("")
// 	const [password, setPassword] = useState("")

// 	function validateForm() {
// 		return email.length > 0 && password.length > 0;
// 	}

// 	function handleSubmit(e) {
// 		e.preventDefault();
// 	}

// 	function onSubmit(e) {
// 		localStorage.setItem('email', email)
// 		localStorage.setItem('password', password)
// 	}
	
// 	return (
// 		<div className="login">
// 			<form onSubmit={handleSubmit}>
// 				<div className="form-group">
// 					<label htmlFor="email">Email</label>
// 					<input type="email" id="email" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
// 				</div>
// 				<div className="form-group">
// 					<label htmlFor="password">Password</label>
// 					<input type="password" id="password" name="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
// 				</div>
// 				<div className="form-group">
// 					<button type="submit" onClick={onSubmit} disabled={!validateForm()}>Login</button>
// 				</div>
// 				<p>No account?{" "} 
// 					<Router>
// 						<Link to="/register">
// 						<strong>REGISTER HERE</strong>
// 						</Link>
// 						<Switch>
// 							<Route exact path="/register">
// 								<Register />
// 							</Route>
// 						</Switch>
// 					</Router>
// 				</p>
// 			</form>
// 		</div>
// 	)
// }

// export default Login