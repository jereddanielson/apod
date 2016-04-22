/*
	Copyright 2016, Jered Danielson
	jered@uw.edu

	This file is part of APOD 2.0.

	APOD 2.0 is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	APOD 2.0 is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with APOD 2.0.  If not, see <http://www.gnu.org/licenses/>.
*/

import React from "react"
import DateBox from "./DateBox"

var Moment = require("moment");

var SideBar = React.createClass({
	style: {
		color: "#eee",
		position: "absolute",
		width: "100%",
		left: "0",
		top: "0"
	},
	titleStyle: {
		fontFamily: "Open Sans, sans-serif",
		padding: 0,
		margin: 0,
		lineHeight: "60px",
		textAlign: "center",
		width: "50%",
		maxWidth: "600px",
		height: "60px",
		overflow: "hidden",
		margin: "0 auto",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap"
	},
	pStyle: {
		color: "#aaa",
		fontFamily: "Roboto Slab, serif",
		fontWeight: 300
	},
	render() {
		var thisMoment = this.props.data.date ? Moment(this.props.data.date) : undefined;
		return (
			<div id="sidebar" style={this.style}>
				<DateBox curDate={thisMoment} />
				<div style={this.titleStyle}>{this.props.data.title}</div>
			</div>
		);
	}
});

module.exports = SideBar;