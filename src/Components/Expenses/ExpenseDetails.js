function ExpenseDetails(props) {
    return (
        <div>
        <h2>{props.title}</h2>
        <div>
            <h3 className='expense-item__price'>Rs: {props.amount}</h3>
        </div>
        </div>
    )
}

export default ExpenseDetails;