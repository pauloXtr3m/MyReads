import React, { Component } from 'react'
import { Item } from 'semantic-ui-react'

class Book extends Component{
	render(){
		const data = this.props.data;

		return (
			<div className='book'>
				<Item>
					<Item.Content>
						<Item.Image className='book-image' size='small' src={data.imageLinks.smallThumbnail}/>
						<Item.Description>{data.title}</Item.Description>
					</Item.Content>
				</Item>
			</div>
		);
	}
}

export default Book;