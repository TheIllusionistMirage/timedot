var React = require('react');

var Header = React.createClass({
	render(){
		return(
		<div>
			<h1 id="header">Time Dot</h1>
			<img id="logo" src='custom_marker.svg'></img>
			<div id="image-center"></div>
		</div>
		)
	}
});
module.exports = Header;