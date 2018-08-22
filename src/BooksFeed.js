import React, {Component} from 'react'
import { List} from 'semantic-ui-react'
import BooksList from './BooksList'

class BooksFeed extends Component {
	render() {
		const booksByShelf = this.props.booksByShelf;
		let booksLists = [];
		booksByShelf.forEach( entry => booksLists.push(entry));

		return (
			<div className='books-feed'>
				<List items={booksLists.map((list, index) => {return {key:index, content: (<BooksList books={list}/>)}})}/>
			</div>
		);
	}
}

export default BooksFeed;