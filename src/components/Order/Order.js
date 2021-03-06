import React from 'react';

import classes from './Order.css';

const order = (props) => {
    const ingredients = [];

    for(let key in props.ingredients)
        ingredients.push({
            name: key,
            amount: props.ingredients[key]
        });

    console.log(props, ingredients);

    return (
        <div className={classes.Order}>
            <p>Ingredientes: {ingredients.map((ingredient, key) => 
                (<span key={key} style={{
                    textTransform: 'capitalize',
                    display: 'inline-block',
                    margin: '0 8px',
                    border: '1px solid #ccc',
                    padding: '5px'
                }}>{ingredient.name} ({ingredient.amount}); </span>))}</p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    );
};

export default order;