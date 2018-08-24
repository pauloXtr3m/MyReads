import React, {Component} from 'react';
import {ContextMenu, Item, Separator, Submenu} from 'react-contexify'
import 'react-contexify/dist/ReactContexify.min.css';

class RightClickMenu extends Component {

    render() {
        const onClick = ({event, ref, data, dataFromProvider}) => console.log('Hello');
        const id = this.props.id;
        return (
            <ContextMenu id={id}>
                <Item onClick={onClick}>Lorem</Item>
                <Item onClick={onClick}>Ipsum</Item>
                <Separator/>
                <Item disabled>Dolor</Item>
                <Separator/>
                <Submenu label="Foobar">
                    <Item onClick={onClick}>Foo</Item>
                    <Item onClick={onClick}>Bar</Item>
                </Submenu>
            </ContextMenu>
        )
    }
}

export default RightClickMenu;

