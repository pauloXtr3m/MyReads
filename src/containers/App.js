import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import * as BooksAPI from '../utils/BooksAPI'
import * as ArrayUtils from '../utils/ArrayUtils'
import Home from './Home';
import Search from './Search';

class App extends Component {

	state = {
		books: []
	};

	onChange = (bookToChange, shelf) => {
		let index = this.state.books.findIndex(book => book.id === bookToChange.id);

		this.setState(state => {
			state.books[index].shelf = shelf;
			return {books: state.books};
		});

		BooksAPI.update(bookToChange, shelf);
	};

	componentDidMount() {
		BooksAPI.getAll().then(books => {
			this.setState({books});
		})
	}

	render() {
		const books = this.state.books;
		const shelves = ['currentlyReading','wantToRead', 'read'];

		const getBooksByShelf = item => {
			return item.shelf;
		};
		const booksByShelf = ArrayUtils.groupBy(books, getBooksByShelf);

		return (
			<div>
				<Route exact path="/" render={() => (
					<Home booksByShelf={booksByShelf} shelves={shelves} onChange={this.onChange}/>
				)}/>

				<Route path="/search" render={() => (
					<Search books={books} shelves={shelves} onChange={this.onChange}/>
				)}/>
			</div>
		);
	}
}

export default App;
