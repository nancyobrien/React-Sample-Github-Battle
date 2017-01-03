var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			isLoading: true,
			scores: []
		}
	},
	componentDidMount: function () {
		console.log(this.props.location.state.playersInfo)
		githubHelpers.battle(this.props.location.state.playersInfo)
		.then(function(scores) {
			this.setState({
				scores: scores,
				isLoading: false
			})
		}.bind(this));
	},
	
	handleRestartBattle: function() {
		this.context.router.push({
			pathname: '/playerOne'
		})
	},

	render: function() {
		
		return (
			<Results 
			  isLoading={this.state.isLoading}  
			  scores={this.state.scores}
			  playersInfo={this.props.location.state.playersInfo}
			/>
		)
	}
});

module.exports = ResultsContainer;


