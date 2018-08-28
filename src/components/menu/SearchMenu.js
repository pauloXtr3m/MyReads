import React, {Component} from 'react';
import {Button, Menu, Grid} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import SearchBooks from './SearchBooks';

class SearchMenu extends Component {
	render() {
		const {books, onUserSearch} = this.props;

		return (
			<Menu className="App-bar">
				<Menu.Item>
					<Grid>
						<Link to='/'><Button className='button-search' icon='arrow left'/></Link>
						<div className="App-title">My reads</div>
					</Grid>
				</Menu.Item>
				<Menu.Item position='right'>
					<SearchBooks books={books} onUserSearch={onUserSearch}/>
				</Menu.Item>
			</Menu>
		);
	}
}

export default SearchMenu;