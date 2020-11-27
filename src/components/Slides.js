import React from 'react'

function Card(props) {
	return (
		<div style={styles.card}>
			<img style={styles.image} src={props.card_number} alt={props.card_name} />
			<p className="slides-content">{props.text}</p>
		</div>
	)
}

const styles = {
	card: {
		width: `1280px`,
		height: `720px`,
		// backgroundColor: `blue`,
		// border: `2px solid black`,
		boxSizing: `border-box`,
		fontSize: `2.5em`,
		color: `white`,
		position: `relative`
	},
	image: {
		width: `100%`,
		height: `100%`,
	}
}

export default Card

