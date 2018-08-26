import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom'
import {Container, Menu, Button} from 'semantic-ui-react'
import './App.css';
import * as BooksAPI from './utils/BooksAPI'
import * as ArrayUtils from './utils/ArrayUtils'
import BooksFeed from './BooksFeed';
import BooksList from './BooksList'

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
		const getBooksByShelf = item => {
			return item.shelf;
		};

		const booksByShelf = ArrayUtils.groupBy(this.state.books, getBooksByShelf);

		return (
			<div>
				<Route exact path="/" render={() => (
					<div className="App">
						<Menu className="App-bar">
							<div className="App-title">My reads</div>
							<Menu.Menu position='right'>
								<Menu.Item>
									<Link to='/search'><Button className='button-search' icon='search'/></Link>
								</Menu.Item>
							</Menu.Menu>
						</Menu>
						<Container className='app-container'>
							<BooksFeed  onChange={this.onChange} booksByShelf={booksByShelf}/>
						</Container>
					</div>
				)}/>

				<Route path="/search" render={() => (
					<div className="App">
						<Menu className="App-bar">
								<Menu.Item position='left'>
									<Link to='/'><Button className='button-search' icon='arrow left'/></Link>
								</Menu.Item>
							<Menu.Item position='left'>
								<div className="App-title">My reads</div>
							</Menu.Item>
						</Menu>
						<Container className='app-container'>
							<BooksList onChange={this.onChange} shelves={['currentlyReading', 'read', 'wantToRead']} books={this.state.books}/>
						</Container>
					</div>
				)}/>
			</div>
		);
	}
}

export default App;
