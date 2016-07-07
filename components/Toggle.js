var React = require('react');

var Toggle = React.createClass({
	render(){
		return(
		<div>
			<div id="toggle" data-step="3" data-intro="Switch between 12HR and 24HR time formats.">
			  <label for="dn" id="toggle-label" className='pull-right'>
			  	<input type="checkbox" id="dn"></input>
			  	24HR
			  </label>
			</div>
		</div>
		)
	}
});
module.exports = Toggle;