import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
    return (
        <div className="expenses">
            {props.data.map((expenses) => (
                <ExpenseItem
                    title={expenses.title}
                    amount={expenses.amount}
                    date={expenses.date}
                />
            ))}
        </div>
    );
}

export default Expenses;
