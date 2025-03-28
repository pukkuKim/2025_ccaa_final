import './App.css';

function App() {
	return (
		<div className="App">
			<h1>2025 CCAA Women's Basketball Championship - Final (March 15, 2025)</h1>
			<h4>St. Mary's Lightning vs. CBC Bearcats <span style={{fontWeight: '900'}}>(Winner)</span></h4>
			<video loop controls style={{width: '50%'}}>
				<source src="https://2025-ccaa-womens-final.s3.ca-central-1.amazonaws.com/basketball_longer.mp4" type="video/mp4" />
			</video>
		</div>
	);
}

export default App;
