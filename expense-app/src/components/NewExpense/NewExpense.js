import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [newExpense, setNewExpense] = useState(true);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setNewExpense(true);
    };

    const newExpenseClickHandler = () => {
        setNewExpense(false);
    };

    const cancelExpenseClickHandler = () => {
        setNewExpense(true);
    };

    return (
        <div className="new-expense">
            {newExpense && <button type="button" onClick={newExpenseClickHandler}> Add New Expense</button>}
            {!newExpense && <ExpenseForm onCancel={cancelExpenseClickHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    )
};

export default NewExpense;