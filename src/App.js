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

    componentDidMount() {
        const getBooksByShelf = item => {
            return item.shelf;
        };

        BooksAPI.getAll().then(allBooks => {
            const books = ArrayUtils.groupBy(allBooks, getBooksByShelf);
            this.setState({ books });
        })
    }

    render() {
        return (
            <div className="App">
                <Menu className="App-bar">
                    <div className="App-title">My reads</div>
                </Menu>
				<Container>
					<BooksFeed booksByShelf={this.state.books}/>
				</Container>
            </div>
        );
    }
}

export default App;
