import Header from './components/Header.js'
import Slider from './components/Slider.js'
import News from './components/News.js'
import Footer from './components/Footer.js'

function App() {
	return (
		<div className="App">
			<div className="custom-container" style={{ position: `relative` }}>
				<Header />
				<Slider />
				<News />
			</div>
			<Footer />
		</div>
	);
}

export default App;