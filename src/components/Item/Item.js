import React from 'react';

const Item = ({ value, isDone }) => (
<span className={styles.item}> { value }</span>
);


export default Item;