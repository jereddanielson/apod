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
import DayPicker from "./DayPicker"
import MonthPicker from "./MonthPicker"
import YearPicker from "./YearPicker"

var DateBox = React.createClass({
	style: {
		display: "block",
		position: "absolute",
		left: "10px",
		top: 0,
		fontFamily: "'Roboto Slab', monospace"
	},
	render() {
		return (
			<div id="datebox" style={this.style} >
				<div id="datebox-day" className="datebox-component" style={{fontSize: "64px", display: "inline-block", textAlign: "right", padding: "10px", lineHeight: "64px"}} >
					<DayPicker curDay={this.props.curDate ? this.props.curDate.date() : ""} daysInCurMonth={this.props.curDate ? this.props.curDate.clone().endOf("month").date() : ""} curDateMoment={this.props.curDate} setNewDate={this.props.setNewDate} />
				</div>
				<div style={{display: "inline-block", marginLeft: "5px"}}>
					<div id="datebox-month" className="datebox-component" style={{fontSize: "18px", padding: "5px"}} >
						<MonthPicker curMonth={this.props.curDate ? this.props.curDate.clone().format("MMMM").toString() : ""} curDateMoment={this.props.curDate} setNewDate={this.props.setNewDate} />
					</div>
					<div id="datebox-year" className="datebox-component" style={{fontSize: "18px", padding: "5px", display: "inline-block"}} >
						<YearPicker curYear={this.props.curDate ? this.props.curDate.year() : ""} curDateMoment={this.props.curDate} setNewDate={this.props.setNewDate} />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = DateBox;