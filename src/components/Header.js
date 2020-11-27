import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Form from './Form.js'

function Header() {
	const location = window.location.pathname

	return (
		<div className="custom-container">
			<div>
				<div className="custom-row custom-align-items-center">
					<div className="custom-column-6">
						<h2>BLOG</h2>
					</div>
					<div className="custom-column-6 custom-float-right">	
						<Router>		
							{location === '/login' ? (<Link to="/"><h2>CLOSE</h2></Link>) : (<Link to="/login"><h2>LOGIN</h2></Link>)}
							<Switch>
								<Route path="/login">
									<Form />
								</Route>
							</Switch>
						</Router>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header