import React from 'react';

const ExpenseSummary = ({ expenses }) => {
  const total = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
  
  return <p>Total Expenses:  ₹{total}</p>;
};

export default ExpenseSummary;
