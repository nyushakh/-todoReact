import React from 'react';
import Item from "../Item/Item";
<<<<<<< HEAD
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import styles from './ItemList.module.css'

const ItemList = ({items}) => (

    <List>
        {items.map(item => (<ListItem className={styles.itm} key={item.value} dense button>
                <Checkbox
                    disableRipple
                />
                <ListItemText>
                <Item value={item.value} isDone={item.isDone}/>
                </ListItemText>
                    <IconButton aria-label="Comments">
                        <DeleteIcon/>
                    </IconButton>
            </ListItem>
        ))}
    </List>
);
=======

const ItemList = ({ items }) => (<ul>
    { items.map(item =>
        <li key={ item.value }><Item value={item.value} isDone={item.isDone}/></li>)}
</ul>);
>>>>>>> e0501053a34aad2cb7463dde092cc700dee1c557

export default ItemList;