import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';

const ItemInput = () => (
    <div className={styles.input}>
        <TextField
            id="standard-basic"
            label="Добавить задание"
            placeholder="Введите ваше задание здесь"
            fullWidth
            variant="outlined"
        />
    </div>
);

export default ItemInput;
