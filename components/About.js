var React = require('react');

var About = React.createClass({
	render(){
		return(
			<div>
			<div id="about">
				<span id="about-toggle">About</span>
			</div>
			<div id="about-content">
				<h1 id="developed" className="text-center">Developed By: <a id="ian" href="https://iancarrasco.github.io">Ian Carrasco</a></h1>
				<a href="https://twitter.com/i_ianc" target="_blank" id="twitter"></a>
				<a href="https://github.com/IanCarrasco" target="_blank" id="github"></a>
			</div>
			</div>

		)
	}
});

module.exports = About;