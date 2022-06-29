import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem(props){

    return(
      <div  className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>

        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <h3 className='expense-item__location'>Location: {props.location}</h3>

          <div>
            <h3 className='expense-item__price'>Rs: {props.amount}</h3>
          </div>
          
        </div>
      </div>
  );
}
  export default ExpenseItem;