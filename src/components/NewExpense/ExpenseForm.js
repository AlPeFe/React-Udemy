import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {

    const[enteredTitle, setEnteredTitle] =  useState('');
    const[enteredAmount, setEnteredAmount] = useState('');
    const[enteredDate, setEnteredDate] = useState('');

    //u can also do it with only 1 useState
    // const[userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount: '',
    //     enteredDate:''
    // })

    const titleChangleHandler = (event) =>{
        setEnteredTitle(event.target.value);

        //esta es la forma de hacerlo cuando solo hay 1 state para todos los cambios, se pueden usar ambos el individual o el multiple pero recomienda multimple
        // setUserInput((prevState)=>{ 
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     }
        // });
    };

    const amountChangedHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangedHandler = (event)=>{
        setEnteredDate(event.target.value);
    };

    const submitHandler =(e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);
        
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    }

    return(
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input value={enteredTitle} type="text" onChange={titleChangleHandler}/>
            </div>
        </div>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Amount</label>
                <input value={enteredAmount} type="number" min="0.01" step="0.01" onChange={amountChangedHandler} />
            </div>
        </div>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Date</label>
                <input 
                    value={enteredDate}
                    type="date" 
                    min="2019-01-01" 
                    max="2022-12-31"
                    onChange={dateChangedHandler}
                />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add expense</button>
        </div>
    </form>
    );
};

export default ExpenseForm;