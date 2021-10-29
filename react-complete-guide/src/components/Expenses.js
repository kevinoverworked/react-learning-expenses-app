import ExpenseItem from "./ExpenseItem";

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