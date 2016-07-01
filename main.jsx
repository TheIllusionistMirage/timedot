var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/Header');
var Time = require('./components/Time');
var Toggle = require('./components/Toggle');

var APP = React.createClass({
	render(){
		return(
			<div className="container-fluid">
				<Time></Time>
				<Header></Header>
				<Toggle></Toggle>
			</div>
		)
	}
});
ReactDOM.render(<APP/>,document.getElementById('react-container'));