import React, {Component} from 'react';
import {Container, Menu} from 'semantic-ui-react'
import './App.css';
import * as BooksAPI from './utils/BooksAPI'
import * as ArrayUtils from './utils/ArrayUtils'
import BooksFeed from './BooksFeed';

class App extends Component {

    state = {
        books: []
    };

    onChange = (bookChanged) => {
        let index = this.state.books.findIndex(book => book.id === bookChanged.id);

        this.setState(state => {
			state.books[index] = bookChanged;
			return {books: state.books};
		})
    };

    componentDidMount() {

        BooksAPI.getAll().then(books => {
            this.setState({ books });
        })
    }

    render() {
		const getBooksByShelf = item => {
			return item.shelf;
		};

		const booksByShelf = ArrayUtils.groupBy(this.state.books, getBooksByShelf);

        return (
            <div className="App">
                <Menu className="App-bar">
                    <div className="App-title">My reads</div>
                </Menu>
				<Container>
					<BooksFeed onChange={this.onChange} booksByShelf={booksByShelf}/>
				</Container>
            </div>
        );
    }
}

export default App;
