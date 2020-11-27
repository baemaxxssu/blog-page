import React, { Component } from 'react'

import Carousel from './Slides.js'

import Slide01 from '../images/slide-01.jpg'
import Slide02 from '../images/slide-02.jpg'
import Slide03 from '../images/slide-03.jpg'

import Previous from '../images/left-chevron.png'
import Next from '../images/right-chevron.png'

class Slider extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentCard: 0
		}
	}

	componentDidMount() {
		let first_card_clone = this.slide_container.children[0].cloneNode(true);
		let last_card_clone = this.slide_container.children[this.slide_container.children.length - 1].cloneNode(true);

		this.slide_container.insertBefore(last_card_clone, this.slide_container.children[0])
		this.slide_container.append(first_card_clone)

		this.slide_container.style.transitionDuration = "0.0s";
		this.slide_container.style.transform = `translate(-${1280}px)`;
	}

	handleNext = () => {
		if (this.state.currentCard < this.slide_container.children.length - 1) {
			let newCurrentCard = this.state.currentCard + 1;

			this.setState({currentCard: newCurrentCard}, () => {
				this.slide_container.style.transitionDuration = "0.5s";
				this.slide_container.style.transform = `translate(-${1280 * this.state.currentCard}px)`;

				if (this.state.currentCard === this.slide_container.children.length - 1) {
					setTimeout(() => {
						this.slide_container.style.transitionDuration = "0.0s";
						this.slide_container.style.transform = `translate(-${1280}px)`;

						this.setState({currentCard: 1})
					}, 502)
					

				}
			})
			} else {
				return;
		}
	}

	handlePrevious = () => {
		if (this.state.currentCard > 0) {
			let newCurrentCard = this.state.currentCard - 1;

			this.setState({currentCard: newCurrentCard}, () => {
				this.slide_container.style.transitionDuration = "0.5s";
				this.slide_container.style.transform = `translate(-${1280 * this.state.currentCard}px)`;

				if (this.state.currentCard === 0) {
					setTimeout(() => {
						this.slide_container.style.transitionDuration = "0.0s";
						this.slide_container.style.transform = `translate(-${1280 * (this.slide_container.children.length -2)}px)`;

						this.setState({ currentCard: this.slide_container.children.length - 2 })
					}, 502)
					

				}
			})
			} else {
				return;
		}
	}
	
	render() { 
		return (
			<div className="custom-container">
				<div className="view-port" style={styles.view_port}>
					<div ref={ref_id => this.slide_container = ref_id} className="card-container" style={styles.slide_container}>
						<Carousel card_number={Slide01} card_name="Slide 01" text="TEST 01" />
						<Carousel card_number={Slide02} card_name="Slide 02" text="TEST 02" />
						<Carousel card_number={Slide03} card_name="Slide 03" text="TEST 03" />
					</div>
					<div className="slide-nav">
						<button className="slide-previous"onClick={this.handlePrevious}>
							<img src={Previous} alt="Previous" />
						</button>
						<button className="slide-next"onClick={this.handleNext}>
							<img src={Next} alt="Next" />
						</button>
					</div>
				</div>

			</div>			
		)
	}
}

const styles = {
	view_port : {
		position: `relative`,
		width: `1200px`,
		height: `720px`,
		overflow: `hidden`,
		margin: `auto`,
	},
	slide_container: {
		display: `flex`,
		flexDirection: `row`,
		width: `fit-content`
	}
}

export default Slider