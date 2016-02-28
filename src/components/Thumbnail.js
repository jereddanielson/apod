import React from 'react';

var Thumbnail = React.createClass({
	render() {
		return (
			<div style={{width: "60px", height: "60px", position: "absolute", left: "50%", transform: "translateX("+(this.props.position*60-30)+"px)"}}>
				<img style={{top: "30px", left: "30px", transform: "translate(-50%, -50%)", display: "block", position: "absolute"}} src={"http://apod.nasa.gov/apod/calendar/S_" + this.props.dateString.replace("-", "").replace("-", "").substring(2, 10) + ".jpg"} />
			</div>
		);
	}
});

module.exports = Thumbnail;