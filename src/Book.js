import React, { Component } from 'react'
import { Item } from 'semantic-ui-react'
import { ContextMenuProvider } from 'react-contexify'
import RightClickMenu from "./RightClickMenu";

class Book extends Component{
	render(){
		const { data, onChange } = this.props;
		const contextMenuId = 'menu_id'+ data.id;

		return (
			<div className='book'>
                <ContextMenuProvider id={contextMenuId} >
                    <Item>
                        <Item.Content>
                            <Item.Image className='book-image' size='small' src={data.imageLinks.smallThumbnail}/>
                            <Item.Description>{data.title}</Item.Description>
                        </Item.Content>
                    </Item>
                </ContextMenuProvider>
				<RightClickMenu id={contextMenuId}/>
			</div>
		);
	}
}

export default Book;