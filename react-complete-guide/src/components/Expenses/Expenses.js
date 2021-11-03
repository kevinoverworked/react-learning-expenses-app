import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
    const [enteredYear, setFilteredYear] = useState("2021");

    const saveExpenseYearHandler = (enteredYear) => {
        setFilteredYear(enteredYear);
    };

    const filteredExpenses = props.data.filter(item => item.date.getFullYear().toString() === enteredYear);

    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter selected={enteredYear} onSaveYear={saveExpenseYearHandler} />
                {filteredExpenses.map((expenses) => (
                    <ExpenseItem
                        key={expenses.id}
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
