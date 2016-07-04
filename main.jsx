var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/Header');
var Time = require('./components/Time');
var Toggle = require('./components/Toggle');
var Water = require('./components/Water');
var About = require('./components/About');
var APP = React.createClass({
	render(){
		return(
			<div className="container-fluid">
				<Time></Time>
				<Header></Header>
				<Toggle></Toggle>
				<Water></Water>
				<About></About>
			</div>
		)
	}
});
ReactDOM.render(<APP/>,document.getElementById('react-container'));