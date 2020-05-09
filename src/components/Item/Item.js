import React from 'react';
import styles from './Item.module.css';
import clasnames from 'classnames';

const Item = ({ value, isDone }) => (
    <span className={
        clasnames({
            [styles.item]: true,
            [styles.done]: isDone,
        })
    }>{value}</span>
);

export default Item;