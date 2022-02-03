//component in react is just a js function that just returns jsx
//no puedes tener mas de un root element en un componente
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card"
import React, { useState } from 'react';

const ExpenseItem = (props) =>  {

  //useState es un hook simpre devuelve un array deconstruido
  const [title, setTitle] = useState(props.title); //primer elemento es la variable cambiable y el segundo la function para actualizarla


  const clickHandler = () =>{
    setTitle("Updated");
  };
  //props es por defecto lo que recibe, no se pasam parms por separad, keyvaluepairs
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
}

export default ExpenseItem;
