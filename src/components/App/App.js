import React from 'react';
import ItemList from '../ItemList/ItemList';
import ItemInput from "../ItemInput/InputItem";
import Footer from "../Footer/Footer";
import styles from './App.module.css';

<<<<<<< HEAD
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
=======
const  todoItem = 'Написать новое приложение';
const App = () => {
    const items = [
        { value: 'Написать новое приложение',
          isDone: true
        },
        { value: 'проти все уроки',
            isDone: true
        },
        { value: 'сделать все дела',
          isDone: false
        }
    ];
    return (
        <div className={styles.wrap}>
            <ItemInput/>
            <h1 className={styles.title}>Важные дела:</h1>
            <ItemList items={items} />
            <Footer count={3}/>
        </div>
    )
>>>>>>> e0501053a34aad2cb7463dde092cc700dee1c557

};

export default App;