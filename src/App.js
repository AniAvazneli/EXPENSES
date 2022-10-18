import React from 'react';
import Expenses from './components/Expenses/Expenses';
import './index.css';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    { id: "1", title: "GioHBD", amount: 120, date: new Date(2022, 12, 15) },
    { id: "1", title: "sdsd", amount: 23, date: new Date(2022, 12, 15) },
    { id: "1", title: "GioffffHBD", amount: 444, date: new Date(2022, 12, 15) },
    { id: "1", title: "aaa", amount: 888, date: new Date(2022, 12, 15) },
  ];

  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
