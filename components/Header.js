var React = require('react');

var Header = React.createClass({
	render(){
		return(
		<div>
			<h1 data-step="1" data-intro="Welcome to Time Dot!" id="header">Time Dot</h1>
			<img data-step="3" data-intro="Click on the Logo to re-center the Dot." id="logo" src='custom_marker.svg'></img>
			<div id="image-center"></div>
			<div id="fullscreen-wrapper"></div>
			<span data-step="4" data-intro="Click on the arrow to toggle between views." id="fullscreenTrigger" className ='glyphicon glyphicon-chevron-down' id="fullscreen-toggle"></span>
		</div>
		)
	}
});
module.exports = Header;