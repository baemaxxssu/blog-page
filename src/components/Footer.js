import React from 'react'
import BackToTop from './BackToTop'

function Footer() {
	return (
	<div>
		<div className="footer">
			<div className="custom-container gray">
				<h1 className="text-white">BLOG</h1>
				<p className="text-white">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
				<p className="text-white margin-bottom-0">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
				<BackToTop />
			</div>
		<div className="dark-gray">
			<div className="custom-container">
				<h4 className="text-white text-center">Copyright© 2007-2019 Blog Inc.</h4>
			</div>
		</div>
		</div>
	</div>
	)
}

export default Footer