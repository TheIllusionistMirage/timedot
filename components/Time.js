var React = require('react');

var Time = React.createClass({
	render(){
		return(
			<div>
				<div id='info' className='row'>
					<h1 className="col-xs-12 text-right pull-right" id="date"></h1>
					<h1 className="col-xs-12 text-center" id="time"></h1>
					<h1 className="col-xs-12 text-center" id="time-zone"></h1>
					<h1 className="col-xs-12 text-center" id="time-offset"></h1>
					<h1 className="col-xs-12 text-center" id="small-town"></h1>
			    </div>
			    <div id="dot-in-water">
				    <h1 className = "col-xs-12 text-center" id="amphibious">THE DOT ISN'T AMPHIBIOUS.</h1>
					<h1 className = "col-xs-12 text-center" id="land">HEAD FOR LAND.</h1>
				</div>
			</div>
		)
	}

});	

module.exports = Time;