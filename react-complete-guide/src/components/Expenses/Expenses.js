import React, { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [enteredYear, setFilteredYear] = useState("2021");

    const saveExpenseYearHandler = (enteredYear) => {
        setFilteredYear(enteredYear);
    };

    const filteredExpenses = props.data.filter(item => item.date.getFullYear().toString() === enteredYear);

    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter selected={enteredYear} onSaveYear={saveExpenseYearHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </li>
    );
}

export default Expenses;
