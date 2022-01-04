//component in react is just a js function that just returns jsx
//no puedes tener mas de un root element en un componente
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card"

function ExpenseItem(props) {
  //props es por defecto lo que recibe, no se pasam parms por separad, keyvaluepairs
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
