var React = require('react');

var Toggle = React.createClass({
	render(){
		return(
		<div>
			<div id="toggle">
			  <label for="dn" id="toggle-label" className='pull-right'>
			  	<input type="checkbox" id="dn"></input>
			  	24HR
			  </label>
			</div>
			<button id="center-map"></button>
		</div>
		)
	}
});
module.exports = Toggle;