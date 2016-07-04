var React = require('react');

var About = React.createClass({
	render(){
		return(
			<div id="about">
				<a href="https://twitter.com/i_ianc" target="_blank" id="twitter"></a>
				<a href="https://github.com/IanCarrasco" target="_blank" id="github"></a>
				<span id="madeby">Made by:  <a id="username" target="_blank" href='https://iancarrasco.github.io'>Ian Carrasco</a></span>
				<span id="problems"></span>
			</div>

		)
	}
});

module.exports = About;