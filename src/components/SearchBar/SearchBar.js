import React from 'react';
import './SearchBar.css';

const sortByOptions = {
	'Best Match': 'best_match',
	'Highest Rated': 'rating',
	'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
			location: '',
			sortBy: 'best_match'
		};
		
		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	renderSortByOptions() {
		return Object.keys(sortByOptions).map(sortByOption => {
			let sortByOptionsValue = sortByOptions[sortByOption];
			return (
				<li className={this.getSortByClass(sortByOptionsValue)} key="sortByOptionsValue"
					onClick={this.handleSortByChange.bind(this, sortByOptionsValue)}> {sortByOption}</li>);
		});
	}

	getSortByClass(sortByOption) {
		if(this.state.sortBy === sortByOption) {
			return 'active';
		}
		else {
			return '';
		}
	}

	handleSortByChange(sortByOption) {
		this.setState({
			sortBy: sortByOption
		});
	}

	handleTermChange(e){
		this.setState({
			term: e.target.value
		})
	}

	handleLocationChange(e) {
		this.setState({
			location: e.target.value
		})
	}

	handleSearch(e) {
		this.props.searchYelp(this.term, this.location, this.sortBy);
		e.preventDefault();
	}

	render() {
		return (
			<div className="SearchBar">
  				<div className="SearchBar-sort-options">
    				<ul>{this.renderSortByOptions()}</ul>
  				</div>
  				<div className="SearchBar-fields">
    				<input onChange={this.handleTermChange} placeholder="Search Businesses" />
    				<input onChange={this.handleLocationChange} placeholder="Where?" />
  				</div>
 			 <div className="SearchBar-submit">
    				<a onClick={this.handleSearch}>Let's Go</a>
  				</div>
			</div>
			);
	}

}

export default SearchBar;