import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
    return (
        <Card className="expenses">
            {props.data.map((expenses) => (
                <ExpenseItem
                    title={expenses.title}
                    amount={expenses.amount}
                    date={expenses.date}
                />
            ))}
        </Card>
    );
}

export default Expenses;