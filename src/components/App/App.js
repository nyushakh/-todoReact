import React from 'react';
import ItemList from '../ItemList/ItemList';
import ItemInput from "../ItemInput/InputItem";
import Footer from "../Footer/Footer";
import styles from './App.module.css';

const App = () => {

    const items = [
            {
                value: 'Написать новое приложение',
                isDone: true
            },
            {
                value: 'Написать новое',
                isDone: false
            },
            {
                value: 'Написать',
                isDone: true
            }
        ];


    return (
        <div className={styles.wrap}>
            <h1 className={styles.title}>Важные дела:</h1>
            <ItemInput/>
            <ItemList items={items}/>
            <Footer count={6}/>
        </div>);

};

export default App;