import React, {Component} from 'react'
import {Divider, List} from 'semantic-ui-react';
import Book from './Book';

class BooksList extends Component {
	render() {
		const books = this.props.books;

		let shelfTitle = books[0].shelf.split(/(?=[A-Z])/).join(" ");
		shelfTitle = shelfTitle.charAt(0).toUpperCase() + shelfTitle.slice(1);

		return (
			<div className='books-list'>
				<List.Header className='shelf-title'>{shelfTitle}</List.Header>
				<Divider/>
				<List horizontal={true} animated={true}
					  items={books.map(book => {return {key:book.id, content: (<Book data={book}/>)}})}/>
			</div>)
	}
}

export default BooksList;