import React, {Component} from 'react'
import {Divider, List} from 'semantic-ui-react';
import Book from './Book';
import * as StringUtils from './utils/StringUtils';

class BooksList extends Component {
	render() {
		const {books, shelves, onChange} = this.props;

		let shelfTitle = StringUtils.toPhraseUpperCase(books[0].shelf);

		return (
			<div className='books-list'>
				<List.Header className='shelf-title'>{shelfTitle}</List.Header>
				<Divider/>
				<List floated='left' horizontal={true} animated={true}
					  items={books.map(book =>
					  {return {key: book.id, content: (<Book onChange={onChange} shelves={shelves} data={book}/>)}})}/>
			</div>)
	}
}

export default BooksList;