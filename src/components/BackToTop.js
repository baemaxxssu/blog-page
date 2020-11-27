import React from "react"

import Arrow from '../images/up-arrow.png'

const BackToTop = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
		<h3 style={{ float: `right`}}>
			<span className="btt-btn">
				<button
					className="btn-footer"
					style={{ borderRadius: "0", textAlign: `center` }}
					onClick={scrollTop}
				>
					<img src={Arrow} alt="Arrow" className="img-fluid" style={{ display: `block`, margin: `auto`}} />
					TOP
				</button>
			</span>
		</h3>
  )
}

export default BackToTop