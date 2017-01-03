var React = require('react');

function Main(props) {
	return (
		<div className='main-container'> 
			{props.children}
		</div>
	)
}

module.exports = Main;
