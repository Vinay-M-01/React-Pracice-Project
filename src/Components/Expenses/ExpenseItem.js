
// import ExpenseDate from './ExpenseDate'
// import './ExpenseItem.css'

// function ExpenseItem(props){

//     return(
//       <div  className="expense-item">
//         <ExpenseDate date={props.date}/>

//         <div className="expense-item__description">
//           <h2>{props.title}</h2>
//           <h3 className='expense-item__location'>Location: {props.location}</h3>

//           <div>
//             <h3 className='expense-item__price'>Rs: {props.amount}</h3>
//           </div>
          
//         </div>
//       </div>
//   );
// }
//   export default ExpenseItem;


  import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log('Clicked!!');
  }

  const deleteHandler = () => {
    console.log('Element Delted!!');
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteHandler}>Delete Expense</button>

    </Card>
  );
}

export default ExpenseItem;