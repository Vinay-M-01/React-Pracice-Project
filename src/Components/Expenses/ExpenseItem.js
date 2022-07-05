
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


import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)

//Adding event listener for changing the title
  const clickHandler = () => {
    setTitle('Updated the value');
    console.log('Title Changed!!');
  }
  const [amount, setTitle1] = useState(props.amount)

//Adding event listner to update the amount to $100 
  const changeHandler = () => {
    setTitle1('100')
    console.log('Expense Changed!!');
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={changeHandler}>Change Expense</button>
    </Card>
  );
}

export default ExpenseItem;