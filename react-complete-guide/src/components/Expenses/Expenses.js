import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
    const [enteredYear, setFilteredYear] = useState("2021");

    const saveExpenseYearHandler = (enteredYear) => {
        console.log("in Expenses.js");
        console.log(enteredYear);
        setFilteredYear(enteredYear);
    };

    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter selected={enteredYear} onSaveYear={saveExpenseYearHandler} />
                {props.data.map((expenses) => (
                    <ExpenseItem
                        title={expenses.title}
                        amount={expenses.amount}
                        date={expenses.date}
                    />
                ))}
            </Card>
        </div>
        
    );
}

export default Expenses;
