import React from 'react';
import Item from "../Item/Item";
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

export default ItemList;