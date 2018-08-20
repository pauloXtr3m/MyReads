import React, {Component} from 'react';
import {Button, Container, Menu} from 'semantic-ui-react'
import './App.css';
import * as BooksAPI from './utils/BooksAPI'
import * as ArrayUtil from './utils/ArrayUtil'

class App extends Component {

    state = {
        books: []
    };

    componentDidMount() {
        const getBooksByShelf = item => {
            return item.shelf;
        };

        BooksAPI.getAll().then(allBooks => {
            const books = ArrayUtil.groupBy(allBooks, getBooksByShelf);
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
                    <Button
                        content='Discover docs'
                        href='https://react.semantic-ui.com'
                        icon='github'
                        labelPosition='left'
                    />
                </Container>
            </div>
        );
    }
}

export default App;