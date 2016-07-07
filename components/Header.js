var React = require('react');

var Header = React.createClass({
	render(){
		return(
		<div>
			
			<div data-step="4" data-intro="Click on the Logo to re-center the Dot." id="image-center">
				<h1  id="header">Time Dot</h1>
				<img id="logo" src='custom_marker.svg'></img>
			</div>
			<div id="fullscreen-wrapper"></div>
			<span data-step="5" data-intro="Click on the arrow to toggle between views." id="fullscreenTrigger" className ='glyphicon glyphicon-chevron-down' id="fullscreen-toggle"></span>
		</div>
		)
	}
});
module.exports = Header;