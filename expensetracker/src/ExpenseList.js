import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <ul>
      {expenses.map((expense, index) => (
        <li key={index}>{expense.description} -  ₹{expense.amount}</li>
      ))}
    </ul>
  );
};

export default ExpenseList;
