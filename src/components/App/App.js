import React from 'react';
import ItemList from '../ItemList/ItemList';
import ItemInput from "../ItemInput/InputItem";
import Footer from "../Footer/Footer";

const App = () => (
    <div>
        <ItemInput/>
        <h1>Важные дела</h1>
        <ItemList />
        <Footer/>
    </div>
);

export default App;