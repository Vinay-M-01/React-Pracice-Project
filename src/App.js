import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Food",
      amount: 100,
      date: new Date(2020, 7, 14),
      location: "President, Hubli",
    },

    { id: "e2",
     title: "Petrol", 
     amount: 200, 
     date: new Date(2021, 2, 12),
     location: "Shell, Unkal",
    },
     
    {
      id: "e3",
      title: "Car Insurance",
      amount: 300,
      date: new Date(2021, 2, 28),
      location: "Hyundai, BRK",
    },
    {
      id: "e4",
      title: "Party",
      amount: 400,
      date: new Date(2021, 5, 12),
      location: "Hans, Vidyanagar",
    },
  ];

  return (
    <div>

      <h2>Let's get started!</h2>
      <div>
      {expenses.map(expenses => {
        return (
          <ExpenseItem title={expenses.title} 
          amount={expenses.amount}
          date = {expenses.date}
          location = {expenses.location}>
          </ExpenseItem>
        )
      })};
      </div>

    </div>    
  );
}

export default App;
