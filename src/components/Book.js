import React, {Component} from 'react';
import {List, Item, Button, Divider} from 'semantic-ui-react';
import * as StringUtils from '../utils/StringUtils';

class Book extends Component {
	state = {
		hiddenOptions: true
	};

	onClickOptions = () => {
		this.setState(state => {
			return {hiddenOptions: !state.hiddenOptions}
		});
	};

	onOptionClick = (ev, data) => {
		const book = this.props.data;
		const newShelf = StringUtils.removeSpaces(data.children);
		this.onClickOptions();

		this.props.onChange(book, newShelf);
	};

	render() {
		const data = this.props.data;
		let shelves = this.props.shelves;
		shelves = shelves.filter(shelf => data.shelf !== shelf).map(shelf => StringUtils.toPhraseUpperCase(shelf));

		let menuItems = [];
		menuItems.push(
			{
				key: 'move-to',
				content: (
					<div>
						<div className='shelf-menu-title'>
							Move to
						</div>
						<Divider/>
					</div>
					)
			});

		shelves.forEach((shelf, index) => {
			menuItems.push({
				key: index,
				content: (
					<Button className='change-shelf-menu' onClick={this.onOptionClick}>{shelf}</Button>)
			});
		});

		return (
			<div className='book'>
				<Item>
					<Item.Content>
						<Item.Image rounded className='book-image' size='small' src={data.imageLinks.smallThumbnail}/>
						<Button className='book-edit' circular icon='edit' onClick={this.onClickOptions}/>
						<div className='change-shelf-menu' hidden={this.state.hiddenOptions}
							 onMouseLeave={this.onClickOptions}>
							<List className='change-shelf-menu' items={menuItems}/>
						</div>
						<Item.Header className='book-title'>{data.title}</Item.Header>
                        <Item.Description className='book-authors'>{data.authors.map(author => {return author})}</Item.Description>
					</Item.Content>
				</Item>
			</div>
		);
	}
}

export default Book;