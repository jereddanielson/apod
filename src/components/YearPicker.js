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

var Moment = require("moment");

var YearPicker = React.createClass({
	getInitialState() {
		return {isOpen: false};
	},
	handleClick(e) {
		this.setState({isOpen: true});
	},
	handlePicked(e){
		this.setState({isOpen: false});
		this.props.setNewDate(this.props.curDateMoment.clone().year(e));
	},
	render() {
		var datesArray = [1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016];
		var self = this;
		return (
			<div className="year-picker">
				<div onClick={this.handleClick}>{this.props.curYear}</div>
				{(() => {if(this.state.isOpen){
					return (<div className="year-picker-inner">
						{datesArray.map(function(e){
							return <div className={"year-picker-year picker-element " + (e === self.props.curYear ? "selected-picker-element" : "")} onClick={function(){self.handlePicked(e)}} key={"year-picker-" + e}>{e}</div>
						})}
					</div>)
				} else {
					return undefined;
				}})()}
			</div>
		);
	}
});

module.exports = YearPicker;