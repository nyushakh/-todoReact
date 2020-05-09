import React from 'react';
<<<<<<< HEAD
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

=======

const Item = ({ value, isDone }) => (
<span className={styles.item}> { value }</span>
);


>>>>>>> e0501053a34aad2cb7463dde092cc700dee1c557
export default Item;